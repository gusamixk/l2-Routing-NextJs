'use client';
import { useParams } from "next/navigation";


export const EditPostPage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR Post id : {params.id}</>;
};