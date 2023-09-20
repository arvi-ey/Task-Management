const mongoose = require('mongoose')

const MongodbConnection = async (URL) => {
    try {
        await mongoose.connect(URL)
        console.log(`Database Successfully Connected`)
    }
    catch (err) {
        console.log(`Database Connection Failed ${err}`)

    }
}

module.exports = MongodbConnection;