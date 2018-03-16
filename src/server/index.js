import express from 'express';  // Express Server framework
import chalk from 'chalk';      // Coloured Console Messages
import path from 'path';        // NodeJS Path Module
import Config from './config';  // Global Config object
import { log } from './util';   // Utility/helper functions
import {
    Routes,
    ErrorRoutes
} from './routes';              // Route handler classes

/**
 * Instantiate Express application
 * 
 * This global provides access to the entire Express API
 * Ref: https://expressjs.com/en/4x/api.html
 */
const app = express();

/** 
 * View Engine
 * 
 * Set up the templating engine for our views.
 * Each high-level view is a page that can be
 * broken down into components.
 */
app.set('view engine', 'pug');       // Explicitly set the extension of the templates
app.set('views', Config.VIEWS_DIR);  // Explicitly set the folder where views are found
/**
 * Static Directory
 * 
 * Set up the static files directory. This is the ideal spot for any
 * front-end javascript, stylesheets, images, or other files that 
 * are referenced from your views, including files that users
 * can download.
 */
app.use(express.static(Config.STATIC_DIR));

/**
 * Routes
 * 
 * Each route currently points to a different template.
 * These can be adapted to whatever need you have.
 */
app.get('/', Routes.index);
app.get('/about', Routes.about);

/**
 * Error Handlers
 * 
 * Currently all errors are handled by one method and route
 * to one template. This can be expanded out, and made more
 * explicit, if needed.
 */
app.use(ErrorRoutes.e404);

/**
 * Start the server
 * 
 * Get the address and port from the global Config object
 * and start the server. If there's an error starting up,
 * throw the error and stop the program.
 */
const server = app.listen(Config.PORT, Config.ADDR, err => {
    if (err) throw new Error(err);

    console.log(`\n${chalk.blueBright('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *')}\n`);
    log(
        `Listening on ${chalk.underline.bold.white('http://' + Config.ADDR + ':' + chalk.cyanBright(Config.PORT))}`
        , null
        , null
    );
    console.log(`\n${chalk.blueBright('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *')}\n`);
});

export default server;
