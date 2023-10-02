const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Favicon
app.use('/favicon.ico', express.static('images/favicon.ico'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    const missionStatement = "Delivering quality web solutions.";
    res.render('home', { missionStatement });
});

app.get('/about', (req, res) => {
    const fullName = "Your Full Name";
    const aboutParagraph = "I am a dedicated and passionate web developer with a strong foundation in web technologies. My goal is to create beautiful, functional, and user-friendly websites and web applications.";
  
    res.render('about', { fullName, aboutParagraph });
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;
  
    // Handle the form data (e.g., send an email, save to a database, etc.)
  
    res.redirect('/'); // Redirect back to the home page after form submission
  });
