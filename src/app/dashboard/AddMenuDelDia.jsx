"use client"

import { useState } from "react"

export default function Dashboard() {
    const [menuDelDia, setMenuDelDia] = useState({
            fecha: "",
            precio: "",
            "Primero 1": "",
            "Primero 2": "",
            "Primero 3": "",
            "Primero 4": "",
            "Segundo 1": "",
            "Segundo 2": "",
            "Segundo 3": "",
            "Segundo 4": "",
    })

    const submitHandle = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("/api/add-menu-del-dia", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(menuDelDia),
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form
        onSubmit={submitHandle}
        >
            <input 
            onChange={(e) => setMenuDelDia({...menuDelDia, fecha: e.target.value})}
            type="date" 
            />
            {
                ["Primero 1", "Primero 2", "Primero 3", "Primero 4", "Segundo 1", "Segundo 2", "Segundo 3", "Segundo 4"].map((plato, index) => {
                    return(
                        <input
                        key={index}
                        onChange={(e) => setMenuDelDia({...menuDelDia, [plato]: e.target.value})}
                        type="text" 
                        placeholder={plato}
                        />
                    )
                })
            }
            <input 
            onChange={(e) => setMenuDelDia({...menuDelDia, precio: e.target.value})}
            type="number"
            step={0.05}
            placeholder="Precio"
            />
            <button
            onClick={submitHandle}
            >
                Añadir
            </button>
        </form>
    )
}