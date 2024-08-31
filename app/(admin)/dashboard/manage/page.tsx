import getProduct from '@/app/actions/getProduct'
import ManageTable from '@/components/dashboard/ManageTable';


const ManagePage = async() => {
  const products = await getProduct({category: null});
  return (
    <ManageTable products={products}/>
  )
}

export default ManagePage;
