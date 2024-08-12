import mysql from 'mysql2/promise'

const config = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}

export default async function handler(req, res) {
    const connection = await mysql.createConnection(config)
    const [rows] = await connection.execute('SELECT * FROM menu_del_dia')
    return rows
}