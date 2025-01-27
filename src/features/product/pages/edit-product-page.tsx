'use client';
import { useParams } from "next/navigation";


export const EditProductPage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR Product id : {params.id}</>;
};