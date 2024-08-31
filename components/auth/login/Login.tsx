// Login.tsx
'use client'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Input from '@/components/common/inputs/Input'
import Button from '@/components/common/button/Button'
import { User } from '@prisma/client'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PasswordInput from '@/components/common/inputs/PasswordInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/libs/validationSchema'
import { FormData } from '@/types/types'

const Login = ({ currentUser }: { currentUser: User|null }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  if (currentUser) {
    router.push('/')
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback) => {
      if (callback?.ok) {
        router.refresh();
        toast.success("Login successfully")
      }
      if (callback?.error) {
        toast.error(callback?.error)
      }
    }).finally(() => setLoading(false))
  }

  return (
    <div className="h-[70vh] flex justify-center items-center ">
      <div className='w-[600px] mx-auto my-10 p-5 shadow'>
        <div className="text-primary-red font-medium text-[32px] leading-9 text-center mb-8">Sign in</div>
        <Input
          label="E-mail"
          type="email"
          id="email"
          placeholder="Email"
          register={register}
          errors={errors}
          required
        />
        <PasswordInput
          label="Password"
          type="password"
          id="password"
          placeholder="Password"
          register={register}
          errors={errors}
          required
        />
        <Button
          btnLabel={loading ? "" : "Sign in"}
          outline={false}
          disabled={loading}
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading && <AiOutlineLoading3Quarters className="inline-block animate-spin ml-2" />}
        </Button>

        <div className='mt-4 text-sm leading-[18px] text-text-dark text-center'>
          Don't you have an account? <Link className='text-primary-red' href='/register'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}
export default Login;
