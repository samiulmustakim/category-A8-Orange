"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mynavlink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  // active check (nested route support)
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-1 rounded-lg transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default Mynavlink;