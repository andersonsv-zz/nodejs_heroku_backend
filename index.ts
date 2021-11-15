const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const game2048 = require('./2048.ts');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/game/2048', game2048)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  