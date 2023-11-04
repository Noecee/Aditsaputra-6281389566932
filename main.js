
console.log('Starting . . .')
require('dotenv').config(), require('rootpath')(), require('./server')
const { spawn: spawn } = require('child_process'), path = require('path'), colors = require('@colors/colors/safe'), CFonts = require('cfonts')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
process.on('uncaughtException', console.error)

function start() {
	let args = [path.join(__dirname, './connect.js'), ...process.argv.slice(2)]
	let p = spawn(process.argv[0], args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting...')
			p.kill()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == 1) start()
 if (code == null) start()
	})
}

CFonts.say('ZassTDR', {
   font: 'shade',
   gradient: ['blue','magenta'],
   align: 'left'
}), CFonts.say('ZassTDR', {
   font: 'console',
   gradient: ['red','magenta'],
   align: 'left'
}), start()