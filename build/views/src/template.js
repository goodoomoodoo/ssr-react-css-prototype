module.exports = function ( title , content = '' )
{
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>${title}</title>
                <link rel="stylesheet" type="text/CSS" href="/assets/style.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/assets/bundle.js"></script>
            </body>
        </html>
    `;
}