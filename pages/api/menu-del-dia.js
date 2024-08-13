import mysql from 'mysql2/promise';

const config = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
};

export default async function handler(req, res) {
    try {
        const connection = await mysql.createConnection(config);
        const [rows] = await connection.query('SELECT * FROM menu_del_dia');
        connection.end()
        console.log(res.status(200).json(rows));
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}
