import moduleAlias from 'module-alias'
import path from 'path'

export default moduleAlias.addAliases({
	'@modules': path.join(__dirname, '..', 'modules'),
	'@shared': path.join(__dirname, '..', 'shared'),
	'@config': path.join(__dirname),
})
