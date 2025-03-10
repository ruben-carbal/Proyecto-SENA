const { Client } = require('pg');

const connectionData = {
    user: 'ruben',
    host: '',
    database: 'gym',
    password: 'secret',
    port 5432,
}

const client = new Client(connectionData);

// conexióń (esto creo que va en otro archivo, pero para que no se me olvide);

client.connect();
client.query('SELECT * FROM table')
    .then(res => {
        console.log(res.rows);
        client.end();
    })
    .catch(err => {
        client.end();
    })

