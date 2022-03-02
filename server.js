const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})