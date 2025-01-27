import { Navbar } from "../Navbar";
import { Container } from "./Container";


type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <main className={`${className}`}>
            <Navbar/>
            <Container>{children}</Container>
        </ main>
    );
};