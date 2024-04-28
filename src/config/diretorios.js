const path = require('path')

module.exports = {
    public: path.resolve() + '/src/app/public',
    views: path.resolve() + '/src/app/views',
    databaseInMemory: path.resolve() + '/src/infra/databases/db/lapislazuli.db',
    migrations: {
        config: path.resolve() + '/src/infra/databases/config.js',
        models: path.resolve() + '/src/infra/models',
        path: path.resolve() + '/src/infra/migrations'
    }
}