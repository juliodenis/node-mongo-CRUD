const express = require('express');

const app = express();
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares


// Routes


// Static Files


// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    
});