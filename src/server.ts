import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

// publish directory `public`
app.use(express.static(path.join(__dirname, '..', 'public')));


app.listen(port, () => {
  console.log(`The app is listening on port ${port}.`);
});