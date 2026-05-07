"use client";
import { UpdateUserModel } from "@/components/profileSection/UpdateuserModal";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const isValidUrl = (str) => {
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
};

const ProfilePage = () => {
    const { data: userData } = authClient.useSession();
    const user = userData?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 text-center space-y-6 shadow-xl">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                            <span className="text-white text-2xl">🔒</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Access Required
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Please login to view your profile
                        </p>
                        <Link
                            href="/login"
                            className="block w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition"
                        >
                            Go to Login
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl relative"
            >
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">

                    {/* TOP BANNER */}
                    <div className="h-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

                    <div className="px-8 pb-10 -mt-12">

                        {/* AVATAR */}
                        <div className="flex justify-center">
                            <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white shadow-lg ring-4 ring-white/60">
                                {user.image && isValidUrl(user.image) ? (
                                    <Image
                                        src={user.image}
                                        alt="profile"
                                        width={120}
                                        height={120}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-3xl font-bold">
                                        {user?.name?.[0]?.toUpperCase() || "U"}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* NAME + EMAIL */}
                        <div className="text-center mt-5 space-y-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {user.name || "User"}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {user.email}
                            </p>
                        </div>

                        {/* INFO BOXES */}
                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/70 shadow-sm">
                                <p className="text-xs text-gray-400">Email</p>
                                <p className="text-gray-700 font-medium">
                                    {user.email}
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/70 shadow-sm">
                                <p className="text-xs text-gray-400">Name</p>
                                <p className="text-gray-700 font-medium">
                                    {user.name || "Not set"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center gap-3">
                            <Link
                                href="/"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:shadow-lg transition"
                            >
                                Back to Home
                            </Link>
                            <UpdateUserModel />
                        </div>

                    </div>
                </div>

                <div className="absolute top-6 right-6">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/70 backdrop-blur text-gray-500 shadow">
                        Profile
                    </span>
                </div>

            </motion.div>
        </div>
    );
};

export default ProfilePage;