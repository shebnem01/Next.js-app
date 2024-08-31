import Banner from "@/components/home/banner/Banner";
import { categories } from "@/constant/Constant";
import getProduct from "./actions/getProduct";
import Categories from "@/components/home/categories/Categories";
import Products from "@/components/products/Products";
import { getCurrentUser } from "./actions/getCurrentUser";
export default async function Home() {

  const productsByCategory = await Promise.all(
    categories.map(async ({ category }) => {
      const products = await getProduct({ category});
      return { category, products };
    })
  );
  const currentUser = await getCurrentUser();
  return (
    <main>
      <Banner />
      <Categories/>
      {productsByCategory.map(({ category, products }) => (
        <Products currentUser={currentUser}  key={category} category={category} products={products} />
      ))}
    </main>
  );
}
