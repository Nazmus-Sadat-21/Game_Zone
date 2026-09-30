"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await signIn.email({
      email: formData.email,
      password: formData.password,
      rememberMe: true,
      callbackURL:"/"
    });
    if (data) {
      toast.success(`SignIn successfully! welcome ${data.user.name}`);
    }
    if (error) {
      console.error("Sign in error:", error);
      return toast.error(error.message || "Failed to sign in");
    }
  };

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#121522]/90 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-[0_0_50px_rgba(15,23,42,0.8)] p-6 sm:p-8 transition-all duration-300 hover:border-slate-700/80">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white">
            GAME
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              ZONE
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Welcome back, Gamer! Sign in to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="gamer@gamezone.com"
              className="w-full bg-slate-900/80 border border-slate-800 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
            />
          </div>

          {/* Password & Forget Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>
              <a
                href="#forgot"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors hover:underline cursor-pointer"
              >
                Forget password?
              </a>
            </div>

            {/* Input with Eye Button */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-slate-900/80 border border-slate-800 text-white text-sm rounded-xl pl-4 pr-11 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  /* Eye Off Icon */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  /* Eye Icon */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 123c1.274 4.057 5.064 7 9.542 7 4.477 0 8.268-2.943 9.542-7-1.274-4.057-5.064-7-9.542-7-4.478 0-8.268 2.943-9.542 7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Signin Button */}

          <Link href="/">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:opacity-95 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </Link>
        </form>

        {/* Create New Account */}
        <div className="mt-6 text-center text-xs text-slate-400">
          <p>
            Don't have an account?{" "}
            <Link
              href="/SignUp"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors hover:underline cursor-pointer"
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
