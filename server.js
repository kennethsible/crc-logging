import express from 'express';
import { readdir } from 'fs';

const app = express();
const directoryPath = 'public/markdown';
const serverPort = 8080;

app.get('/api/getFiles', (req, res) => {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`[${new Date().toLocaleTimeString()}] `, err);
      res.status(500).json({error: 'cannot read ' + directoryPath});
    } else {
      res.json({files});
    }
  });
});

app.use(express.static('public'));

app.listen(serverPort, () => {
  console.log(`[${new Date().toLocaleTimeString()}] http://localhost:${serverPort}/`);
});
