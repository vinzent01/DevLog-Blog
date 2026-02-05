import Link from "next/link";

import { Home, Code } from "lucide-react";

export default function Header(){
    return (
        <div className="flex p-6 items-center justify-between">
            <div className="flex items-center space-x-4">
                <Code></Code>
                <h1 className="text-xl">DevLog Website</h1>
            </div>
            <nav className="flex">
                <ul className="flex gap-6">
                    <li><Link href="/" >home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}