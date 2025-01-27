import {ProductCard} from '@/features/product/components/ProductCard';

type DetailProductPage = {
    params: Promise<{id : string}>;
};

export const DetailProductPage = async ({params} : DetailProductPage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR product id :{id}
        <ProductCard id= {id}/>
        </>
    )
}