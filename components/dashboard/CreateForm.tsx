'use client'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import app from "@/libs/firebase";
import axios from "axios";
import Input from "../common/inputs/Input";
import CheckInput from "../common/inputs/CheckInput";
import { categories } from "@/constant/Constant";
import ChoiceInput from "../common/inputs/ChoiceInput";
import FileInput from "../common/inputs/FileInput";
import Button from "../common/button/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CreateForm = () => {
    const [img, setImg] = useState<File | null>(null);
    const [uploadedImg, setUploadedImg] = useState<string | null>(null);
    const [loading,setLoading]=useState(false);
    const { register, handleSubmit, watch, setValue,reset, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            description: '',
            image: '',
            price: '',
            category: '',
            brand: '',
            inStock: false
        }
    });

    const handleChange = async () => {
        if (!img) return

        try {
            const storage = getStorage(app);
            const storageRef = ref(storage, `images/${img.name}`);

            const uploadTask = uploadBytesResumable(storageRef, img);
            await new Promise<void>((resolve, reject) => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setUploadedImg(downloadURL);
                            resolve();
                        });
                    }
                );
            });
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await handleChange();

        if (!uploadedImg) {
            toast.error("Image upload failed");
            return;
        }
        const newData = { ...data, image: uploadedImg };
        setLoading(true)
        axios.post("/api/product", newData)
            .then(() =>{
                toast.success('Product created successfully')
                reset();
            })
            .catch(error => toast.error(error))
            .finally(()=>setLoading(false))
    };

    const category = watch('category');
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
    };

    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0]);
        }
    };

    return (
        <div className='w-[70%] mx-auto'>
            <div className='text-[32px] text-center my-4 font-semibold'>Create Product</div>
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
                label="Brand"
                type="text"
                id="brand"
                placeholder="Brand"
                register={register}
                errors={errors}
                required
            />
            <Input
                label="Price"
                type="text"
                id="price"
                placeholder="Price"
                register={register}
                errors={errors}
                required
            />
            <Input
                label="Description"
                type="text"
                id="description"
                placeholder="Description"
                register={register}
                errors={errors}
                required
            />
            <CheckInput
                label="Does it have in stock?"
                id="inStock"
                register={register}
            />
            {categories.map((cat, i) => (
                <ChoiceInput
                    key={i}
                    selected={category == cat.category}
                    onClick={(category) => setCustomValue('category', category)}
                    label={cat.category}
                />
            ))}
            <FileInput
                id='file'
                label='Upload image'
                onChange={onChangeFunc}
                register={register}
                required
                errors={errors}
            />
          <Button
            btnLabel={loading ? "" : "Create Product"}
            outline={false}
            disabled={loading}
            onSubmit={handleSubmit(onSubmit)}
          >
            {loading && <AiOutlineLoading3Quarters className="inline-block animate-spin ml-2" />}
          </Button>
        </div>
    )
}

export default CreateForm;
