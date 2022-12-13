import {connect} from 'mongoose'

export const  startConnection = async () => { // Export startConnection function
    try {
        const db = await connect('mongodb://admin:admin@mongoV6:27017/ts-api?authSource=admin') // Connect to database
        console.log('Database is connected,' + db.connection.name) // If connection is successful, show a message
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}