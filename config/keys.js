module.exports = {
    mongoURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/vegistech',
    authenticationPin: process.env.AUTHENTICATION_PIN || 5555
};