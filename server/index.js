/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const path = require('path')

const PORT = 3000

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../dist/404.html'))
})

app.use((req, res) => {
  res.status(500).sendFile(path.join(__dirname, '../dist/500.html'))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port: ${PORT}!`)
})
