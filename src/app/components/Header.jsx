"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const currentPath = usePathname()

    const menu = [
        { title: "Inicio", url: "/" },
        { title: "Carta", url: "/carta" },
        { title: "Carta Vegetariana", url: "/carta-vegetariana"},
        { title: "Menu del dia", url: "/menu-del-dia"},
        { title: "Contacto", url: "/contacto" },
    ]

    return(
        <header className="fixed top-0 left-0 h-12 w-full shadow-md shadow-black flex items-center justify-between px-4 bg-rincon-500">
            <Link href="/"> 
                <Image 
                src="/logo.png" 
                alt="logo" 
                width={120}
                height={120}
                className="size-11" />
            </Link>
            <button 
                onClick={() => setShowMenu(!showMenu)}
                className="relative size-9 lg:hidden">
                <div
                    className={
                        showMenu
                        ? "bg-black rounded-full absolute h-1 w-full top-1/4"
                        : "bg-black rounded-full absolute h-1 w-full top-1/4"
                    }
                ></div>
                <div
                    className={
                        showMenu
                        ? "bg-black rounded-full absolute h-1 w-full top-1/2"
                        : "bg-black rounded-full absolute h-1 w-full top-1/2"
                    }
                ></div>
                <div
                    className={
                        showMenu
                        ? "bg-black rounded-full absolute h-1 w-full top-3/4"
                        : "bg-black rounded-full absolute h-1 w-full top-3/4"
                    }
                ></div>
            </button>
            <nav
                className={`
                    absolute bg-white right-0 top-12 h-[calc(100svh-3rem)] flex flex-col items-center text-xl overflow-hidden transition-all
                    lg:flex lg:w-full lg:static lg:h-full lg:flex-row lg:items-center lg:justify-center lg:flex-1 lg:bg-rincon-500 gap-8
                    ${showMenu ? 'w-full' : 'w-0'}
                    `}
            >
                {menu.map((item, index) => {
                    return(
                        <Link
                        onClick={() => setShowMenu(false)}
                        href    ={item.url}
                        className={`
                                ${index === 0 && "mt-20 lg:mt-0"}
                                after:content-[""] after:h-[2px] after:bg-black after:block
                                after:hover:w-full after:mx-auto after:transition-all
                                ${currentPath === item.url ? "after:w-full" : "after:w-0"}
                            `}
                            key={index}>
                                {item.title}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}