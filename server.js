var express = require('express');
var app = express();

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

//set routes
app.get('', (req, res) => {
    res.render('index')
});


var port = process.env.PORT || 3000;
app.listen(port, () => console.log('server are running at 3000'));