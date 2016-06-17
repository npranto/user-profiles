const userCtrl = require('./userCtrl.js')
const profileCtrl = require('./profileCtrl.js')

module.exports = (app) =>{
	app.post('/api/login', userCtrl.login);
	app.get('/api/profiles', profileCtrl.getProfiles)
}