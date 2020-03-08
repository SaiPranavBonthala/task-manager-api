const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(500).end('Site is currently down. Check back soon!!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})

// const pet = {
//     name: 'Tom'
// }

// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const main = async () => {
//     // const task = await Task.findById('5e635ce0ffb842161c6e6f59')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e635cc3ffb842161c6e6f57')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()