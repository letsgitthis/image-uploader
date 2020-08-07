const express = require("express");
const multer = require('multer');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

//run css styles
app.use(express.static('public'));

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage');

// template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routing
app.get('/', (req, res) => {
  res.render('index');
});

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.render('index', {
                msg: err
            });
        } else {
            if(req.file == undefined){
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render('index', {
                    msg: "File Uploaded!",
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));