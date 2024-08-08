"use client"

import { useState } from "react"
import cartaVegetariana from "./carta-vegetariana.json"

export default function CartaVegetariana() {
    const [activeMenu, setActiveMenu] = useState("Tapas")

    return(
        <>
            <header
            className="flex gap-4 p-4 overflow-x-auto no-bar lg:justify-center"
            >
                {
                    cartaVegetariana &&
                    Object.keys(cartaVegetariana).map((category, index) => {
                        return (
                            <button
                            onClick={() => setActiveMenu(category)}
                            className={`
                                py-1 px-4 shadow-md shadow-black rounded-full transition-all whitespace-nowrap
                                hover:bg-rincon-500 hover:text-white
                                ${activeMenu === category && "bg-rincon-500 text-white"}
                                `}
                            key={index}
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
                {Object.entries(cartaVegetariana[activeMenu]).map(([dishName, { id, precio, desc }], index) => (
                    <article 
                    className="flex justify-between items-center py-4" 
                    key={index}
                    >
                        <div>
                        <h3>
                            {id}. {dishName}
                        </h3>
                        <p className="text-sm italic text-gray-500">
                            {desc}
                        </p>
                        </div>
                        <p className="whitespace-nowrap">
                        {precio.toFixed(2).replace(".", ",")} €
                        </p>
                    </article>
                    ))    
                }
            </section>
        </>
    )
}