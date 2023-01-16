# Buoyviewer

## Requisitos previos
Se necesita instalar Geoserver y la capa vectorial para acceder a todas las funcionalidades de la aplicación
  1. Instalar Java versión 1.8
  2. Instalar Tomcat 8.5
  3. Instalar Geoserver 2.20.6 (recomendable descargarlo en formato .war para copiarlo directamente en la carpeta webapps de Tomcat)
  4. Ejecutar el Tomcat a través del archivo Tomcat8w.exe, en la carpeta bin
  5. Abrir el Geoserver desde el navegador introduciendo la dirección ```http://localhost:8080/geoserver```
  6. Crear el espacio de almacenamiento Buoyviewer y subir a dicho espacio la capa Buoys.shp
  7. Incluir el archivo content.ftl en la carpeta correspondiente al espacio de almacenamiento creado en el paso anterior, dentro de la carpeta ```\webapps\geoserver\data\workspaces\Buoyviewer\Buoyviewer```
  8. Activar el CORS dentro del archivo ```web.xml``` en la carpeta de Geoserver WEB-INF.

## Arrancar servidor
  1. Clonar este repositorio
  2. Usar el comando ```cd``` para acceder desde la terminal al directorio
  3. Ejecutar el comando ```npm run dev```
  4. Abrir el navegador e introducir la dirección ```http://localhost:3000```
