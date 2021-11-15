async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://hplay:hplay@localhost:3306/hplay");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function select2048Stats(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM hplay.game_2048;');
    return rows;
}
 
module.exports = { select2048Stats }