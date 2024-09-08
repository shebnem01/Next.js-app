'use client'
import { Product, Review, User } from '@prisma/client';
import Rating from '@mui/material/Rating';
import Button from '../common/button/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReviewModal from '../modal/ReviewModal';
interface ReviewsProps {
  reviews: (Review & { user: User })[];
  currentUser: User | null
  product: Product
}
const Reviews: React.FC<ReviewsProps> = ({ reviews, currentUser,product }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  const handleSubmit = () => {
    if (!currentUser) {
      router.push('/login')
      return
    }
    toggleModal();

  }
  return (
    <>
      <div className='lg:flex justify-between mb-4 gap-4'>
        <ul className='lg:w-2/3'>
          {reviews.map((review) => (
            <li key={review.id} className='py-4 border-b border-border-gray'>
              <div className='text-lg font-medium mb-2 capitalize'>{review.user.name}</div>
              <Rating name="read-only" value={review.rating} readOnly />
              <div className='text-text-dark text-sm leading-5'>{review.comment}</div>
            </li>
          ))}
        </ul>
        <div className="bg-bg-light-2 flex flex-col items-center justify-center h-[300px] lg:w-1/4 mt-3 mx-auto sm:w-[400px] w-full">
          <div className='text-lg font-medium mb-8'>Review this product</div>
          <div className="w-[90%] mx-auto"><Button onSubmit={handleSubmit} btnLabel='Write a Review' /></div>
        </div>
      </div>

      <ReviewModal toggleModal={toggleModal} showModal={showModal} currentUser={currentUser} product={product} />
    </>
  )
}

export default Reviews