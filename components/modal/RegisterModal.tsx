'use client'
import GeneralModal from './GeneralModal'
import Link from 'next/link'
import { registerModalFunc, selectRegisterModal } from '@/redux/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import Input from '../common/inputs/Input'
const RegisterModal = () => {
  const isRegisterModalOpen = useAppSelector(selectRegisterModal)
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register",data).then(()=>{
     dispatch(registerModalFunc());
     toast.success('Register successfully!')
    }).catch((err:any)=>toast.error("Register unsuccessfully!"))
  }
 
  const bodyElement = (
    <>
      <Input
        label="Name"
        type="text"
        id="name"
        placeholder="Name"
        register={register}
        errors={errors}
        required
      />
      <Input
        label="E-mail"
        type="email"
        id="email"
        placeholder="Email"
        register={register}
        errors={errors}
        required
      />
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Password"
        register={register}
        errors={errors}
        required
      />
    </>
  );


  const footerElement = (
    <div className='mt-4 text-sm leading-[18px] text-text-dark text-center'>
      Do you have an account? <Link className='text-primary-red' href='/login'>Sign in</Link>
    </div>
  )
  return (
    <GeneralModal
      title='Sign up'
      bodyElement={bodyElement}
      footerElement={footerElement}
      onSubmit={handleSubmit(onSubmit)}
      onClose={() => dispatch(registerModalFunc())}
      isOpen={isRegisterModalOpen}
    />
  )
}
export default RegisterModal
