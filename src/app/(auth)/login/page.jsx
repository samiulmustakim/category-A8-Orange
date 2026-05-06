"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleLoginSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Login Your
            </span>
            <br />
            <span className="text-gray-700">Account 🚀</span>
          </h1>

          <p className="text-gray-500 text-lg">
            Access your dashboard and continue learning.
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-xl"
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
              Sign In
            </h2>

            <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-500">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`mt-1 w-full px-4 py-3 rounded-xl 
                  bg-white/70
                  text-gray-700 placeholder-gray-400
                  caret-blue-500
                  border border-transparent
                  focus:outline-none
                  transition
                  ${
                    errors.email
                      ? "ring-2 ring-red-300"
                      : "focus:ring-2 focus:ring-blue-300"
                  }`}
                  {...register("email", {
                    required: "Email field is required",
                  })}
                />

                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 px-3 py-2 rounded-lg text-sm 
                    bg-gradient-to-r from-red-100 to-pink-100 
                    text-red-600 shadow-sm"
                  >
                    ⚠ {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-500">Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className={`mt-1 w-full px-4 py-3 rounded-xl 
                  bg-white/70
                  text-gray-700 placeholder-gray-400
                  caret-purple-500
                  border border-transparent
                  focus:outline-none
                  transition
                  ${
                    errors.password
                      ? "ring-2 ring-red-300"
                      : "focus:ring-2 focus:ring-purple-300"
                  }`}
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 px-3 py-2 rounded-lg text-sm 
                    bg-gradient-to-r from-red-100 to-orange-100 
                    text-red-600 shadow-sm"
                  >
                    ⚠ {errors.password.message}
                  </motion.p>
                )}
              </div>

              {/* OPTIONS */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-500" />
                  Remember me
                </label>

                <Link href="#" className="hover:text-blue-500 transition">
                  Forgot password?
                </Link>
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(99,102,241,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl 
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white font-semibold"
              >
                Login 🚀
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-5">
              Don’t have an account?{" "}
              <Link
                href="/registration"
                className="text-blue-500 font-medium hover:underline"
              >
                Register
              </Link>
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}