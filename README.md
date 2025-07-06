# 💼 Portfolio Personal - Manuel Guirado

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-manuelguirado.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## 🚀 Descripción

Portfolio personal profesional desarrollado con Next.js 15 y TypeScript, diseñado para mostrar mis proyectos, habilidades técnicas y experiencia como desarrollador Full Stack. Incluye un formulario de contacto funcional con envío real de emails.

### ✨ Características Principales

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con componentes reutilizables
- **📱 Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **⚡ Alto Rendimiento**: Construido con Next.js App Router y renderizado estático
- **📧 Formulario de Contacto**: Envío real de emails usando Resend API
- **🌙 Tema Adaptable**: Soporte para modo claro y oscuro
- **♿ Accesible**: Componentes accesibles siguiendo las mejores prácticas
- **🔍 SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda

## 🛠️ Stack Tecnológico

### Frontend

- **Framework**: Next.js 15.2.4 (App Router)
- **Lenguaje**: TypeScript 5.0
- **Estilos**: Tailwind CSS 3.4
- **Componentes UI**: Radix UI + shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod

### Backend & Servicios

- **Emails**: Resend API
- **Deployment**: Vercel
- **Validación**: Zod schemas

### Herramientas de Desarrollo

- **Package Manager**: pnpm
- **Linting**: ESLint
- **Formateo**: Prettier (via ESLint)
- **Control de Versiones**: Git + GitHub

## 📁 Estructura del Proyecto

```text
📦 portfolio/
├── 📂 app/                    # App Router de Next.js
│   ├── 📄 layout.tsx         # Layout principal
│   ├── 📄 page.tsx           # Página principal
│   ├── 📄 portfolio.tsx      # Componente del portfolio
│   ├── 📄 not-found.tsx      # Página 404 personalizada
│   └── 📄 globals.css        # Estilos globales
├── 📂 components/             # Componentes reutilizables
│   ├── 📄 contact-form.tsx   # Formulario de contacto
│   ├── 📄 theme-provider.tsx # Proveedor de temas
│   └── 📂 ui/                # Componentes UI base
├── 📂 actions/               # Server Actions de Next.js
│   └── 📄 send-email.ts      # Lógica de envío de emails
├── 📂 lib/                   # Utilidades
│   └── 📄 utils.ts           # Funciones helper
├── 📂 hooks/                 # Custom hooks
├── 📂 public/                # Archivos estáticos
└── 📄 next.config.mjs        # Configuración de Next.js
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18.0 o superior
- pnpm (recomendado) o npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/manuelguirado/portfolio.git
cd portfolio
```

### 2. Instalar dependencias

```bash
pnpm install
# o
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` y añade tu API key de Resend:

```env
RESEND_API_KEY=tu_api_key_aqui
```

### 4. Ejecutar en desarrollo

```bash
pnpm dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📧 Configuración del Formulario de Contacto

El formulario de contacto utiliza [Resend](https://resend.com/) para enviar emails reales:

1. **Crear cuenta en Resend**: Ve a [resend.com](https://resend.com/)
2. **Obtener API Key**: Genera una API key en el dashboard
3. **Configurar dominio**: Usa `onboarding@resend.dev` para pruebas o configura tu dominio
4. **Variables de entorno**: Añade `RESEND_API_KEY` a tu `.env.local`

## 🎯 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Producción
pnpm build        # Construye la aplicación
pnpm start        # Inicia servidor de producción

# Linting
pnpm lint         # Ejecuta ESLint
```

## 🚀 Despliegue en Vercel

1. **Fork o clona** este repositorio
2. **Conecta** tu repositorio a Vercel
3. **Configura** las variables de entorno en Vercel:
   - `RESEND_API_KEY`: Tu API key de Resend
4. **Despliega** automáticamente en cada push a main

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/manuelguirado/portfolio)

## 🎨 Personalización

### Modificar Contenido

- **Información personal**: Edita `app/portfolio.tsx`
- **Proyectos**: Actualiza el array `projects` en `portfolio.tsx`
- **Skills**: Modifica el array `techStack` en `portfolio.tsx`

### Estilos y Temas

- **Colores**: Edita `tailwind.config.ts`
- **Componentes**: Personaliza en `components/ui/`
- **CSS Global**: Modifica `app/globals.css`

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado desde 320px
- **Breakpoints**: Soporte completo para sm, md, lg, xl, 2xl
- **Touch Friendly**: Elementos táctiles optimizados
- **Performance**: Imágenes optimizadas y lazy loading

## 🧪 Testing y Calidad

- **TypeScript**: Tipado estricto para prevenir errores
- **ESLint**: Linting automático del código
- **Build Verificación**: CI/CD con verificación automática
- **Lighthouse**: Optimizado para puntuaciones altas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

### Manuel Guirado

- 🌐 Portfolio: [portfolio-manuelguirado.vercel.app](https://portfolio-manuelguirado.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/manuel-guirado](https://linkedin.com/in/manuel-guirado)
- 📧 Email: [manuelguirado.dev@gmail.com](mailto:manuelguirado.dev@gmail.com)
- 🐙 GitHub: [github.com/manuelguirado](https://github.com/manuelguirado)

---

⭐ **¡No olvides darle una estrella al proyecto si te ha gustado!**