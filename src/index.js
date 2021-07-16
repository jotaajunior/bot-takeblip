import 'dotenv/config'
import { app } from './app.js'

app.listen(process.env.APP_PORT, () => console.log('Running'))
