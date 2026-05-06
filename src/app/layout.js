import "./globals.css";
import { ToastContainer } from "react-toastify";
import { inter, poppins } from "@/lib/font";

export const metadata = {
    title: "SkillSphere - Learn Modern Skills",
    description: "Learn web development and programming with expert courses.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" className={`h-full antialiased`}>
            <body
                className={`min-h-full flex flex-col ${inter.className} ${poppins.className}`}
            >
                {children}

                <ToastContainer />
            </body>
        </html>
    );
}
