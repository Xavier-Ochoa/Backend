// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cloudinary from 'cloudinary';

// Routers
import routerPacientes from './routers/paciente_routes.js';
import routerVeterinarios from './routers/veterinario_routes.js';

dotenv.config();
const app = express();

// =====================
// Middlewares
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // para form-data sin archivos
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

// =====================
// Configuración Cloudinary
// =====================
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// =====================
// Rutas
// =====================
app.get('/', (req, res) => res.send("Server on"));

// Rutas de veterinarios
app.use('/api', routerVeterinarios);

// Rutas de pacientes
app.use('/api', routerPacientes);

// =====================
// Manejo de rutas no encontradas
// =====================
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

// =====================
// Puerto
// =====================
app.set('port', process.env.PORT || 3000);

export default app;
