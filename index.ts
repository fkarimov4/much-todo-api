import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 3000
import { createTask, getTasks, getPendingTasks, getCompletedTasks, updateTask } from './src/tasks'

const app = express()
app.use(cors())
app.use(express.json())

//Routes
app.post('/tasks', createTask)
app.get('/tasks', getTasks)
app.get('/tasks/pending', getPendingTasks)
app.get('/tasks/completed', getCompletedTasks)
app.patch('/tasks/:taskId', updateTask)


app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})