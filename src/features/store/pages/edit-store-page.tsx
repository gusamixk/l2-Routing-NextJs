'use client';
import { useParams } from "next/navigation";


export const EditStorePage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR Store id : {params.id}</>;
};