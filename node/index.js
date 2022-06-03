const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const bodyParser = require('body-parser');
const random_name = require('node-random-name');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.get('/', (req, resp) => {
    insertRandomName(() => {
        listPeoples(resp)
    })
})

app.listen(port, () => {
    console.log('Started at port: ', port)
})

const insertRandomName = (callback) => {
    const peopleName = random_name()
    const query = `INSERT INTO People(name) values('${peopleName}')`
    executeQuery(query, callback)
}

const listPeoples = (resp) => {
    const query = 'SELECT id, name FROM People'
    executeQuery(query, (result) => {
        let responseText = '<h1>Full Cycle!</h1>'
        responseText += '<ul>'
        Object.keys(result).forEach(function(key) {
            var obj = result[key];
            responseText += `<li>${obj.name}</li>`
        });
        responseText += '</ul>'
        resp.send(responseText)
    })
}

const executeQuery = (query, callback) => {
    const connection = mysql.createConnection(config);
    connection.query(query, (err, result) => {
        connection.end()
        if (err) {
            throw err;
        }
        callback(result);
    });
}