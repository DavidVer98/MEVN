import express from 'express';
import morgan from 'morgan';  // middleware
import cors from 'cors';  // middleware

import taskRoutes from './routes'; // importamos las rutas

const app = express();

app.use(cors()); // permite que cualquier cliente se conecte a este servidor
app.use(morgan(("dev")))
app.use(express.json());  // permite que el servidor entienda json

app.use("/api", taskRoutes); // todas las rutas que empiecen con /api serán manejadas por taskRoutes


export default app; 