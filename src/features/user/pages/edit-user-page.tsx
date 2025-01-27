'use client';
import { useParams } from "next/navigation";


export const EditUserPage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR User id : {params.id}</>;
};