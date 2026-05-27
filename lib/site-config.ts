export const site = {
  name: "Martín Coll",
  brand: "martincoll",
  domain: "martincoll.dev",
  email: "contacto@martincoll.dev",
  whatsapp: "5491130756468",
  socials: {
    github: "https://github.com/KonixDev",
    x: "https://x.com/renwo_app",
    linkedin: "https://linkedin.com/in/martincoll",
  },
  location: "Buenos Aires, Argentina",
  availability: "Disponible para proyectos",
};

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const services = [
  "Apps Mobile",
  "Desarrollo Web",
  "Sistemas Backend",
  "Android TV",
  "Ciberseguridad",
  "Base de Datos",
  "Play Store & App Store",
  "Rediseño Web",
  "Optimización de Sistemas",
  "ERP & Dashboards",
] as const;

export const projects = [
  {
    name: "Pendi",
    url: "https://pendi.app",
    desc: "Gestor de tareas simple para equipos",
    og: "https://pendi.app/opengraph-image?63467f0377e80316",
    icon: "/icons/pendi.svg",
    color: "#6366F1",
  },
  {
    name: "Tata",
    url: "https://tata.com.ar",
    desc: "Agente IA para oficios vía WhatsApp",
    og: "https://tata.com.ar/opengraph-image?04e9660045f053bf",
    icon: "/icons/tata.svg",
    color: "#22C55E",
  },
  {
    name: "Mibio",
    url: "https://mibio.app",
    desc: "Tu negocio en un link",
    og: "https://mibio.app/opengraph-image?97980d843f6d4461",
    icon: "/icons/mibio.svg",
    color: "#F59E0B",
  },
  {
    name: "useDeploy",
    url: "https://usedeploy.dev",
    desc: "Plantilla base para lanzar productos SaaS",
    og: "https://usedeploy.dev/opengraph-image?32f5fb7bf7df40a7",
    icon: "/icons/usedeploy.svg",
    color: "#3B82F6",
  },
  {
    name: "Commercy",
    url: "https://commercy.com.ar",
    desc: "ERP e-commerce todo-en-uno",
    og: "https://commercy.com.ar/opengraph-image",
    icon: "/icons/commercy.svg",
    color: "#EF4444",
  },
  {
    name: "LatamServers",
    url: "https://latamservers.com",
    desc: "Directorio de servidores gaming LATAM",
    og: "https://latamservers.com/opengraph-image?c6ce7a4c0269a4d2",
    icon: "/icons/latamservers.svg",
    color: "#8B5CF6",
  },
] as const;

export const stats = [
  { value: "6+", label: "Productos en producción" },
  { value: "2022", label: "Construyendo · est." },
  { value: "4–10", label: "Semanas de idea a lanzamiento" },
  { value: "100%", label: "Proyectos entregados en plazo" },
] as const;

export const tiers = [
  {
    key: "starter" as const,
    name: "Sprint MVP",
    price: "Desde $2.500",
    desc: "Para validar rápido. Página web, sistema de usuarios, 1 funcionalidad principal, todo online.",
    includes: [
      "Página web + sistema de usuarios",
      "1 funcionalidad principal completa",
      "Publicación online con dominio propio",
      "2 semanas de soporte post-lanzamiento",
    ],
    timeline: "2 — 3 semanas",
    wa: "Hola Martín, quiero arrancar un Sprint MVP.",
  },
  {
    key: "build" as const,
    name: "Build Completo",
    price: "Desde $5.000",
    desc: "Producto real. Múltiples usuarios, pagos integrados, panel de administración, todo listo desde el día uno.",
    includes: [
      "3 a 5 funcionalidades principales",
      "Cobros online (tarjeta, transferencia, cripto)",
      "Usuarios, permisos e invitaciones",
      "Monitoreo + pruebas + documentación",
    ],
    timeline: "4 — 8 semanas",
    featured: true,
    wa: "Hola Martín, quiero construir un producto completo.",
  },
  {
    key: "custom" as const,
    name: "Custom",
    price: "A medida",
    desc: "Proyectos complejos, equipos extendidos, análisis profundo, soluciones empresariales.",
    includes: [
      "Análisis inicial + diseño de solución",
      "Acuerdo mensual continuo",
      "Equipo extendido (1–3 desarrolladores)",
      "Migraciones, integraciones y crecimiento",
    ],
    timeline: "Variable",
    wa: "Hola Martín, tengo un proyecto Custom.",
  },
] as const;

