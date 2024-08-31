import LikedProduct from "@/components/likedProduct/LikedProduct"
import { getCurrentUser } from "../actions/getCurrentUser"
const WishlistPage = async() => {
  const currentUser=await getCurrentUser();
  return (
   <LikedProduct currentUser={currentUser}/>
  )
}

export default WishlistPage