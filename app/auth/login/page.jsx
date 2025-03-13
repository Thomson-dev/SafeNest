"use client";
import React from "react";
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    // If authentication is successful, navigate to the dashboard
    router.push("/dashboard");
  };

  return (
    <div className="h-screen bg-cover  bg-center login-background">
      <div className="flex items-center justify-center h-full bg-opacity-50">
        <div className="bg-white p-8 min-h-[60vh] rounded-xl w-[32%] shadow-sm">
          <h2 className="text-2xl text-center font-bold mb-4">
            Log in to your account
          </h2>

          {/* Move onSubmit inside the form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                required
              />
            </div>

            <div className="my-10 text-right">
              <span>Forgot password? </span>
              <a
                href="/auth/reset-password"
                className="text-base text-[#2E8B57] font-medium"
              >
                Reset here
              </a>
            </div>

            <button
              type="submit"
              className="text-white w-full border bg-[#2E8B57] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
            >
              Login
            </button>

            <div className="my-6 text-center">
              <span>New User </span>
              <a
                href="/auth/register"
                className="text-base text-[#2E8B57] font-medium"
              >
              Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
