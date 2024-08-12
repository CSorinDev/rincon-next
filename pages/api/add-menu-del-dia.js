import mysql2 from 'mysql2/promise';

export default async function handler(req, res) {
    // Crea la conexión con la base de datos
    const connection = await mysql2.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    if (req.method === 'POST') {
        try {
            const {fecha, precio, "Primero 1": primero1, "Primero 2": primero2, "Primero 3": primero3, "Primero 4": primero4, "Segundo 1": segundo1, "Segundo 2": segundo2, "Segundo 3": segundo3, "Segundo 4": segundo4} = req.body;

            // Inserta la fila en la base de datos
            const [result] = await connection.query(
                'INSERT INTO menu_del_dia (fecha, precio, primero1, primero2, primero3, primero4, segundo1, segundo2, segundo3, segundo4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [fecha,precio, primero1, primero2, primero3, primero4, segundo1, segundo2, segundo3, segundo4]
            );

            
            

            // Responde con éxito
            res.status(201).json({ message: 'Fila añadida con éxito', data: result });

        } catch (error) {
            console.error('Error al insertar la fila en la base de datos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } finally {
            // Cierra la conexión con la base de datos
            connection.end();
        }
    } else {
        // Responde con un error si el método no es POST
        res.status(405).json({ error: 'Método no permitido' });
    }
}