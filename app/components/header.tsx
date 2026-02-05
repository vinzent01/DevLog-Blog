"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import {Code, Sun, Moon } from "lucide-react";

// Lê tema do localStorage apenas se estiver no client
function getInitialDark() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? false : true; // dark por padrão
  }
  return true; // fallback no SSR
}

export default function Header() {
    const [dark, setDark] = useState(getInitialDark);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true); 
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    function toggleTheme() {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.classList.toggle("dark", newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
    }

    if (!mounted)
        return undefined;

    return (
        <div className="flex p-6 items-center justify-between">
            <div className="flex items-center space-x-4">
                <Code></Code>
                <Link href={"/"}>
                    <h1 className="text-xl">DevLog Website</h1>
                </Link>
            </div>
            <nav className="flex space-x-4">

                <button className="cursor-pointer"
                    onClick={toggleTheme}
                >
                    {dark ? (
                        <Sun>
                        </Sun>
                    ) : 
                        <Moon>

                        </Moon>
                    }
                </button>

                <ul className="flex gap-6">
                    <li><Link href="/" >home</Link></li>
                </ul>

            </nav>
        </div>
    )
}