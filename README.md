# ⚙️ Principales Desafíos y Mejoras Implementadas

Durante el desarrollo de este proyecto, me enfrenté a varios desafíos técnicos que me permitieron aprender y mejorar la aplicación. Estos son los más significativos:

---

## 🧹 Configuración Inicial y Dependencias

**Desafío:**  
El proyecto empezó con una estructura algo desordenada, mezclando archivos de Vite y Node.js. Además, tuve problemas con la instalación de `shadcn/ui` porque la CLI había cambiado.

**Solución:**  
Limpié la estructura, separé claramente el backend (`/backend`) del frontend (`/frontend`) y actualicé el comando a:

```bash
npx shadcn@latest add```

---

# 🗄️ Conexión con la Base de Datos MySQL
Desafío:
El mayor problema fue conectar el backend a MySQL. XAMPP usaba un puerto de 3006 y no abria el phpMyADdmi , y la base de datos inicial softtech_db no existía.

Solución:
Investigué la configuración de XAMPP, ajusté el puerto en el código de conexión y creé la base de datos softtech_db con sus tablas (vacantes, empresas, usuarios) directamente desde la terminal de MySQL para solucionarlo rápidamente.

---

