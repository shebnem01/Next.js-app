'use client'
import { RiCloseLargeFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { reviewModalFunc, selectReviewModal } from "@/redux/modal/modalSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { Product, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import RatingInput from "../common/inputs/RatingInput";
import Input from "../common/inputs/Input";
import Button from "../common/button/Button";
import { useState } from "react";

const ReviewModal = ({ currentUser, product }: { currentUser: User | null, product: Product }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const showReviewModal = useAppSelector(selectReviewModal);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      rating: 0,
      userId: currentUser?.id,
      productId: product.id,
      comment: ''
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios.post('/api/review', data).then(() => {
      toast.success("Review added successfully");
      reset();
      router.refresh();
      dispatch(reviewModalFunc())
    }).catch((err) => toast.error(err))
      .finally(() => setLoading(false))
  }
  if (showReviewModal) {
    return (
      <>
        <div className="bg-blur-black w-full fixed top-0 left-0 h-full " onClick={() => dispatch(reviewModalFunc())}></div>
        <div className='bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] p-8 shadow-xl w-[90%] md:w-[600px] '>
          <button className="absolute right-3 top-3" onClick={() => dispatch(reviewModalFunc())}><RiCloseLargeFill size={22} /></button>
          <div className='text-2xl my-7 font-semibold text-center'>Review this product</div>
          <RatingInput
            name="rating"
            label="Product Rating"
            control={control}
            errors={errors}
            required
          />
          <Input
            label="Write a review"
            type='text'
            id='comment'
            placeholder='Write a reviews'
            register={register}
            errors={errors}
            required />
          <Button
            btnLabel={loading ? "" : "Send"}
            disabled={loading}
            onSubmit={handleSubmit(onSubmit)}
          >
            {loading && <AiOutlineLoading3Quarters className="inline-block animate-spin ml-2" />}
          </Button>

        </div>
      </>
    )
  }

}

export default ReviewModal