//const http = require('http');
//const fs = require('fs');
const express = require("express");
const app = express();

const port = 3000;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {text: "Index"});
});

app.get('/about', (req, res) => {
    res.render('about', {text: "About"});
});

app.get('/contact', (req, res) => {
    res.render('contact-me', {text: "Contact me"});
});

app.get('/*', (req, res) => {
    res.render('404', {text: "404"});
});

app.listen(port, () => {
    console.log("Server is up!");
});

/* http.createServer((req,res) => {

    switch (req.url) {
        case '/': fs.readFile('index.html', (err, data) => {
                    if (err) throw err;

                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    return res.end();
                    });

                    break;

        case '/about': fs.readFile('about.html', (err, data) => {
                            if (err) throw err;
    
                            res.writeHead(200, {'Content-Type' : 'text/html'});
                            res.write(data);
                            return res.end();
                        });
    
                        break;

        case '/contact': fs.readFile('contact-me.html', (err, data) => {
                            if (err) throw err;
            
                            res.writeHead(200, {'Content-Type' : 'text/html'});
                            res.write(data);
                            return res.end();
                        });
        
                        break;

        default: fs.readFile('404.html', (err, data) => {
                    if (err) throw err;

                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    return res.end();
                 });

                 break;
    }
}).listen(port, () => {
    console.log("Server is up!");
}); */
