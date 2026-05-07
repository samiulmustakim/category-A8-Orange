"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export function UpdateUserModel() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authClient.updateUser({
                name: name || undefined,
                image: image || undefined,
            });
            toast.success("Profile updated successfully! ✅");
            setOpen(false);
        } catch (err) {
            toast.error("Update failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* TRIGGER BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 rounded-xl border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
                Edit Profile
            </button>

            {/* MODAL OVERLAY */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-6">

                        {/* HEADER */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                            >
                                ✕
                            </button>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleUpdate} className="space-y-4">

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Image URL</label>
                                <input
                                    type="url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                />
                            </div>

                            {/* FOOTER BUTTONS */}
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg transition disabled:opacity-60"
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
}