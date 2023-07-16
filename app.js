import express from 'express';
import routers from './router/index.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
routers(app)

export default app