require('dotenv').config()
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express()


// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
//   console.log('Development mode has started')
// } else if (process.env.NODE_ENV === 'production') {
//   console.log('Production mode has started')
// }


app.use(cors())
app.options('*', cors())

app.use(express.static(path.resolve(__dirname, './my-react/build')))


app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello from the online'
  })
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './my-react/build', 'index.html'))
})




const PORT =  process.env.PORT || 5050;
app.listen(PORT, () => console.log('Server started on port ' + PORT))
// "start:dev": "SET NODE_ENV=development && nodemon server.js",
//     "start:prod": "SET NODE_ENV=production && nodemon server.js"