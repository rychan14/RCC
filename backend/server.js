import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
import mongodb from 'mongodb'
import send from 'koa-send'

const ObjectID = mongodb.ObjectID
const app = new Koa()

let db
mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', (err, database) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  db = database
  console.log('database connection ready')

  const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port
    console.log('running on ', port)
  })
})
