# Countries App

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Comenzando

 1. Cloná el repositorio en tu pc para poder comenzar
 2. Se tiene una estructura general tanto en servidor como cliente, por lo que deberás hacer npm install tanto en `api` como en `client`


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor


__ACLARACIÓN:__ Las dependencias con las cuales se trabajaron en este proyecto son:

Versiones:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3


En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `countries`

El contenido de `client` fue creado usando: Create React App.


## Esta APP permite:

- Buscar paises
- Filtrarlos / Ordenarlos
- Crear actividades turísticas



#### Tecnologías utilizadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres


