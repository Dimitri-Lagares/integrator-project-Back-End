import { config } from 'dotenv';
import app from './app.js';

const PORT = process.env.PORT
config()

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