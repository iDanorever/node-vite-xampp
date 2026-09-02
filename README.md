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

----------------------------------------------------------------------------------
