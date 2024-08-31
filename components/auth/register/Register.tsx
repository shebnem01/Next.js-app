'use client'
import Link from 'next/link'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import Input from '@/components/common/inputs/Input'
import Button from '@/components/common/button/Button'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import PasswordInput from '@/components/common/inputs/PasswordInput'
const Register = () => {
const [loading,setLoading]=useState(false);
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
        setLoading(true)
        axios.post("/api/register", data).then(() => {
            toast.success('Register successfully!')
        }).catch((err: any) => toast.error("Register unsuccessfully!"))
        .finally(()=>setLoading(false))
    }

    return (
        <div className="h-[70vh] flex justify-center items-center ">
     <div className='w-[600px] mx-auto my-10 p-5 shadow'>
            <div className="text-primary-red font-medium text-[32px] leading-9 text-center mb -8">Sign up</div>
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
            btnLabel={loading ? "" : "Sign up"}
            outline={false}
            disabled={loading}
            onSubmit={handleSubmit(onSubmit)}
          >
            {loading && <AiOutlineLoading3Quarters className="inline-block animate-spin ml-2" />}
          </Button>

            <div className='mt-4 text-sm leading-[18px] text-text-dark text-center'>
                Do you have an account? <Link className='text-primary-red' href='/login'>Sign in</Link>
            </div>
        </div>
        </div>
    )
}
export default Register
