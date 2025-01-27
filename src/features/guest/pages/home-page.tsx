import { MainLayout } from "@/components/Layouts/MainLayout"
import { PageContainer } from "@/components/Layouts/PageContainer"


export const HomePage = () => {
    return (
        <MainLayout>
            <PageContainer title="Home-Page">
                <div>
                    <h1>Halaman Home</h1>
                </div>
            </PageContainer>
        </MainLayout>
    )
}