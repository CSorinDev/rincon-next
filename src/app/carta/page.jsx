"use client"

import { useState } from "react"
import carta from "./carta.json"
export default function Carta() {
    const [activeMenu, setActiveMenu] = useState("Tapas")

    return(
        <>
            <header
            className="flex gap-4 p-4 overflow-x-auto no-bar lg:justify-center"
            >
                {
                    Object.keys(carta).map((category, index) => {
                        return(
                            <button
                            className={`
                                py-1 px-4 shadow-md shadow-black rounded-full transition-all
                                hover:bg-rincon-500 hover:text-white
                                ${activeMenu === category && "bg-rincon-500 text-white"}
                                `}
                            key={index}
                            onClick={() => setActiveMenu(category)}
                            >
                                {category}
                            </button>
                        )
                    })
                }
            </header>
            <section
            className="max-w-2xl mx-auto"
            >
                {
                    Object.entries(carta[activeMenu]).map(([dishName, { id, precio, desc }], index) => (
                        <article 
                        className={`
                            flex justify-between items-center py-4
                            `} 
                        key={index}
                        >
                            <div 
                            className="flex flex-col items-start"
                            >
                                <h3 
                                className=""
                                >
                                    {id && `${id}. `}
                                    {dishName}
                                </h3>
                                <p 
                                className="text-sm text-gray-500 italic"
                                >
                                    {desc}
                                </p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p 
                                className="whitespace-nowrap">
                                    {precio.toFixed(2).replace(".", ",")} €
                                </p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}