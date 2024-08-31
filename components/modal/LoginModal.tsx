'use client'
import GeneralModal from './GeneralModal'
import Link from 'next/link'
import { loginModalFunc, selectLoginModal } from '@/redux/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Input from '../common/inputs/Input'

const RegisterModal = () => {
  const isLoginModalOpen = useAppSelector(selectLoginModal)
  const dispatch = useAppDispatch();
  const router=useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback) => {
      if (callback?.ok) {
        router.refresh();
        dispatch(loginModalFunc());
        toast.success("Login successfully")
  
      }
      if (callback?.error) {
        toast.error(callback?.error)
      }
    })
  }

const bodyElement = (
  <>
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
      Don't you have an account? <Link className='text-primary-red' href='/register'>Sign up</Link>
    </div>
  )
  return (
    <GeneralModal
      title='Sign in'
      bodyElement={bodyElement}
      footerElement={footerElement}
      onSubmit={handleSubmit(onSubmit)}
      onClose={() => dispatch(loginModalFunc())}
      isOpen={isLoginModalOpen}
    />
  )
}
export default RegisterModal
