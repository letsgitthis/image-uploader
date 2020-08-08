// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================

// // Requiring our models
// const db = require("../models");
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
 
// var upload = multer({ storage: storage });

// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/api/posts", function(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//       query.AuthorId = req.query.author_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findAll({
//       where: query,
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // POST route for saving a new post
//   app.post("/api/posts", upload.single('post-image'), function(req, res) {
//     // console.log(req);
//     console.log(req.body);
//     console.log(req.files);
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });
//     } else {
//       console.log('file received');
//       return res.send({
//         success: true
//       });
//     };
//     // db.Post.create(req.body).then(function(dbPost) {
//     //   res.json(dbPost);
//     // });
//   });

//   //app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//   //})

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
// };
