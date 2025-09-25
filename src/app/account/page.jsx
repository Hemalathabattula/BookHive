"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Toggle between register/login

  // Register handler
  const handleRegister = async (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (data.password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setMessage(result.message || result.error);
      if (res.ok) setShowLogin(true); // After successful registration, show login
    } catch (err) {
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
      reset();
    }
  };

  // Login handler
  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      const result = await res.json();
      if (res.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: result.name, email: data.email })
        );
        reset();
        router.push("/"); // Redirect to homepage after login
      } else {
        setMessage(result.error || "Login failed");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome to BookHive</h2>
          <p className="mt-2 text-gray-600">
            {showLogin ? "Log in to your account" : "Create a new account"}
          </p>
        </div>

        {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

        {!showLogin ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Register</h3>
              <input
                {...register("username", { required: true })}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-xl"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Register"}
              </button>
            </form>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setShowLogin(true)}
                className="text-blue-600 underline"
              >
                Log in
              </button>
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Login</h3>
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={() => setShowLogin(false)}
                className="text-blue-600 underline"
              >
                Register
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
