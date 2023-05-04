import express from 'express'
import configMiddleware from './middlewares/app.middleware.js'
import configPassportJwt from './config/passport.js'
import passport from 'passport'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()


configPassportJwt(passport)

const main = async () => {
    try {

    const app = express()
    // middlewares
    configMiddleware(app)
    // routes
    app.use('/api/v1', authRoutes) // user routes (Login, Register)
    app.use('/api/v1', postRoutes) // post routes 

    await connectDB()

    app.listen(5000, () => {
        console.log(`listening:*5000`)
    })
    }catch(e) {

    }
}

main().catch(e => console.error(e))