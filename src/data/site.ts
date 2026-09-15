/**
 * Fuente única de verdad del sitio.
 *
 * TODO dato de este archivo está verificado contra el sitio en producción
 * (testinglab.panam.com.uy) al 26/08/2026. Si un dato no se puede verificar,
 * NO va acá: va comentado como pendiente de confirmar con la empresa.
 *
 * Regla: ninguna página inventa datos. Todo se importa desde este archivo.
 */

export const company = {
  name: "PoolDior",
  since: 2014,
  claim: "Disfrutá de tu piscina todo el año",
  /** Verificado: texto literal de la sección "Sobre Nosotros" del sitio real. */
  about:
    "Somos la única empresa integral en fabricación de piscinas en Uruguay, colocación y mantenimiento desde el año 2014. Nos dedicamos a la fabricación de piscinas en fibra de vidrio, colocación, mantenimiento y servicio técnico en todo el país. Evaluamos el terreno, sugerimos y te asesoramos para que logres tener el espacio de placer deseado y disfrutarlo todo el año.",
  coverage: "Todo el país",
} as const;

export const contact = {
  phone: "+598 94 846 733",
  phoneHref: "tel:+59894846733",
  whatsapp: "+598 96 797 242",
  hours: [
    { days: "Lunes a viernes", time: "09:00 — 17:00" },
    { days: "Sábados", time: "08:00 — 13:00" },
  ],
  // PENDIENTE DE CONFIRMAR con la empresa — no publicados en el sitio real:
  // email, dirección exacta del local, Instagram / redes sociales.
} as const;

/** Verificado: 10 años estructura, 3 años equipamiento. NO son 15. */
export const warranty = {
  structureYears: 10,
  equipmentYears: 3,
} as const;

export const gelCoatColors = [
  { label: "Celeste", hex: "#7FC4D8" },
  { label: "Arena", hex: "#D9C3A0" },
  { label: "Blanca", hex: "#F2F2ED" },
] as const;

export type PoolShape = "rectangular" | "ovalada";

export interface PoolModel {
  /** Largo del espejo de agua, en metros. */
  length: number;
  /** Ancho del espejo de agua, en metros. */
  width: number;
  /** Profundidad, en metros. */
  depth: number;
  shape: PoolShape;
}

/**
 * Catálogo real: 7 modelos. Las medidas son de ESPEJO DE AGUA.
 * No existen los modelos "Riñón" ni "Desbordante".
 */
export const models: PoolModel[] = [
  { shape: "rectangular", length: 5.3, width: 2.5, depth: 1.4 },
  { shape: "rectangular", length: 6, width: 3, depth: 1.5 },
  { shape: "rectangular", length: 7, width: 3, depth: 1.4 },
  { shape: "rectangular", length: 8, width: 4, depth: 1.5 },
  { shape: "ovalada", length: 4.6, width: 2.1, depth: 1.4 },
  { shape: "ovalada", length: 5.7, width: 2.7, depth: 1.4 },
  { shape: "ovalada", length: 6.7, width: 3.1, depth: 1.4 },
];

/** Superficie del espejo de agua en m², derivada de las medidas. */
export function surfaceArea(model: PoolModel): number {
  return model.shape === "ovalada"
    ? (Math.PI * model.length * model.width) / 4
    : model.length * model.width;
}

/** Formatea un número con coma decimal, como se escribe en Uruguay. */
export function num(value: number, decimals = 1): string {
  return value.toFixed(decimals).replace(".", ",").replace(/,0$/, "");
}

export const modelsByShape = {
  rectangular: models.filter((m) => m.shape === "rectangular"),
  ovalada: models.filter((m) => m.shape === "ovalada"),
};

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Ruta al PNG del sitio real, o null si el ícono es SVG inline. */
  iconSrc: string | null;
}

