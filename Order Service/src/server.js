const app = require('./app'); 
const PORT = 5001; 

app.listen(PORT, () => console.log(`Order Service is running at http://localhost:${PORT}`));