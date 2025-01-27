'use client';
import { useRouter } from "next/navigation";

const ErrorNotFound = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
                <button 
                    onClick={() => router.back()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default ErrorNotFound;