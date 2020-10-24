const express = require('express')
const morgan = require('morgan')
console.log(process.env.API_TOKEN)

require('dotenv').config()
const app = express()

app.use(morgan('dev'))


const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`,
  `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`,
  `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

app.use(function validateBearerToken(req, res, next) {
  console.log('validate bearer token middlewear')
  debugger
  // move to next middleware
  next()
})

function handleGetTypes(req, res) {
res.send(validTypes)
}

///                 middleware, middleware2, middleware3 etc.
// app.get(/types, validateBearerToken, handleGetTypes);
// app.get('/pokemon', validateBearerToken, handleGetPokemon);

// This approach is better:
// app.use(validateBearerToken);
app.get('/types', handleGetTypes);
// app.get('/pokemon', handleGetPokemon);

function handleGetPokemon(res, req) {
  res.send('Hello, Pokemon!')
}

app.get('/pokemon', handleGetPokemon);


const PORT = 8000

app.listen(PORT, cb)

// app.listen(PORT, cb () => {
//   console.log(`Server listening at http://localhost:${PORT}`)
// })