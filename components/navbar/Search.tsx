"use client";
import { LuSearch } from "react-icons/lu";
import SearchModal from "./SearchModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('search', query);
      setIsModalOpen(true); 
    } else {
      params.delete('search');
      setIsModalOpen(false);
    }
    router.push(`?${params.toString()}`);

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/products?search=${query}`);
        setProducts(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query, router]);

  const handleProductClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center w-full  lg:h-[50px] sm:h-[45px] 
    h-[40px] relative border bg-rede-500 border-border-gray rounded-[50px]">
      <div className="h-full lg:w-[50px]  sm:w-[45px] w-[40px] flex items-center justify-center bg-red-50 rounded-[50px]">
        <LuSearch size={22} />
      </div>
      <input
        className="h-full w-[80%] outline-none ps-4 lg:text-normal text-sm font-normal"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isModalOpen && <SearchModal products={products} onProductClick={handleProductClick} />}
    </div>
  );
};

export default Search;
