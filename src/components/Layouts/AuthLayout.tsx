import { Children } from "react"

type AuthLayoutProps = {
    children: React.ReactNode,
    className?: string,
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({

    children,
    className
}) => {
    return <main className={`{className}`}>{children}</main>
};
