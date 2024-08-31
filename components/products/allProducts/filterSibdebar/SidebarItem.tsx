'use client'

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

interface SidebarItemProps{
    title:string
    items?:string[]
    handleSelectCategory?:(value: string) => void
}

const SidebarItem:React.FC<SidebarItemProps> = ({title,items}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelectCategory = useCallback(async (catName: string) => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', catName);
    router.push(`/products?${params.toString()}`);
  }, [router, searchParams]);
  return (
    <div className="mb-4 pb-4 border-b border-border-gray">
       <div className="font-semibold mb-2">
       {title}
       </div>
        <div>
            {items?.map((item,_i)=>
            <div key={_i} className="py-2 cursor-pointer font-medium" onClick={()=>handleSelectCategory(item)}>
                <label htmlFor={item} className="cursor-pointer">{item}</label>
                <input className="hidden" type="checkbox" name='radio' id={item}/>
            </div>
            )}
        </div>
        
    </div>
  )
}

export default SidebarItem