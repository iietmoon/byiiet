var express = require('express');
var app = express();

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/scss', express.static(__dirname + 'public/scss'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/icons', express.static(__dirname + 'public/icons'));
app.use('/libraries', express.static(__dirname + 'public/libraries'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

//set routes
app.get('', (req, res) => {
    res.render('index')
});


var port = process.env.PORT || 8000;
app.listen(port, () => console.log('server are running at 3000'));