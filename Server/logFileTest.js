var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');
var server = require('server');

var http = require('http');
var main_system = require('fs');

var winston = require(); 

function timeStampFormat()
{
    return moment().format('YYY-MM-DD HH:mm:ss.SSS ZZ');    
};

var logger = new (winston.Logger) ({
    transports: [ 
        new(winstonDaily)({
            name: 'info-file', 
            filename: './log/server',
            datePattern: 'yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info', 
            showLevel: true,
            jason: false,
            timestamp: timeStampFormat

        }),
        new (winston.transports.Console)({
            name: 'debug-console', 
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers:[
        new(winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            datePattern: 'yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error', 
            showLevel: true,
            jason: false,
            timestamp: timeStampFormat
        }),
        new(winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat        
        })
        
    ]
    
});

var massage= require()