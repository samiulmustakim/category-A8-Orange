"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: "onBlur" });

    const handleRegisterSubmit = async (data) => {
        setLoading(true);

        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.photo,
        });

        if (error) {
            toast.error(error.message);
            setLoading(false);
            return;
        }

        if (res) {
            reset();
            toast.success("Registration successful 🎉");
            router.push("/"); 
        }

        setLoading(false);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Create Your
                        </span>
                        <br />
                        <span className="text-gray-700">Account 🚀</span>
                    </h1>

                    <p className="text-gray-500 text-lg">
                        Join us and start your learning journey today.
                    </p>
                </motion.div>

                {/* FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-xl"
                >
                    <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                            Sign Up
                        </h2>

                        <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-5">

                            {/* NAME */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className={`mt-1 w-full px-4 py-3 rounded-xl bg-white/70 text-gray-700 placeholder-gray-400 caret-blue-500 border border-transparent focus:outline-none transition ${
                                        errors.name ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-blue-300"
                                    }`}
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-500">⚠ {errors.name.message}</p>
                                )}
                            </div>

                            {/* EMAIL */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={`mt-1 w-full px-4 py-3 rounded-xl bg-white/70 text-gray-700 placeholder-gray-400 caret-blue-500 border border-transparent focus:outline-none transition ${
                                        errors.email ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-blue-300"
                                    }`}
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-500">⚠ {errors.email.message}</p>
                                )}
                            </div>

                            {/* PHOTO */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    className={`mt-1 w-full px-4 py-3 rounded-xl bg-white/70 text-gray-700 placeholder-gray-400 caret-purple-500 border border-transparent focus:outline-none transition ${
                                        errors.photo ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-purple-300"
                                    }`}
                                    {...register("photo", { required: "Photo URL is required" })}
                                />
                                {errors.photo && (
                                    <p className="mt-2 text-sm text-red-500">⚠ {errors.photo.message}</p>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={`mt-1 w-full px-4 py-3 rounded-xl bg-white/70 text-gray-700 placeholder-gray-400 caret-purple-500 border border-transparent focus:outline-none transition ${
                                        errors.password ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-purple-300"
                                    }`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters required",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-500">⚠ {errors.password.message}</p>
                                )}
                            </div>

                            {/* BUTTON */}
                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold disabled:opacity-70"
                            >
                                {loading ? "Registering..." : "Register 🚀"}
                            </motion.button>
                        </form>

                        <p className="text-center text-sm text-gray-500 mt-5">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-500 font-medium hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}