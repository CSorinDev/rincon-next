"use client"
import Link from "next/link"

export default function CartaDashboard() {

    const menu = [
        { title: "Añadir" , url: "/dashboard/carta/add" },
        { title: "Editar" , url: "/dashboard/carta/edit" },
        { title: "Eliminar" , url: "/dashboard/carta/delete" },
        { title: "Volver", url: "/dashboard" },
    ]

    return(
        <section className="flex flex-col text-center">
            <h1>
                ¿Qué quieres hacer?
            </h1>
            {
                menu.map(({title, url}, index) =>
                    <Link
                    className="border py-2 px-4"
                    href={url}
                    key={index}
                    >
                        {title}
                    </Link>
                )
            }
        </section>
    )
}