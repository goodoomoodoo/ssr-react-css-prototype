import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import App from './views/src/App';
import template from './views/src/template';

const app = express();
const PORT = process.env.PORT || 3000;

app.use( '/assets', express.static('assets') );

app.get( '/' , ( req , res ) => {
    let content = renderToString(
        <App />
    );
    let finalHTML = template( 'CSS in JS', content );
    res.end( finalHTML );
});

app.listen( PORT , () => {
    console.log( 'Serving on port ' + PORT + ' ...' );
});