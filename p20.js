const http = require('http');

//templetes
const server = http.createServer(function(req, res) {
    // req -> handle the incoming data to server 
    // res -> handle the outgoing data from server
    console.log(`url address =`, req.url);
    if(req.url === "/") {
        res.end(`<div>
                    <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/shop">Shop</a>
                    </nav>
                    <section>
                    <h1>Welcome to  Home</h1>
                    </section>
            </div>`)
    } else if (req.url === "/about") {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>About Page</h1>
            </section>
    </div>`)
    } else if (req.url === "/contact") {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>Contact Page</h1>
            </section>
    </div>`)
    } else {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>404 Page Not Found</h1>
            </section>
    </div>`)
    }
})

// server listening on port 4500
server.listen(4500, function() {
    console.log(`server is started , running @ http://localhost:${4500}`)
})