const path = require('path')

module.exports = {
    public: path.resolve() + '/src/app/public',
    views: path.resolve() + '/src/app/views',
    databaseInMemory: path.resolve() + '/src/infra/databases/db/lapislazuli.db',
}