const mysql =  require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'integrator-project'
})

connection.connect((error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Database running')
    }
})

module.exports = connection