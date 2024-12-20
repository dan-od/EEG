let express = require('express');
let path = require('path');
let indexRouter = require('./routes/index');

var app = express();

const PORT = process.env.PORT || 3000;



// Set View Engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Route Definitions
app.get('/', (req, res) => {
  res.render('home', { title: 'Home - EEG Calibrations' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services - EEG Calibrations' });
});

// About page route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us - EEG Calibrations' });
});


app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us - EEG Calibrations' });
});

// Handle Form Submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message received from ${name} (${email}): ${message}`);
  res.redirect('/contact?success=true');
});


app.post("/quote", (req, res) => {
  const { serviceType, company, notes } = req.body;

  // Handle file uploads if applicable
  if (req.file) {
    console.log("File uploaded:", req.file.originalname);
  }

  console.log("Quote request received:", { serviceType, company, notes });

  // Respond to the client
  res.render("quote-success", { message: "Your quote request was submitted successfully!" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
