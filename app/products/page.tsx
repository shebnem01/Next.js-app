import AllProducts from '@/components/products/allProducts/AllProducts'
import { getCurrentUser } from '../actions/getCurrentUser'
const ProductsPage = async () => {
  const currentUser=await getCurrentUser();
  return (
    <AllProducts currentUser={currentUser} />
  )
}

export default ProductsPage