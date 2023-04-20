import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

export default (app) => {
    app.use(express.json())
    app.use(morgan('dev'))
    app.use(helmet())
}