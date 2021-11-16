const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const { listPerPage } = require('../config');

async function getStats(page = 1, game){

  console.log(game)
  const offset = helper.getOffset(page, config.listPerPage);

  console.log(offset)
  console.log(config.listPerPage)

  const query = 'SELECT * FROM hplay.game_'+ game + ' LIMIT ' + offset + ',' + listPerPage
  const rows = await db.query(query);

  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getStats
}