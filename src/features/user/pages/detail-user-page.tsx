import {UserCard} from '@/features/user/components/UserCard';

type DetailUserPage = {
    params: Promise<{id : string}>;
};

export const DetailUserPage = async ({params} : DetailUserPage) => {
    const id = (await params).id;
    return (
        <>
        Detail SSR User id :{id}s
        <UserCard id= {id}/>
        </>
    )
}