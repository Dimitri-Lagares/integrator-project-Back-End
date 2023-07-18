import pg from 'pg'

const connection = new pg.Pool({
    connectionString: 'postgres://user:INeWtS5qOgD6kqZcK7rNeLBa0EHnhWZT@dpg-ciq76q5gkuvrtobf9o70-a.oregon-postgres.render.com/database_ymqr',
    ssl:true
  })

connection.connect((error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Database running')
    }
})

export default connection