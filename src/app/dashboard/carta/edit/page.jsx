import Link from "next/link";

export default function Edit() {
    return(
        <section>
            <Link
            href="/dashboard/carta"
            >
                Volver
            </Link>
            <h1>
                Editar plato de la carta
            </h1>
        </section>
    )
}