export const included = [
  {
    title: "El código es tuyo",
    desc: "Todo el proyecto vive en tu cuenta. Sin ataduras, sin dependencias ocultas. Es 100% tu propiedad.",
  },
  {
    title: "Publicado en tu dominio",
    desc: "Dejamos tu sistema funcionando online, en tu dominio y en la infraestructura que elijas. Tu control total.",
  },
  {
    title: "Publicación en tiendas",
    desc: "Subimos tu app a Play Store y App Store. Nos encargamos de los íconos, capturas de pantalla y proceso de aprobación.",
  },
  {
    title: "Pruebas y control de calidad",
    desc: "Pruebas automatizadas, revisión manual, y validación en dispositivos reales antes de cada lanzamiento.",
  },
  {
    title: "Documentación completa",
    desc: "Guías de uso, documentación técnica y manuales de mantenimiento para que cualquier equipo pueda continuarlo.",
  },
  {
    title: "Soporte post-lanzamiento",
    desc: "Errores en los primeros 30 días se corrigen sin costo adicional. Mantenimiento opcional después.",
  },
  {
    title: "Potenciado por IA",
    desc: "Usamos inteligencia artificial en cada paso: desarrollo, revisiones, pruebas y documentación. Más rápido, más preciso.",
  },
  {
    title: "Análisis de seguridad",
    desc: "Auditoría de seguridad incluida: protección contra las vulnerabilidades más comunes, revisión de configuración y pruebas de penetración.",
  },
  {
    title: "Optimizado para buscadores",
    desc: "Tu sistema carga rápido, aparece bien en Google, y cumple con los estándares de rendimiento web.",
  },
] as const;

export const faqs = [
  {
    q: "¿Qué tipo de proyectos pueden desarrollar?",
    a: "Hacemos de todo: apps mobile (iOS y Android), desarrollo web, sistemas backend, apps para Android TV, análisis de ciberseguridad, diseño y optimización de bases de datos, rediseño web, ERPs y dashboards. Si es software, lo construimos.",
  },
  {
    q: "¿Cómo integran la IA en el proceso?",
    a: "La IA es parte de nuestras herramientas de trabajo, no una moda. La usamos para escribir código, revisar calidad, ejecutar pruebas, generar documentación y optimizar rendimiento. Esto nos permite entregar más rápido sin sacrificar calidad — y te lo trasladamos en el precio.",
  },
  {
    q: "¿Pueden subir mi app a Play Store y App Store?",
    a: "Sí. Nos encargamos de todo el proceso: generamos los assets necesarios (íconos, screenshots, feature graphics), configuramos las cuentas de developer si no las tenés, y manejamos el proceso de review hasta que la app esté publicada.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "El código es tuyo, vive en tu cuenta. La documentación es tuya. El sistema publicado es tuyo. Errores en los primeros 30 días se arreglan sin cargo. Si querés seguir mejorando el producto, ofrecemos mantenimiento mensual sin contrato anual.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Llamada inicial gratuita de 30 min → propuesta en 48hs con alcance definido y precio fijo → desarrollo con avances semanales visibles → entrega final con código, documentación y sistema funcionando. Sin presentaciones, sin reuniones innecesarias.",
  },
  {
    q: "¿Por qué precio fijo y no por hora?",
    a: "Porque alineamos incentivos. Si cobramos por hora, nos conviene tardar más. Con precio fijo, te confirmamos el número antes de arrancar y ambos ganamos cuando entregamos rápido. Pago: 50% al firmar, 50% al entregar.",
  },
  {
    q: "¿Trabajan con agencias?",
    a: "Sí. Trabajamos como equipo extendido de agencias que necesitan capacidad de desarrollo. Nos adaptamos a tus procesos, herramientas y clientes. White-label disponible.",
  },
  {
    q: "¿En qué timezone trabajan?",
    a: "UTC-3 (Argentina). Overlap razonable con US East y Europa. Trabajo async-first: updates diarios por texto, demo semanal por video.",
  },
] as const;
