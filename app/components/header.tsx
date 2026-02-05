"use client";
import Link from "next/link";
import {Code, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Header(){
    const [dark, setDark] = useState(false);

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        setDark(isDark);
    }

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