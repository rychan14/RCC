// const express = require('koa')
// const path = require('path')
// const bodyParser = require('koa-body-parser')
// const mongodb = require('mongodb')
// const ObjectID = mongodb.ObjectID
import Koa from 'koa'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hi'
})

app.listen(3000)
