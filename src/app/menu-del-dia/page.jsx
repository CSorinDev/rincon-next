"use client"

import { useEffect, useState } from 'react';

export default function Page() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch('/api/menu-del-dia');
                if (!res.ok) {
                    throw new Error('Error al obtener el menú');
                }
                const data = await res.json();
                setMenu(data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };

        fetchMenu();
    }, [])

    const today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    return(
        <section>
            {
                menu.map(({fecha, precio, primero1, primero2, primero3, primero4, segundo1, segundo2, segundo3, segundo4}, index) => {
                    const newFecha = `${new Date(fecha).getFullYear()}-${new Date(fecha).getMonth() + 1}-${new Date(fecha).getDate()}`
                    if (newFecha === today) {
                        return(
                            <div key={index}>
                                <h2>{new Date(fecha).toLocaleDateString()}</h2>
                                <h2>Menú del día</h2>
                                <div>
                                    <h3>Primeros:</h3>
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
                                <div>
                                    <h3>Segundos</h3>
                                </div>
                                <p>Segundo: {segundo1}, {segundo2}, {segundo3}, {segundo4}</p>
                                <p>Incluye la primera bebida + postre o café</p>
                                <p>Precio: {precio}</p>
                            </div>
                        )
                    }
                })
            }
        </section>
    )

}
