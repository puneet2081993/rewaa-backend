require('dotenv').config({path:'../rewaa-backend/.env'})
const http = require('http')
const {port} = require('../vars')
const {app,logger} = require('../middleware')
var cluster = require('cluster')

const server = http.createServer(app) // including express middleware
const numCPUs = require('os').cpus().length // cpu cores


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  //assigning workers for increasing request.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
    //starting server
    server.listen(port,
        ()=>{
            console.log(`Server started running on port ${port}`)
            logger.log('info',`Server started running on port ${port}`)
        }
    )
}