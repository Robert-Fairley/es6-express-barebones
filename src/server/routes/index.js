/**
 * Routes
 * 
 * This class contains the route handlers for each of our main routes.
 * 
 * Form your handler methods here and reference them in the main server application.
 */
import { log } from '../logging';

 /**
  * @class Routes
  * @classdesc The main application route handlers
  */
 class Routes
 {
     /**
      * @method index
      * @static
      * @desc The Home/Root page handler
      * 
      * @param {Express.request} request 
      * @param {Express.response} response 
      */
     static index(request, response) {
        log(null, request, response);
        
        response.render('index', { pageTitle: 'Home' });
     }

     /**
      * @method about
      * @static
      * @desc The About page handler
      * 
      * @param {Express.request} request 
      * @param {Express.response} response 
      */
     static about(request, response) {
         log(null, request, response);

         response.render('about', { pageTitle: 'About' });
     }
 }

 /**
  * @class ErrorRoutes
  * @classdesc The error route handlers
  */
 class ErrorRoutes
 {
     /**
      * @method any
      * @static
      * @desc Attempt to parse the response object for the error
      * and respond with a generic error page displaying the HTTP/S
      * status code
      * 
      * @param {Express.request} request 
      * @param {Express.response} response
      * @param {Express.next} next 
      */
     static any(request, response, next) {
         log(null, request, response);

         response.render('error', { statusCode: response.statusCode });
     }

     /**
      * @method e404
      * @static
      * @desc Render the error template with a 404 code and set
      * the page response to 404
      * 
      * @param {Express.request} request
      * @param {Express.response} response
      * @param {Express.next} next
      */
     static e404(request, response, next) {
         log(null, request, response);
         response.status(404);

         response.render('error', { statusCode: response.statusCode + ' Error!' });
     }
 }

/**
 * Export Routes classes for use in main application
 */
 export { Routes, ErrorRoutes };
