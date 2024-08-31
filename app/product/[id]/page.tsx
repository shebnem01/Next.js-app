
import getProductId from '@/app/actions/getProductId';
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import ProductDetail from '@/components/products/ProductDetail';
import getProduct from '@/app/actions/getProduct';
import SimilarProducts from '@/components/products/SimilarProducts';
import { Product } from '@prisma/client';

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const [product, currentUser] = await Promise.all([
    getProductId({ productId: params.id }),
    getCurrentUser(),
  ]);

  const categoryProducts: Product[] = product 
    ? await getProduct({ category: product.category }) 
    : [];
    
  const similarCategoryProducts = categoryProducts.filter((item: Product) => item.id !== params.id);

  if (product) {
    return (
      <>
        <ProductDetail 
          currentUser={currentUser} 
          product={product} 
        />
       <SimilarProducts currentUser={currentUser} products={similarCategoryProducts} />
      </>
    );
  }
}

export default ProductDetailPage;
