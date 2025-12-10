SPRINT 2
Se implementó el registro de mascotas y sus propietarios:
se creó el modelo Paciente en Mongoose con datos del propietario y la mascota, incluyendo contraseña encriptada.
El controlador valida los datos, evita emails duplicados, genera una contraseña temporal, sube las imágenes de la mascota a Cloudinary y envía un correo al propietario con sus credenciales.
Se añadió la ruta POST /paciente/registro protegida con JWT para que solo veterinarios puedan registrar pacientes.
