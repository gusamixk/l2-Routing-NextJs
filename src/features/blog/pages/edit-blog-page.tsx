'use client';
import { useParams } from "next/navigation";


export const EditBlogPage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR Pages id : {params.id}</>;
};