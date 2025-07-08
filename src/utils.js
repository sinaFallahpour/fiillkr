// Utility functions for fiillkr project

/**
 * Utility function to format strings
 * @param {string} str - The string to format
 * @returns {string} Formatted string
 */
function formatString(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.trim().toLowerCase();
}

/**
 * Utility function to validate input
 * @param {*} input - The input to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateInput(input) {
    return input !== null && input !== undefined && input !== '';
}

/**
 * Utility function to log messages with timestamp
 * @param {string} message - The message to log
 */
function logMessage(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

module.exports = {
    formatString,
    validateInput,
    logMessage
};
