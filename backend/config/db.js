// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Configuration settings for stable long-term connections
    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true, // Builds indexes automatically to keep queries fast
    });
    console.log('🛡️ Secure database connectivity established with MongoDB Atlas.');
  } catch (error) {
    console.error('❌ Critical Database Connection Error:', error.message);
    process.exit(1); // Kill the app if database connection fails
  }
};

module.exports = connectDB;