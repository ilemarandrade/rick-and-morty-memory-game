# rick-and-morty-memory-game

## Proceso de desarrollo

- Definir tools de desarrollo.
- Estructura de carpetas.
- Definir componentes a crear.
- Definir Proveedores a crear.
- Definir Layouts a crear.
- Definir nombre de las rutas.
- Descargar las imagenes necesarias de figma.
- Desarrollar cada componente y layout en storybook.
- Desarrollar test unitarios de cada componente.
- Maquetear vistas.
- Agreagar endpoint.
- Agregar logicas y pautas del juego.

### Tools de desarrollo

- React
- Axios
- Typescript
- Sass (para manejo de los styles con extension scss)
- Storybook
- react-router-dom

### Estrutura de carpetas

```
├───📁 src/
│   └───📁 assets/
│   │   └───📁 images/
│   └───📁 constants/
│   └───📁 contexts/
│   ├───📁 components/
│   │   └───📁 MyComponent/
│   │   │   └───📄 index.tsx
│   │   │   └───📄 MyComponent.modules.scss
│   │   │   └───📄 MyComponent.test.tsx
│   │   │   └───📄 MyComponent.stories.ts
│   └───📁 hooks/
│   │   └───📁 api/
│   │   │   └───📄 useGetData.ts
│   │   └───📄 useMyCustomHook.ts
│   └───📁 layouts/
│   │   │   └───📄 MainLayout.tsx
│   └───📁 utils/
│   └───📁 pages/
│   └───📁 providers/
│   └───📁 root/
│   └───📄 index.js
│   └───📄 app.scss
```

#### Breve explicación del proposito de cada carpeta

- `/src`:
  Es la carpeta principal de todo el proyecto.
- `/src/assets`:
  contiene todo lo relacionado con las imagenes, iconos, fonts, por ahora solo tiene `/src/assets/images` pero si es necesario colocar iconos o fonts deberia crearse unas nuevas carpetas llamadas `/icons` y `/fonts` respectivamente dentro de `/src/assets`.

- `/src/constants`:
  Contiene variables constantes que son usadas en mas de un lugar de la app, por ejemplo `routes.ts` guardara el valor de las rutas de la app.

- `/src/contexts`:
  Contiene los customs contexts creados de react.
- `/src/components`:
  Contiene los componentes de la app, la cual tendra un forma especifica de crear los componentes. Como se muestra en el ejemplo de la estructura de las carpetas se debe crear una carpeta con **el nombre del componente**, que internamente tendra cuatro archivos que son:

  - `index.tsx`: archivo donde se maneja la logica y el jsx del componente.
  - `MyComponent.modules.scss`: archivo con el css del componente.
  - `MyComponent.test.tsx`: archivo con el test unitario del componente.
  - `MyComponent.stories.tsx`: archivo con la stories del componente.

- `/src/hooks`: esta carpeta contiene los customs hooks de la app, en su primer nivel se puede colocar los customs hooks. A nivel de la carpeta `/api` se colocaran los customs hooks que manejen los request al servidor.

- `/src/layouts`: esta carpeta contiene los layouts creados de la app.

- `/src/utils`: esta carpeta contiene las funciones puras creadas para su uso en mas de un lugar de la app.

- `/src/providers`: esta carpeta contiene los customs providers creados de react.

- `/src/root`: esta carpeta contiene los archivos raices de la app que son:

  - `/Providers.ts`: archivo que envuelve los providers.
  - `/Routes.ts`: archivo con las rutas de la app. (construido con react-router-dom)
  - `/App.ts`: que envuelve a `providers`, `routes` o algun componente o dev-tools que deba estar presente en toda la app.

- `/src/app.scss`: contiene las clases usadas en multiples lugares de la app, como por ejemplo `.perfect-center` o `text-center` etc.
