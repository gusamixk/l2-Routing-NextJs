import { LoginFormInner } from "./LoginFormInner"

export const LoginForm = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                <p className="text-gray-600">Please sign in to continue</p>
            </div>
            <div className="text-center">
                <p>Don't have an account?</p>
                <a href="/register" className="text-blue-600 hover:underline">Sign up</a> 
            </div>

            <LoginFormInner />
        </div>
    )
}