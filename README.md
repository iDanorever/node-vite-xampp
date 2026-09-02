# ⚙️ Principales Desafíos y Mejoras Implementadas

Durante el desarrollo de este proyecto, me enfrenté a varios desafíos técnicos que me permitieron aprender y mejorar la aplicación. Estos son los más significativos:

---

## 🧹 Configuración Inicial y Dependencias

**Desafío:**  
El proyecto empezó con una estructura algo desordenada, mezclando archivos de Vite y Node.js. Además, tuve problemas con la instalación de `shadcn/ui` porque la CLI había cambiado.

**Solución:**  
Limpié la estructura, separé claramente el backend (`/backend`) del frontend (`/frontend`) y actualicé el comando a:

```bash
npx shadcn@latest add

```


# 🗄️ Conexión con la Base de Datos MySQL
**Desafío:**
El mayor problema fue conectar el backend a MySQL. XAMPP usaba el puerto ```3307``` en lugar del estándar ```3306```, lo que impedía que el servidor se conectara correctamente. Además, la base de datos inicial ```softtech_db``` no existía y phpMyAdmin no respondía.

**Solución:**
Investigué la configuración de XAMPP, ajusté el puerto en el código de conexión y creé la base de datos ```softtech_db``` con sus tablas (```vacantes, empresas, usuarios```) directamente desde la terminal de MySQL, evitando así la dependencia de phpMyAdmin.


# 📦 Manejo de Módulos en Node.js
**Desafío:**
El servidor fallaba al iniciar con un error:

```
ReferenceError: require is not defined
```
Esto se debía a que el ```package.json``` tenía ```"type": "module"```, forzando el uso de ```import```, mientras que el código usaba ```require```.

**Solución:**
Eliminé la línea ```"type": "module"``` del ```package.json``` para que Node.js tratara el archivo como CommonJS, lo que permitió que el servidor arrancara sin problemas.




# 🧩 Errores de TypeScript en el Sidebar (shadcn/ui)
**Desafío:**
La implementación del Sidebar con ```shadcn/ui``` generaba múltiples errores de TypeScript, especialmente con las props ```asChild``` e ```isActive```, y con tipos de componentes como ```SidebarRail```.

**Solución:**
Tras varias iteraciones, simplifiqué el componente ```app-sidebar.tsx``` para no usar ```asChild``` y corregí los tipos en ```sidebar.tsx```, por ejemplo, cambiando:
```
React.ComponentProps<"button">
```
por:
```
React.ButtonHTMLAttributes<HTMLButtonElement>
```
y ajustando el tipado de ```setOpen```.



# 🎨 Mejora de la Experiencia de Usuario (UI/UX)
**Mejora 1:**
Para que la aplicación se viera más profesional, integré un ```Sidebar``` navegable en todas las páginas, permitiendo acceder fácilmente a las diferentes secciones como el Dashboard, la Bolsa de Trabajo o el Perfil.

**Mejora 2:**
Añadí funcionalidades clave como un sistema de login con redirección y un botón de **"Cerrar sesión"** en el Sidebar, mejorando el flujo de navegación y la experiencia general del usuario.

