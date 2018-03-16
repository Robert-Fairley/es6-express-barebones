import chalk from 'chalk';
import path from 'path';

/**
 * Config
 * 
 * Global helpers and constants
 */
const Config = {
    // Application mode
    PRODUCTION: process.env.NODE_ENV === 'production' ? true : false,

    // Prompt to be used by the server
    PROMPT: chalk.yellow(`[Server]`),

    // Server constants
    ADDR:   'localhost',
    PORT:   1234,

    // Application Directories
    VIEWS_DIR: path.resolve(process.cwd(), 'views'),
    STATIC_DIR: path.resolve(process.cwd(), 'public'),
};

export default Config;
