const app = require('./app')

const PORT = 3000

app.listen(PORT, () => {
  console.log('[x] Gateway Service running on ' + PORT)
})
