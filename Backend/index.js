import express from 'express';
import cors from 'cors';
import connectDB from './Config/connect.js';
import router from './Routes/authRoute.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://seleksi2-user.vercel.app"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 204
}));

connectDB();

app.use('/api', router);

app.listen(5500, () => {
  console.log("server running on port", 5500);
});

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
