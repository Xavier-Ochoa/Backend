import {Router} from 'express'
import { comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, login, perfil, actualizarPassword, actualizarPerfil} from '../controllers/veterinario_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)
router.post('/veterinario/login',login) 

router.get('/perfil',verificarTokenJWT,perfil)

router.put('/actualizarpassword/:id',verificarTokenJWT,actualizarPassword)
router.put('/actualizarperfil/:id',verificarTokenJWT,actualizarPerfil)

export default router