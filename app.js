const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS_Certified_Developer_Associate-DVA-C01-Challenge Dec04,2021'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
