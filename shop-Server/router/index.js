const router = require('koa-router')();
const getIndex = require('../controller/getIndexdata.js')

router.get('/getnav',getIndex.getNavData)

module.exports = router