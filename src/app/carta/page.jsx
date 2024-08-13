"use client"

import { useEffect, useState } from "react"

export default function Carta() {
    const [carta, setCarta] = useState([])
    const [activeMenu, setActiveMenu] = useState("Tapas")
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch('/api/carta')
                if (!res.ok) {
                    throw new Error('Error al obtener el menú')
                }
                const data = await res.json()
                setCarta(data)
                const categories = Array.from(new Set(data.map(item => item.categoria)))
                setCategories(categories)
            } catch (error) {
                console.error('Error fetching menu:', error)
            }
        }

        fetchMenu()
    }, [])

    return(
        <>
            <header className="flex gap-4 p-4 overflow-x-auto no-bar lg:justify-center">
                {
                    categories.map((category, index) => (
                        <button
                            onClick={() => setActiveMenu(category)}
                            className={`
                                py-1 px-4 shadow-md shadow-black rounded-full transition-all whitespace-nowrap
                                hover:bg-rincon-500 hover:text-white
                                ${activeMenu === category ? "bg-rincon-500 text-white" : ""}
                                `}
                            key={index}
                        >
                            {category}
                        </button>
                    ))
                }
            </header>
            <section>
                {
                    carta.filter(item => item.categoria === activeMenu).map(({ numero, plato, ingredientes, precio }, index) => (
                        <article 
                            className="flex justify-between items-center py-4" 
                            key={index}
                        >
                            <div className="flex flex-col items-start">
                                <h3>{numero}. {plato}</h3>
                                {ingredientes && (
                                    <p className="text-sm text-gray-500 italic">{ingredientes}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="whitespace-nowrap">{precio.toFixed(2).replace(".", ",")} €</p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}