/**
 * En el sitio real estas descripciones son Lorem ipsum.
 * Las de acá son PROPUESTA, redactadas a partir de lo que la propia empresa
 * afirma ("evaluamos el terreno", "fibra de vidrio", "todo el país",
 * "servicio técnico") y de lo que mencionan las reseñas de Google.
 * REVISAR CON LA EMPRESA antes de publicar.
 */
export const services: Service[] = [
  {
    id: "asesoramiento",
    title: "Asesoramiento",
    description:
      "Vamos a tu terreno y lo evaluamos antes de que firmes nada: qué modelo entra, dónde conviene ubicarlo y cómo se resuelve el acceso de la máquina.",
    iconSrc: null,
  },
  {
    id: "fabricacion",
    title: "Fabricación",
    description:
      "Cada piscina se fabrica en fibra de vidrio, en los siete modelos de catálogo y en los tres colores de gel-coat: celeste, arena o blanca.",
    iconSrc: null,
  },
  {
    id: "colocacion",
    title: "Colocación",
    description:
      "Excavación, nivelación, colocación de la estructura y conexión del equipamiento. El mismo equipo que la fabricó es el que la instala.",
    iconSrc: "/img/ic-colocacion.png",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    description:
      "Limpieza, control del agua y puesta a punto de temporada, con plan semanal. Vos solo te encargás de disfrutarla.",
    iconSrc: "/img/ic-mantenimiento.png",
  },
  {
    id: "servicio",
    title: "Servicio técnico",
    description:
      "Servicio propio sobre estructura y equipamiento. Si se traba un motor mandamos un técnico a repararlo antes de venderte uno nuevo.",
    iconSrc: "/img/ic-servicio.png",
  },
];

/**
 * Equipamiento y trabajos mencionados por clientes reales en las reseñas de
 * Google. No están listados en el sitio actual.
 */
export const equipment = [
  "Fibra de vidrio",
  "Clorador de sal",
  "Climatización",
  "Mantenimiento semanal",
  "Insumos",
  "Deck y piso perimetral",
] as const;

export interface Review {
  name: string;
  initials: string;
  date: string;
  isoDate: string;
  rating: number;
  quote: string;
}

/**
 * Reseñas REALES de Google, publicadas en el sitio actual mediante el widget
 * Trustindex. Transcritas textualmente, con corrección mínima de puntuación
 * y ortografía. No inventar, no agregar, no editar el sentido.
 */
export const reviews: Review[] = [
  {
    name: "Michael D.",
    initials: "MD",
    date: "8 mar 2025",
    isoDate: "2025-03-08",
    rating: 5,
    quote:
      "Quedamos muy conformes tanto con la gestión empresarial, como con el personal de obra: excelente equipo de trabajo, responsable, puntual, organizado y limpio. Ahora solo nos queda disfrutar de nuestro sueño hecho realidad.",
  },
  {
    name: "Gabriel D.",
    initials: "GD",
    date: "7 mar 2025",
    isoDate: "2025-03-07",
    rating: 5,
    quote:
      "Quedamos muy satisfechos y conformes con el trabajo realizado. El asesoramiento tanto antes como post venta fue muy bueno. Cumplieron con los plazos prometidos: en una semana estábamos disfrutando de la piscina.",
  },
  {
    name: "Mercedes C.",
    initials: "MC",
    date: "1 mar 2025",
    isoDate: "2025-03-01",
    rating: 5,
    quote:
      "Fue una de las mejores decisiones que tomamos para la casa. El asesoramiento, la instalación y luego el servicio post venta es destacable. También lo es la atención cálida y siempre estar atentos para solucionar cualquier cosa. Recomendables 100%.",
  },
  {
    name: "Andrea S.",
    initials: "AS",
    date: "19 feb 2025",
    isoDate: "2025-02-19",
    rating: 5,
    quote:
      "Muy buen servicio post venta. Se había trabado el motor de la piscina y muchos nos decían que lo teníamos que cambiar. Ellos nos mandaron un técnico y lo arregló. Nos ahorramos U$S 300. ¡Muy buen servicio!",
  },
  {
    name: "Pablo P.",
    initials: "PP",
    date: "10 feb 2025",
    isoDate: "2025-02-10",
    rating: 5,
    quote:
      "Recomendables 100%. Todo muy bien: antes con el presupuesto, durante con la colocación y ahora con el mantenimiento — pasan todas las semanas y nosotros solo nos encargamos de disfrutarla. En breve los contrato para el deck.",
  },
  {
    name: "Santa M.",
    initials: "SM",
    date: "17 may 2025",
    isoDate: "2025-05-17",
    rating: 5,
    quote:
      "Trabajo excelente. Gastón, súper cordial y atento. Colocamos clorador de sal y climatizador, y también contratamos el servicio de mantenimiento, con el cual van cumpliendo lo acordado.",
  },
  {
    name: "Ramiro S.",
    initials: "RS",
    date: "16 may 2025",
    isoDate: "2025-05-16",
    rating: 5,
    quote:
      "Excelente calidad y precio. Dejaron todo súper prolijo y el dueño está siempre a disposición para lo que se necesite. El equipo de trabajo, también excelente. Lo recomiendo.",
  },
  {
    name: "Pablo A.",
    initials: "PA",
    date: "3 feb 2025",
    isoDate: "2025-02-03",
    rating: 5,
    quote: "¡Espectacular! Unos genios.",
  },
];

