import express from 'express'
import cors from 'cors'
import { routes } from './routes.js'

export const app = express()

app.use(cors())
app.use(routes)
