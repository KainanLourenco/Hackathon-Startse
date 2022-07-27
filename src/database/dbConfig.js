const pg = require('pg');

const connectToPostgres = async () =>{
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const config = {
        host: "localhost",
        user: "root",
        password: "root",
        database: "credit_match_db"
    }

    const connection = await pg.createConnection(config);
    console.log("Conexão realizada com sucesso!!!");
    global.connection = connection;
}

connectPostgres();

module.exports = {connectToPostgres}