'use client';
import { useParams } from "next/navigation";


export const EditCustomerPage = () => {
    const params = useParams<{id: string}>();
    return <>Edit CSR Customer id : {params.id}</>;
};