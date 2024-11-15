import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'



const app = express()

//conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000

//habilitar PUG
app.set('view engine','pug')

//definir la carpeta publica
app.use(express.static('public'))

// Agregar body parse para leer los datos del usuario
app.use(express.urlencoded({extended:true}))

// obtener año actual
app.use((req,res, next)=>{
    
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'
    
    next()

    //en caso de que no funcione next bien, return next()
})

//agregar router
app.use('/',router)



app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})