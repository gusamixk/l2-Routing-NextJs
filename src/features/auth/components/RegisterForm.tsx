import RegisterFormInner from "./RegisterFormInner";

export const RegisterForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
                    <p className="text-gray-600 mt-2">Sign up to get started</p>
                </div>

                <RegisterFormInner />

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account? 
                        <a href="/login" className="text-blue-600 hover:underline ml-1">Sign in</a> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;