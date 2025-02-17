const
  path = require('path'),
  { writeFileSync } = require('fs-extra'),
  { tauriDir } = require('./helpers/app-paths')

module.exports.generate = tauriConfig => {
  const
    { bundle, ...cfg } = tauriConfig,
    outDir = tauriDir
  writeFileSync(path.join(outDir, 'config.json'), JSON.stringify(cfg))
  writeFileSync(path.join(outDir, 'bundle.json'), JSON.stringify(bundle))
}
