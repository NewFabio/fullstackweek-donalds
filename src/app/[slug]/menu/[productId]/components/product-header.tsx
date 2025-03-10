"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
    product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({product}: ProductHeaderProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();
    return ( 
        <div className="relative w-full min-h-[300px]">
            <Button
                variant="secondary"
                size="icon"
                className="roudend-full absolute left-4 top-4 z-50"
                onClick={handleBackClick}
            >
            <ChevronLeftIcon />
            </Button>
            <Button
                variant="secondary"
                size="icon"
                className="roudend-full absolute right-4 top-4 z-50"
            >
            <ScrollTextIcon />
            </Button>
            <Image src={product.imageUrl} alt={product.name} fill className="object-contain">

            </Image>
        </div>
     );
}
 


export default ProductHeader;