import Link from "next/link"
interface NavLinkProps {
  name: string
  selected: boolean
  url: string
}

const NavLink: React.FC<NavLinkProps> = ({ name, url, selected }) => {
  return (
    <Link className={`${selected ? "bg-white text-primary-red" : "text-white"} font-medium p-2 rounded-md`} href={url}>{name}</Link>
  )
}

export default NavLink