export const reviewScore = {
  average: 5,
  /** Formateado para mostrar: num() colapsa el ",0" final y acá lo queremos. */
  averageLabel: "5,0",
  count: reviews.length,
  source: "Google",
} as const;

/** Número de WhatsApp en formato E.164 sin símbolos, para armar enlaces wa.me. */
export const whatsappNumber = "59896797242";

/**
 * WhatsApp es el ÚNICO canal de captación del sitio: la empresa no lee el mail,
 * así que no hay formularios. Cada CTA abre WhatsApp con el mensaje ya escrito
 * según el contexto de la página, para que el visitante solo tenga que apretar
 * enviar y nosotros sepamos de dónde vino la consulta.
 *
 * Los mensajes viven acá y en ningún otro lado: si se escriben inline en cada
 * página terminan desincronizados.
 */
export function waLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const greeting = `Hola ${company.name}`;

export const waMessages = {
  /** Consulta general: header, footer y página de contacto. */
  general: `${greeting}, quiero hacerles una consulta.`,
  /** Intención de compra sin modelo definido todavía. */
  cotizacion: `${greeting}, quiero cotizar una piscina. ¿Me pasan información?`,
  /** Página de servicios y CTA de servicios. */
  servicios: `${greeting}, quiero consultar sobre mantenimiento o instalación de piscina.`,
  /** Visita al terreno para evaluar qué modelo entra. */
  visita: `${greeting}, quiero coordinar una visita al terreno para saber qué piscina me entra.`,
  /** Catálogo de modelos sin uno elegido. */
  modelos: `${greeting}, quiero ayuda para elegir el modelo de piscina que me conviene.`,
} as const;

/**
 * Mensaje para un servicio puntual del catálogo.
 * Sin "el servicio de" delante: con "Servicio técnico" daría "el servicio de
 * servicio técnico".
 */
export function waServiceMessage(service: Service): string {
  return `${greeting}, quiero consultar por ${service.title.toLowerCase()}.`;
}

/** Mensaje para un modelo puntual: "modelo ovalado 5,7 × 2,7 m". */
export function waModelMessage(model: PoolModel): string {
  const shape = model.shape === "ovalada" ? "ovalado" : "rectangular";
  return `${greeting}, quiero consultar por el modelo ${shape} de ${num(model.length)} × ${num(model.width)} m.`;
}

export const navItems = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Modelos", href: "/modelos" },
  { label: "Contacto", href: "/contacto" },
] as const;
