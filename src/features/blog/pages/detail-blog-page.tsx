import {BlogCard} from '@/features/blog/components/BlogCard';

type DetailBlogPage = {
    params: Promise<{id : string}>;
};

export const DetailBlogPage = async ({params} : DetailBlogPage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR Blog id :{id}
        <BlogCard id= {id}/>
        </>
    )
}