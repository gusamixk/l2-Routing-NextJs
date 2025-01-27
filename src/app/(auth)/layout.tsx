import { MainLayout } from "@/components/Layouts/MainLayout";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Auth',
};

const AuthLayout: React.FC<React.PropsWithChildren> = ({children}) => {
    return <>{children}</>
};

export default AuthLayout;
