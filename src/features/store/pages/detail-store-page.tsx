import {StoreCard} from '@/features/store/components/StoreCard';

type DetailStorePage = {
    params: Promise<{id : string}>;
};

export const DetailStorePage = async ({params} : DetailStorePage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR product id :{id}
        <StoreCard id= {id}/>
        </>
    )
}