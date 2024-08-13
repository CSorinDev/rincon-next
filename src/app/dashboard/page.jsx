"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Dashboard() {
    const menu = [
        { title: "Carta" , url: "/dashboard/carta"},
        { title: "Carta Vegetariana" , url: "/dashboard/carta-vegetariana"},
        { title: "Menu del dia" , url: "/dashboard/menu-del-dia"},
    ]

    const currentPath = usePathname()

    return(
        <section className="flex flex-col text-center">
            <h1>
                ¿Qué quieres modificar?
            </h1>
            {
                menu.map((menu, index) => {
                    return(
                        <Link 
                        className="border py-2 px-4"
                        href={menu.url} 
                        key={index}
                        >
                            {menu.title}
                        </Link>
                    )
                })
            }
        </section>
    )
}