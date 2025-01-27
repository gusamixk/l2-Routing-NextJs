type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
    title: string;
    description?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({

    children,
    className,
    ...props
}) => {
    return (
        <main className={`${className}`}>
            <h1 className="text-4xl">{props.description}</h1>
            {children}
        </main>
    )
}