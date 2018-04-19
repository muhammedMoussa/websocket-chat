const express = require('express')

//App Setup
const app = express()
const server = app.listen(4000, () => {
    console.log('works!')
})

//Static Files
app.use(express.static('public'))
