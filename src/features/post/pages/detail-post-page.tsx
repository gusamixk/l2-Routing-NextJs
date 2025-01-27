import {PostCard} from '@/features/post/components/PostCard';

type DetailPostPage = {
    params: Promise<{id : string}>;
};

export const DetailPostPage = async ({params} : DetailPostPage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR Post id :{id}
        <PostCard id= {id}/>
        </>
    )
}