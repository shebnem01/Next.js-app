'use client'
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface CategoryItemProps {
    category: string;
    img: string | StaticImageData;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, img }) => {
    const router = useRouter();
    const handleSelectCategory = useCallback(async (catName: string) => {
        try {
            const params = new URLSearchParams(window.location.search);
            params.set('category', catName);
            router.push(`/products?${params.toString()}`);
        } catch (error) {
            console.error(error);
        }
    }, [router]);

    return (
        <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleSelectCategory(category)}>
            <div className="sm:w-[250px] w-[200px] sm:h-[250px] h-[200px] rounded-full relative shadow">
                <Image  sizes="(max-width: 640px) 200px, 250px"  alt="img" src={img} fill className="rounded-full object-cover" />
            </div>
            <div className="mt-5 text-xl font-medium">{category}</div>
        </div>
    );
};
export default CategoryItem;