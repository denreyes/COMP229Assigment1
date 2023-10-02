var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express',
//   missionStatement: "Delivering quality web solutions." });
// });

router.get('/', (req, res) => {
  const missionStatement = "Delivering quality web solutions.";
  res.render('index', { missionStatement });
});

router.get('/about', (req, res) => {
  const fullName = "Your Full Name";
  const aboutParagraph = "I am a dedicated and passionate web developer with a strong foundation in web technologies. My goal is to create beautiful, functional, and user-friendly websites and web applications.";

  res.render('about', { fullName, aboutParagraph });
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Handle the form data (e.g., send an email, save to a database, etc.)

  res.redirect('/'); // Redirect back to the home page after form submission
});

module.exports = router;