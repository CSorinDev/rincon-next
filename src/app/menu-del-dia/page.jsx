"use client"

import { useEffect, useState } from 'react'

export default function Page() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch('/api/menu-del-dia')
                if (!res.ok) {
                    throw new Error('Error al obtener el menú')
                }
                const data = await res.json()
                setMenu(data)
            } catch (error) {
                console.error('Error fetching menu:', error)
            }
        }

        fetchMenu()
    }, [])

    const today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    return(
        <section
        className='flex flex-col text-center'
        >
            {
                menu.map(({fecha, precio, primero1, primero2, primero3, primero4, segundo1, segundo2, segundo3, segundo4}, index) => {
                    const newFecha = `${new Date(fecha).getFullYear()}-${new Date(fecha).getMonth() + 1}-${new Date(fecha).getDate()}`
                    if (newFecha === today) {
                        return(
                            <div key={index}>
                                <h2
                                className='text-3xl font-bold'
                                >
                                    Menú del día
                                </h2>
                                    <p
                                    className='text-sm text-gray-500'
                                    >
                                        {new Date(fecha).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                <div
                                className='my-8'
                                >
                                    <h3
                                    className='text-xl my-4 font-semibold'
                                    >
                                        Primeros
                                    </h3>
                                    {[primero1, primero2, primero3, primero4].map((primero, index) => {
                                        return(
                                            <p
                                            key={index}
                                            >
                                                {primero}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div
                                className='my-8'
                                >
                                    <h3
                                    className='text-xl my-4 font-semibold'
                                    >
                                        Segundos
                                    </h3>
                                    {[segundo1, segundo2, segundo3, segundo4].map((segundo, index) => {
                                        return(
                                            <p
                                            key={index}
                                            >
                                                {segundo}
                                            </p>
                                        )
                                    })}
                                </div>
                                <p
                                className=' italic text-gray-500 my-8'
                                >Incluye una bebida + café o postre</p>
                                <p
                                className='text-xl text-end'
                                >Precio: {precio.toFixed(2).replace(".", ",")} €</p>
                            </div>
                        )
                    }
                })
            }
        </section>
    )

}
