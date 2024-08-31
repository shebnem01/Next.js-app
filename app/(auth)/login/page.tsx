import { getCurrentUser } from "@/app/actions/getCurrentUser"
import Login from "@/components/auth/login/Login"
const LoginPage = async() => {
  const currentUser=await getCurrentUser();
  return (
    <Login currentUser={currentUser}/>
    
  )
}

export default LoginPage