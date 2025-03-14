"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token
        localStorage.setItem("token", data.token);

        // Show success toast
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        // Redirect after a short delay
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        throw new Error(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-cover bg-center login-background">
      <ToastContainer />
      <div className="flex items-center justify-center h-full bg-opacity-50">
        <div className="bg-white p-8 min-h-[60vh] rounded-xl w-[32%] shadow-sm">
          <h2 className="text-2xl text-center font-bold mb-4">
            Log in to your account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                required
              />
            </div>

            <div className="my-10 text-right">
              <span>Forgot password? </span>
              <a href="/auth/reset-password" className="text-base text-[#2E8B57] font-medium">
                Reset here
              </a>
            </div>

            <button
              type="submit"
              className="text-white w-full border bg-[#2E8B57] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="my-6 text-center">
              <span>New User </span>
              <a href="/auth/register" className="text-base text-[#2E8B57] font-medium">
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
