const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>connectfour</h1>
        </body>
    </html>
    `)
})

module.exports = router;
