const fs = require('fs')
const chalk = require('chalk')

global.sessionName = 'session'
global.owner = ['6289688206739']
//_______________________ [ DOC ] _______________________//


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})