const express = require('express')
const app = express()
const path = require('path')

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/harvard', async(req, res, next) => {
    try {

    }
    catch(ex) {
        next(ex)
    }
})

app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`curating on port ${port}`))