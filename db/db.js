const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/museum_db')

const Museum = sequelize.define('museum', {
    exhibition: {
        type: Sequelize.STRING
    },


})

const syncAndSeed = async() => {
    await sequelize.sync({ force: true })

}

module.exports = {
    syncAndSeed,
    models: {
        Museum
    }
}