import {CustomerCard} from '@/features/customer/components/CustomerCard';

type DetailCustomerPage = {
    params: Promise<{id : string}>;
};

export const DetailCustomerPage = async ({params} : DetailCustomerPage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR Customer id :{id}
        <CustomerCard id= {id}/>
        </>
    )
}