

# rick-and-morty-memory-game

## Proceso de desarrollo

- Definir tools de desarrollo.
- Estructura de carpetas.
- Definir componentes a crear.
- Definir Proveedores a crear.
- Definir Layouts a crear.
- Definir nombre de las rutas.
- Descargar las imágenes necesarias de Figma.
- Desarrollar cada componente y layout en storybook además hacer sus respectivos test unitarios a los componentes.
- Crear rutas de la app
- Maquetar vistas.
- Agregar endpoint.
- Agregar lógicas y pautas del juego.

## Tools de desarrollo

- React
- Axios
- TypeScript
- Sass (para manejo de los styles con extensión SCSS)
- Storybook
- react-router-dom
- testing-library-react
- Cypress

## Estructura de carpetas

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
│   │   │   └───📄 MyComponent.spec.tsx
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
│   │   │   └───📄 App.scss
│   │   │   └───📄 App.tsx
│   │   │   └───📄 Providers.tsx
│   │   │   └───📄 Routes.tsx
│   └───📄 index.js
```

#### Breve explicación del propósito de cada carpeta

- `/src`:
  Es la carpeta principal de todo el proyecto.

- `/src/assets`:
  contiene todo lo relacionado con las imágenes, iconos, fuentes, por ahora solo tiene `/src/assets/images`, pero si es necesario colocar iconos o fuentes debería crearse unas nuevas carpetas llamadas `/icons` y `/fonts` respectivamente dentro de `/src/assets`.

- `/src/constants`:
  Contiene variables constantes que son usadas en más de un lugar de la app, por ejemplo `routes.ts` guardara el valor de las rutas de la app.

- `/src/contexts`:
  Contiene los customs contexts creados de react.

- `/src/components`:
  Contiene los componentes de la app, la cual tendrá una forma específica de crear los componentes. Como se muestra en el ejemplo de la estructura de las carpetas; se debe crear una carpeta con **el nombre del componente**, que internamente tendrá cuatro archivos que son:

  - `index.tsx`: archivo donde se maneja la lógica y el jsx del componente.
  - `MyComponent.modules.scss`: archivo con el CSS del componente.
  - `MyComponent.spec.tsx`: archivo con el test unitario del componente.
  - `MyComponent.stories.tsx`: archivo con la stories del componente.

- `/src/hooks`: esta carpeta contiene los customs hooks de la app, en su primer nivel se puede colocar los customs hooks. A nivel de la carpeta `/api` se colocarán los customs hooks que manejen los request al servidor.

- `/src/layouts`: esta carpeta contiene los layouts creados de la app.

- `/src/utils`: esta carpeta contiene las funciones puras creadas para su uso en mas de un lugar de la app.

- `/src/providers`: esta carpeta contiene los customs providers creados de react.

- `/src/root`: esta carpeta contiene los archivos raíces de la app que son:

  - `/Providers.ts`: archivo que envuelve los providers.
 
  - `/Routes.ts`: archivo con las rutas de la app. (construido con react-router-dom)
 
  - `/App.ts`: que envuelve a `providers`, `routes` o algún componente o dev-tools que deba estar presente en toda la app.

**Nota:** Esta estructura de carpetas es de tipo de fichero, pero se tiene como premisa que cada componente, página, hook entre otros, tengan su propia carpeta  a partir de que se le agregue test, stories, CSS o cualquier archivo directamente relacionado con el funcionamiento óptimo de los mismos. 
Por ejemplo:
```
│   │  ──📁 MyComponent/
│   │   │   └───📄 index.tsx
│   │   │   └───📄 MyComponent.modules.scss
│   │   │   └───📄 MyComponent.test.tsx
│   │   │   └───📄 MyComponent.stories.ts
```


## Styles
Referente a los styles estuve usando sass específicamente en archivos .scss, los cuales cuenta con `root/App.scss` para los styles globales o compartidos por más de un módulo de la app como por ejemplo `.perfect-center` o `text-center` etc;  además cada módulo posee su propio `.scss` si es necesario.

## Tests
Para lograr estabilidad en el funcionamiento de cada módulo de la app apliqué tres tipos de test: 

- Test unitarios: utilice jest y testing library react.
- Snapshots: utilice jest y testing library react.
- e2e: utilice Cypress con testing library react.

## Deploy

Utilice vercel para el deploy.

**Link:** [https://rick-and-morty-memory-game-v2.vercel.app/](https://rick-and-morty-memory-game-v2.vercel.app/)

**Branch:** [v2](https://github.com/ilemarandrade/rick-and-morty-memory-game/tree/v2)

### Espero que disfruten leer las historia que cuenta mi código asi como yo disfrute con tanto entusiasmo este proceso de desarrollo, no se pierdan ni un solo detalle!
