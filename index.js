import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
app.use(cors()); 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: '',       
  database: 'softtech_db', 
  port: 3307         
});


db.connect((err) => {
  if (err) {
    console.error('Error conectando a XAMPP MySQL:', err.message);
    return;
  }
  console.log('¡Conectado exitosamente al MySQL de XAMPP!');
});


app.get('/api/kpis', (req, res) => {
  const query = 'SELECT satisfaccion, tiempoRespuesta, llamadasColgadas FROM kpis_soporte ORDER BY id DESC LIMIT 1';
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error leyendo XAMPP' });
    }
    

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.json({ satisfaccion: "0%", tiempoRespuesta: "0 min", llamadasColgadas: "0%" });
    }
  });
});

app.listen(3000, () => {
  console.log('Cerebro corriendo en http://localhost:3000');
});
