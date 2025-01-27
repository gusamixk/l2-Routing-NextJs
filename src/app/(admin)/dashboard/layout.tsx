import { DashboardLayout } from "@/components/Layouts/DashboardLayout";


const DashboardLayouts: React.FC<React.PropsWithChildren> = ({children}) => {
    return <DashboardLayout>{children}</DashboardLayout>
};

export default DashboardLayouts;
