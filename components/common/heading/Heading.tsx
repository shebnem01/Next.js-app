import PageContainer from '@/components/containers/PageContainer'
import React from 'react'
interface HeadingProps {
  categoryName: string
}
const Heading: React.FC<HeadingProps> = ({ categoryName }) => {
  return (
    <div className='border border-border-gray sm:text-[32px] text-normal md:text-[26px]
     sm:leading-9 leading-6 md:py-5 py-3 mb-6 mt-10'>
      <PageContainer>
        {categoryName}
      </PageContainer>
    </div>
  )
}

export default Heading