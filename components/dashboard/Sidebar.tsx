import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import DashboardItem from "./DashboardItem";
import Logo from "./Logo";


const Sidebar = () => {
  const dashboard=[
    {
      url:"/dashboard",
      name:"Dashboard",
      icon:RxDashboard,
    },
    {
      url:"/dashboard/manage",
      name:"Products Manage",
      icon:RxDashboard,
    },
    {
      url:"/dashboard/orders",
      name:"Orders",
      icon:RxDashboard,
    },
    {
      url:"/dashboard/create",
      name:"Create Product",
      icon:MdOutlineCreateNewFolder,
    },
    {
      url:"/dashboard/edit",
      name:"Edit Product",
      icon:IoMdCreate,
    },
  ]
  return (
    <div className='w-[15%] rounded-xl bg-primary-red p-5 m-2 h-screen'>
      <Logo/>
      <ul className="mt-4">
        {dashboard.map((item,i)=>(
          <DashboardItem key={i} icon={item.icon} name={item.name} url={item.url}/>
        ))}

      </ul>
    </div>
  )
}

export default Sidebar