const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3055

app.set('port', PORT)

app.get('/', (req, res) => {
    res.send('App Running')
})

app.listen(app.get('port'), (error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Server running on port', PORT)
    }
})