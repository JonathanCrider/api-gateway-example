import sqlite3 from 'sqlite3'

const connectDB = async () => {
  try {
    const db = new sqlite3.Database('./src/config/frc.db', sqlite3.OPEN_READWRITE, err => {
      if (err) return console.error(err)
    })
    console.log('Database connection successful!')
    return db
  } catch (err) {
    console.error('Failed to connect to database', err.message)
    throw err
  }
}

export default connectDB
