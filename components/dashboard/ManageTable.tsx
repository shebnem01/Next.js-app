'use client';
import { Product, Review, User } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { BsFillTrash3Fill } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface ProductWithReviews extends Product {
  reviews: (Review & { user: User })[]|null;
}

interface ProductProps {
  products: ProductWithReviews[];
}

const ManageTable: React.FC<ProductProps> = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    brand: product.brand,
    image: product.image,
    inStock: product.inStock,
  })) || []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await axios.delete(`/api/product/delete/${id}`);
      toast.success("Product deleted successfully");
      setRows(prevRows => prevRows.filter(row => row.id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    {
      field: 'inStock',
      headerName: 'inStock',
      width: 130,
      renderCell: (params) => (
        <div>{params.row.inStock ? 'Stokda var' : 'Stokda yoxdu'}</div>
      )
    },
    {
      field: 'actions',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row.id)}>
          {loading ? (
            <AiOutlineLoading3Quarters className="inline-block animate-spin ml-2" />
          ) : (
            <BsFillTrash3Fill />
          )}
        </IconButton>
      )
    }
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
}

export default ManageTable;
