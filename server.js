// const express = require('express')
// const app = express()
// const path = require('path')

// app.use('/dist', express.static(path.join(__dirname, 'dist')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
// app.use(express.static(path.join(__dirname, 'public')))

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`curating on port ${port}`))

//v2:
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
