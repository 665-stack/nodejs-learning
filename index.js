const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hey you pretty girl. Do you know me?")
})
app.listen(port, () => {
    console.log('listening to port - ', port);
})