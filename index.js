const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const { createTask, getTasks, updateTask } = require('./src/tasks')

const app = express()
app.use(cors())
app.use(express.json())

//Routes
app.post('/tasks', createTask)
app.get('/tasks', getTasks)
app.patch('/tasks/:taskId', updateTask)


app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})