"use client"

import Link from "next/link";
import React, { FC } from "react";
import SearchBar from "./SearchBar";
import { Button } from "./Button";

interface NavbarProps {};

const Navbar:FC<NavbarProps> = (props) => {
    return <nav className="w-[80%] m-auto rounded-sm shadow-md ring-1 ring-blue-700 h-10 p-2 flex justify-between items-center">
        <span>JobNest</span>

        <ul className="flex gap-2 items-center">
            <Link href="/" className="text-xs p-1 rounded-sm text-blue-700 font-semibold capitalize hover:text-blue-500">Home</Link>
            <Link href="/jobs" className="text-xs p-1 rounded-sm text-slate-700 font-semibold capitalize hover:text-blue-500">explore jobs</Link>
            <Link href="/about" className="text-xs p-1 rounded-sm text-slate-700 font-semibold capitalize hover:text-blue-500">about use</Link>
            <Link href="/contact" className="text-xs p-1 rounded-sm text-slate-700 font-semibold capitalize hover:text-blue-500">reach us</Link>
        </ul>

        <SearchBar/>

        <div className=" flex items-center gap-2">
            <Link href="/auth/account" ><Button variant="default">Sign in</Button></Link>
        </div>
    </nav>
};

export default Navbar;
