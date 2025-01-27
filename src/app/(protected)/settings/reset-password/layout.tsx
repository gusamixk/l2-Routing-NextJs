import { type Metadata } from "next"

export const metadata: Metadata ={
    title: 'Settings-Profile'
}
export const SettingsResetLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>
};
export default SettingsResetLayout;