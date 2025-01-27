import { MainLayout } from "@/components/Layouts/MainLayout";


const GuestLayout: React.FC<React.PropsWithChildren> = ({children}) => {
    return <MainLayout>{children}</MainLayout>
};

export default GuestLayout;
