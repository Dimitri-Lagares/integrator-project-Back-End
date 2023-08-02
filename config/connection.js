import pg from 'pg'

const connection = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

connection.connect((error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Database running')
    }
})

export default connection
