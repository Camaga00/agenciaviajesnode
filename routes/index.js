import express from 'express'
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaContacto, paginaDetalleViaje } from '../controllers/paginasControllers.js'
import { guardarTestimonial } from '../controllers/testimonialControllers.js'

const router = express.Router()

router.get('/', paginaInicio)

router.get('/contacto',paginaContacto)

router.get('/nosotros', paginaNosotros)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)


export default router