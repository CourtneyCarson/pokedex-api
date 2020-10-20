app.get('hello', (req, res) => {
  res 
    .status(500)
  .send('Oops, I did it again.')
})