import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from './server/App';

const app = express();
const indexHTML = fs.readFileSync( __dirname + '/browser/index.html' , 'utf8' );
const PORT = process.env.PORT || 3000;

app.use( express.static('browser') );

app.get( '/' , ( req , res ) => {
    let content = renderToString(
        <App />
    );
    let finalHTML = indexHTML.replace( '<!--App-->' , content );
    console.log( finalHTML );
    res.end( finalHTML );
});

app.listen( PORT , () => {
    console.log( 'Serving on port ' + PORT + ' ...' );
});