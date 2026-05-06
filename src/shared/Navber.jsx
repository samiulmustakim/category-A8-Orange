"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Mynavlink from "./Mynavlink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { toast } from "react-toastify";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/all-courses" },
    { name: "My Profile", path: "/profile" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const { data: userData } = authClient.useSession();
    const user = userData?.user;

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logout successful 👋")
                    router.push("/login");
                },
            },
        });
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    <Link href="/">SkillSphere</Link>
                </motion.div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link, i) => (
                        <motion.div key={i} whileHover={{ y: -2 }}>
                            <Mynavlink href={link.path}>{link.name}</Mynavlink>
                        </motion.div>
                    ))}
                </div>

                {/* DESKTOP ACTIONS */}
                <div className="hidden md:flex gap-3 items-center">
                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                            >
                                Login
                            </Link>

                            <Link
                                href="/registration"
                                className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* USER IMAGE */}
                            <div className="w-10 h-10 mask mask-squircle">
                                {user?.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user?.name || "User"}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    (
                                        user?.name?.[0] || user?.email?.[0]
                                    ).toUpperCase()
                                )}
                            </div>

                            {/* SIGN OUT */}
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white"
                            >
                                Sign Out
                            </button>
                        </>
                    )}
                </div>

                {/* MOBILE HAMBURGER */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)} className="text-3xl">
                        {open ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden bg-white/90 backdrop-blur-md"
            >
                <div className="px-6 pb-4 space-y-4 pt-3">
                    {/* NAV LINKS */}
                    {navLinks.map((link, i) => (
                        <Mynavlink
                            key={i}
                            href={link.path}
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Mynavlink>
                    ))}

                    {/* AUTH SECTION */}
                    <div className="flex flex-col gap-3 pt-3">
                        {!user ? (
                            <>
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg text-center"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/registration"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 text-white rounded-lg text-center bg-gradient-to-r from-blue-600 to-purple-600"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                {/* USER INFO */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl overflow-hidden ">
                                        <Image
                                            src={user?.image}
                                            alt={user?.name || "User"}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {user?.name}
                                    </span>
                                </div>

                                {/* LOGOUT */}
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg text-center"
                                >
                                    Sign Out
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
