// Instalamos las dependencias que nos van ayudar a empezar a construir este proyecto
// instalamos react como dependencia que si utiliza el proyecto, estando posicionado en la carpeta del proyecto,
// ejecutamos en la terminal: npm install react react-dom -S

// ejecutamos en la terminal: npm init -y
// para inicializar correctamente el arhivo package.json

// creamos la estructura de nuestro proyecto, creamos la carpeta src y creamos los elementos necesarios
// el punto de entrada index.js
// la carpeta components, aquí van a vivir los componentes que vamos a crear en react, dentro de la carpeta
// el archivo App.jsx (archivo js que contiene código HTML)

// creamos la carpeta public, dentro de la carpeta
// el archivo index.html

// instalamos Babel
// ejecutamos en la terminal: npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
// creamos el archivo .babelrc

// instalamos Webpack
// ejecutamos en la terminal: npm install webpack webpack-cli webpack-dev-server -D
// creamos el archivo webpack.config.js

// instalamos el loader y el plugin para trabajar con HTML
// ejecutamos en la terminal: npm install html-loader html-webpack-plugin -D
// agregamos HTML al archivo webpack.config.js

// creamos nuestros scripts start y build en el archivo package.json para probar nuestro proyecto
// para iniciar el servidor de desarrollo de webpack
// ejecutamos en la terminal: npm run start

// instalamos las dependencias y plugins que vamos a utilizar para CSS Y Sass
// ejecutamos en la terminal: npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
// agregamos CSS y Sass al archivo webpack.config.js

// dentro de la carpeta src, vamos a crear una carpeta nueva que se va a llamar styles, dentro de la carpeta
// creamos el recurso que es un archivo en Sass, global.scss
// ejecutamos en la terminal: npm run start

// instalamos los paquetes que nos permiten trabajar con el CSS, optimizar el js y limpiar nuestro recurso
// cuando estemos generando el build para producción
// ejecutamos en la terminal: npm install css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin -D
// creamos el archivo webpack.config.dev.js
// copiamos todo el contenido del archivo webpack.config.js y lo pegamos en el archivo webpack.config.dev.js
// y lo configuramos para el modo desarrollo (mode: 'development')

// en el archivo webpack.config.js quitamos el servidor de desarrollo de webpack, lo configuramos 
// para el modo producción y agregamos los paquetes que instalamos de la optimización de Webpack para React
// establecemos la ruta para publicarlo, que será la raíz
// creamos nuestro Alias
// agregamos la parte de optimización al final del archivo

// el script start en el archivo package.json lo módificamos estableciendo el archivo webpack.config.dev.js
// el script build lo módificamos estableciendo el archivo webpack.config.js

// para hacer Deploy del proyecto, este debe estar en un repositorio en GitHub, entramos a Netlify
// iniciando sesión utilizando GitHub, damos click en New site from git, seleccionamos GitHub,
// buscamos y seleccionamos el repositorio del proyecto para mandar a producción, confirmamos
// que la información para publicar el sitio sea la correcta, damos click en Deploy site