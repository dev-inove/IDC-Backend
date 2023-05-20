import moduleAlias from 'module-alias'
import path from 'path'

export default moduleAlias.addAliases({
	'@controllers': path.join(__dirname, '..', 'controllers'),
	'@middlewares': path.join(__dirname, '..', 'middlewares'),
	'@routes': path.join(__dirname, '..', 'routes'),
	'@repositories': path.join(__dirname, '..', 'repositories'),
	'@services': path.join(__dirname, '..', 'services'),
	'@shared': path.join(__dirname, '..', 'shared'),
	'@config': path.join(__dirname),
})
