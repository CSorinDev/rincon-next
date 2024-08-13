import Link from "next/link";

export default function Delete() {
    return(
        <section>
            <Link
            href="/dashboard/carta"
            >
                Volver
            </Link>
            <h1>
                Eliminar plato de la carta
            </h1>
        </section>
    )
}