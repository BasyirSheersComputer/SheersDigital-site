import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connection } from './db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Track visit
app.post('/api/track', (req, res) => {
  const { ip_address, page_url, time_spent_seconds, click_count } = req.body;

  const query = `INSERT INTO visitor_logs (ip_address, page_url, time_spent_seconds, click_count) VALUES (?, ?, ?, ?)`;
  connection.query(query, [ip_address, page_url, time_spent_seconds, click_count], (error, results) => {
    if (error) {
      console.error('Error inserting visitor log:', error);
      return res.status(500).send('Server error');
    }
    res.send('Logged');
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));