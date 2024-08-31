'use client'
import FilterSidebar from './filterSibdebar/FilterSidebar'
import ProductCard from '../ProductCard'
import PageContainer from '@/components/containers/PageContainer'
import Heading from '@/components/common/heading/Heading'
import FilterNav from './FilterNav'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Product, User } from '@prisma/client'
import SortMenu from './SortMenu'
import Button from '@/components/common/button/Button'
import { PiSpinnerGapLight } from "react-icons/pi";

const AllProducts = ({ currentUser }: { currentUser: User | null }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const getAllProducts = async () => {
    const category = searchParams?.get('category');
    let url = '/api/products';
    if (category) {
      url += `?category=${category}`;
    }
    try {
      setLoading(true);
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [searchParams]);

  const resetFilter = () => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete('category');
    router.push(`/products?${params.toString()}`);
  }



  const toggleFilterMenu = () => {
    setShowFilterMenu(prevShowFilterMenu => !prevShowFilterMenu);
  }

  const toggleSortMenu = () => {
    setShowSortMenu(prevShowSortMenu => !prevShowSortMenu);
  }
  const sortbyPrice = (sort: string) => {
    const sortedProducts = [...products];
    if (sort === 'high') {
      sortedProducts.sort((a, b) => a.price - b.price)

    } else if (sort === 'low') {
      sortedProducts.sort((a, b) => b.price - a.price)
    }
    else {
      setProducts(products)
    }
    setProducts(sortedProducts)
  }
  return (
    <>
      <Heading categoryName='Products' />
      <PageContainer>
        <div className="lg:hidden flex items-center gap-3 mb-5">
          <Button btnLabel='Sort' onSubmit={toggleSortMenu} />
          <Button btnLabel='Filter' onSubmit={toggleFilterMenu} />
        </div>
        <div className="flex gap-6">
          <FilterSidebar
            resetFilter={resetFilter}
            showFilterMenu={showFilterMenu}
            toggleFilterMenu={toggleFilterMenu} />
          {loading ?
            <div className='flex justify-center items-start mt-[80px] h-screen w-full'>
              <div className="animate-spin ml-2 inline-block"><PiSpinnerGapLight size={45} />
              </div>
            </div> : (
              <div className='2xl:w-[83%] xl:w-[80%] lg:w-[75%] w-full'>
                <FilterNav sortbyPrice={sortbyPrice} resultItems={products?.length} />
                <div className="flex flex-wrap gap-4">
                  {products?.map((product, i) => (
                    <ProductCard key={i} currentUser={currentUser} product={product} />
                  ))}
                </div>
              </div>
            )
          }
        </div>
      </PageContainer>
    </>
  );
}

export default AllProducts;
