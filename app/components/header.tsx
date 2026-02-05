import Link from "next/link";

import { Home, Code } from "lucide-react";

export default function Header(){
    return (
        <div className="flex p-6 items-center justify-between">
            <div className="flex items-center space-x-4">
                <Code></Code>
                <Link href={"/"}>
                    <h1 className="text-xl">DevLog Website</h1>
                </Link>
            </div>
            <nav className="flex">
                <ul className="flex gap-6">
                    <li><Link href="/" >home</Link></li>
                </ul>
            </nav>
        </div>
    )
}