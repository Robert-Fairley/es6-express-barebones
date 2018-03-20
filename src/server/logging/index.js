import chalk from 'chalk';
import Config from '../config';

/**
 * @function statusCode
 * @desc Returns a colour-coded string representing the status code.
 * 
 * @param {string | number} _status - The HTTP/S status code
 * 
 * @returns {string}
 */
export function statusCode(_status) {
    if (typeof _status != 'string')
        if (typeof _status != 'number')
            return error('statusCode() must be passed a string or number.');

    let s = parseInt(_status);

    if (s >= 200 && s < 300)
        return chalk.green(_status);
    else if (s >= 300 && s < 400)
        return chalk.yellow(_status);

    return chalk.red(_status);
}

/** 
 * @function requestMethod
 * @desc Returns a string with differing colours or highlight per method.
 * 
 * @param {string} _method - The request method made to the route.
 * 
 * @returns {string}
 */
export function requestMethod(_method) {
    if (typeof _method != 'string')
        return error('The URL request method must be a string.');

    if (_method == 'GET')
        return chalk.bold.gray(_method);
    else if (_method == 'POST')
        return chalk.bold.white(_method);
    else if (_method == 'PUT')
        return chalk.bold.yellow(_method);
    else if (_method == 'DELETE')
        return chalk.bold.red(_method);
    
    return chalk.bold(_method);
}

/**
 * @function requestProtocol
 * @desc Formats the request protocol for logging.
 * 
 * @param {string} _protocol 
 * @returns {string}
 */
export function requestProtocol(_protocol) {
    if (typeof _protocol != 'string')
        return error('The request protocol must be a string');

    return chalk.gray(_protocol.toUpperCase());
}

/**
 * @function log
 * @desc Log a message to the server console. If a response object is passed,
 * the function will assume a route has been accessed and log route information.
 * 
 * @param {string} _message - The message you want to log
 * @param {Express.request} _requestObject - The Express server request object
 * @param {Express.request} _responseObject - The Express server response object
 * 
 * @returns {string}
 */
export function log(_message, _requestObject, _responseObject) {
    if (_requestObject != null && _responseObject != null) {
        let protocol = requestProtocol(_requestObject.protocol);
        let method   = requestMethod(_requestObject.method);
        let status   = statusCode(_responseObject.statusCode);
        
        let message = `${Config.PROMPT} ${_requestObject.ip} ${protocol} ${method} ${status} - ${_requestObject.url}`;
        console.log(message);
        return message;
    }
    else if (_message != null) {
        let message = `${Config.PROMPT} ${_message}`;
        console.log(message);
        return message;
    }
}

/**
 * @function error
 * @desc Log a generic error message, but do not throw an exception.
 * 
 * @param {string} _message - An error message, if any.
 * @returns {string}
 */
export function error(_message) {
    if (_message != null) {
        let message = `${Config.PROMPT} ${chalk.bgRedBright.red(_message)}`;

        console.error(message);
        return message;
    }
    
    let message = `${Config.PROMPT} ${chalk.bgRedBright.red('There has been an unreported error.')}`;
    console.error(message);
    return message;
}
