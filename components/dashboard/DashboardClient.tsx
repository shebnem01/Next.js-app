'use client'
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
const DashboardClient = ({currentUser}:{currentUser:User|null}) => {
const router=useRouter();
if (!currentUser || currentUser.role !== 'ADMIN') {
  router.push('/')
}
  return (
    <div>DashboardClient</div>
  )
}

export default DashboardClient

