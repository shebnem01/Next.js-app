import React from 'react'
interface DescriptionProps{
    description:string
}
const Description:React.FC<DescriptionProps> = ({description}) => {
  return (
    <div className='text-text-dark sm:text-normal text-sm font-[300]'>{description}</div>
  )
}

export default Description