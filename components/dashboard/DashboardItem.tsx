import Link from "next/link"
import { IconType } from "react-icons"

interface DashboardItemProps{
    url:string 
    name:string 
    icon:IconType
}

const DashboardItem:React.FC<DashboardItemProps> = ({name,url,icon:Icon}) => {
  return (
    <li><Link href={url}>{name}</Link></li>
  )
}

export default DashboardItem