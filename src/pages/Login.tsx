import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/signup" className="text-pink-600 hover:underline">
                        Don&apos;t have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
