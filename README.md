# Obtener IMEI con Ionic



## Requisitos

* [NodeJs v12.16.1](https://nodejs.org/es/docs/)
* [Cordova 10.0.0](https://cordova.apache.org/docs/es/latest/)
* [Angular 10.0.0](https://v10.angular.io/docs)
* [Ionic 5](https://ionicframework.com/docs)

## Instalación

### Ionic y Cordova

``` bash
npm i -g @ionic/cli cordova native-run
npm i
ionic cordova platform add android
```

### Plugins necesarios
Android Permissions
``` bash
ionic cordova plugin add cordova-plugin-android-permissions
npm i @ionic-native/android-permissions
```
Uid
``` bash
ionic cordova plugin add cordova-plugin-uid
npm install @ionic-native/uid
```

### Build

Para crear el `config.xml` es necesario correr
``` bash
./scripts/setconfigs.js [debug|release|livereload]
```

### En caso de copiar el proyecto a otro directorio

Se debe ejecutar lo siguiente para poder reconstruir los path absolutos de los json dentro de node_modules:
``` bash
npm rebuild
```

### Si tenemos errores en el dispositivo que no salen en el navegador, se puede ver la consola haciendo lo siguiente:
Nos aseguramos que el dispositivo aparezca listado en ADB
``` bash
adb devices
```
Ejecutamos la app en el dispositivo (para esto hace falta tener instalado native-run)
``` bash
npm i -g native-run
ionic cordova run android
```
Luego en Chrome podemos acceder al dispositivo colocando en la barra de dirección:
```
chrome://inspect/#devices
```
