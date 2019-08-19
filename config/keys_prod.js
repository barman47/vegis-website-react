module.exports = {
    mongoURI: process.env.DATABASE_URI,
    authenticationPin: process.env.AUTHENTICATION_PIN1 || process.env.AUTHENTICATION_PIN2
};