//console.log('Task Manager App')

const express = require('express')
const app = express()

//routes
app.get('/hello', (req, res)=>{
 res.send('Task manager App')   
})

//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/vq/tasks) - create a new task
//get.get('/api/v1/tasks/:id') -get single task
//app.patch('/app/v1/task/:id - update task)
//app.delete('/api/v1/task/:id) - delete task




const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}...`) )
