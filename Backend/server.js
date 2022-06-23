const express = require('express')
const app = express()
const storeRoutes = require('./routes/storeRoutes')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

// Routes
app.use('/api/v1/store', storeRoutes)
app.use('/api/v1/users', userRoutes)

app.listen(port, console.log(`Server active on port: ${port}`))
