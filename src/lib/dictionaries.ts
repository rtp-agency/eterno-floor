import type { Locale } from './i18n';

export interface Dictionary {
  nav: { home: string; catalog: string; features: string; contact: string; menu: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    audience: string[];
    ctaCatalog: string;
    ctaContact: string;
  };
  performance: { title: string; lead: string; points: string[] };
  features: { title: string; lead: string; items: string[] };
  partner: { title: string; lead: string; points: { title: string; text: string }[] };
  collections: {
    title: string;
    lead: string;
    decorsWord: string;
    view: string;
  };
  catalog: {
    title: string;
    lead: string;
    filterCollection: string;
    filterTone: string;
    all: string;
    tones: Record<'light' | 'grey' | 'beige' | 'brown' | 'dark', string>;
    decorsWord: string;
    packUnit: string;
    empty: string;
    specs: { thickness: string; size: string; wear: string; bevel: string; pack: string; article: string };
    request: string;
  };
  contact: {
    title: string;
    lead: string;
    whatsapp: string;
    emailLabel: string;
    phoneLabel: string;
    webLabel: string;
  };
  footer: { tagline: string; rights: string; madeFor: string };
}

const es: Dictionary = {
  nav: { home: 'Inicio', catalog: 'Catálogo', features: 'Ventajas', contact: 'Contacto', menu: 'Menú' },
  hero: {
    eyebrow: 'Suelos SPC premium',
    title: 'Para Profesionales',
    lead: 'Suelos SPC premium para promotoras, arquitectos, diseñadores de interiores y empresas constructoras.',
    audience: ['Promotoras', 'Arquitectos', 'Diseñadores de interiores', 'Constructoras'],
    ctaCatalog: 'Ver catálogo',
    ctaContact: 'Contactar',
  },
  performance: {
    title: 'Máximo Rendimiento',
    lead: 'Rendimiento en el que puede confiar, proyecto tras proyecto.',
    points: ['100% resistente al agua', 'Alta durabilidad', 'Instalación rápida', 'Compatible con suelo radiante'],
  },
  features: {
    title: 'Rendimiento que Inspira Confianza',
    lead: 'Diez razones por las que los profesionales eligen ETERNO design.',
    items: [
      'Apto para suelo radiante',
      'Máxima resistencia',
      'Fácil de limpiar',
      'Resistente a rayaduras',
      'Apto para mascotas',
      'Resistente a la decoloración',
      '100% impermeable',
      'Aislamiento acústico',
      'Sistema de instalación Click',
      'Ecológico, sin formaldehído',
    ],
  },
  partner: {
    title: 'Su Socio de Confianza',
    lead: 'Le acompañamos en cada fase del proyecto.',
    points: [
      { title: 'Precios profesionales', text: 'Condiciones competitivas para el canal profesional.' },
      { title: 'Entrega rápida', text: 'Stock disponible y logística ágil en toda España.' },
      { title: 'Asesoramiento experto', text: 'Apoyo técnico y de producto para cada proyecto.' },
    ],
  },
  collections: {
    title: 'Nuestras Colecciones',
    lead: 'Cinco colecciones SPC, 47 decorados de madera para cada espacio.',
    decorsWord: 'decorados',
    view: 'Ver colección',
  },
  catalog: {
    title: 'Catálogo',
    lead: 'Explore todos los decorados por colección y tono.',
    filterCollection: 'Colección',
    filterTone: 'Tono',
    all: 'Todos',
    tones: { light: 'Claro', grey: 'Gris', beige: 'Beige', brown: 'Marrón', dark: 'Oscuro' },
    decorsWord: 'decorados',
    packUnit: 'uds',
    empty: 'No hay decorados con estos filtros.',
    specs: { thickness: 'Grosor', size: 'Dimensiones', wear: 'Capa de uso', bevel: 'Bisel', pack: 'Embalaje', article: 'Ref.' },
    request: 'Solicitar muestra',
  },
  contact: {
    title: 'Hablemos de su Proyecto',
    lead: 'Precios profesionales, entrega rápida y asesoramiento experto. Escríbanos.',
    whatsapp: 'Escribir por WhatsApp',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    webLabel: 'Web',
  },
  footer: { tagline: 'Suelos SPC premium para profesionales.', rights: 'Todos los derechos reservados.', madeFor: 'Su socio de confianza en pavimentos.' },
};

const pt: Dictionary = {
  nav: { home: 'Início', catalog: 'Catálogo', features: 'Vantagens', contact: 'Contacto', menu: 'Menu' },
  hero: {
    eyebrow: 'Pavimentos SPC premium',
    title: 'Para Profissionais',
    lead: 'Pavimentos SPC premium para promotores imobiliários, arquitetos, designers de interiores e empresas de construção.',
    audience: ['Promotores', 'Arquitetos', 'Designers de interiores', 'Construtoras'],
    ctaCatalog: 'Ver catálogo',
    ctaContact: 'Contactar',
  },
  performance: {
    title: 'Máximo Desempenho',
    lead: 'Desempenho de confiança, projeto após projeto.',
    points: ['100% resistente à água', 'Alta durabilidade', 'Instalação rápida', 'Compatível com piso radiante'],
  },
  features: {
    title: 'Desempenho que Inspira Confiança',
    lead: 'Dez razões pelas quais os profissionais escolhem a ETERNO design.',
    items: [
      'Adequado para piso radiante',
      'Máxima resistência',
      'Fácil de limpar',
      'Resistente a riscos',
      'Pet friendly',
      'Resistente ao desbotamento',
      '100% impermeável',
      'Isolamento acústico',
      'Sistema Click',
      'Ecológico, sem formaldeído',
    ],
  },
  partner: {
    title: 'O Seu Parceiro de Confiança',
    lead: 'Ao seu lado em cada fase do projeto.',
    points: [
      { title: 'Preços para profissionais', text: 'Condições competitivas para o canal profissional.' },
      { title: 'Entrega rápida', text: 'Stock disponível e logística ágil.' },
      { title: 'Apoio especializado', text: 'Apoio técnico e de produto para cada projeto.' },
    ],
  },
  collections: {
    title: 'As Nossas Coleções',
    lead: 'Cinco coleções SPC, 47 decorados de madeira para cada espaço.',
    decorsWord: 'decorados',
    view: 'Ver coleção',
  },
  catalog: {
    title: 'Catálogo',
    lead: 'Explore todos os decorados por coleção e tom.',
    filterCollection: 'Coleção',
    filterTone: 'Tom',
    all: 'Todos',
    tones: { light: 'Claro', grey: 'Cinza', beige: 'Bege', brown: 'Castanho', dark: 'Escuro' },
    decorsWord: 'decorados',
    packUnit: 'un',
    empty: 'Não há decorados com estes filtros.',
    specs: { thickness: 'Espessura', size: 'Dimensões', wear: 'Camada de uso', bevel: 'Bisel', pack: 'Embalagem', article: 'Ref.' },
    request: 'Pedir amostra',
  },
  contact: {
    title: 'Vamos Falar do seu Projeto',
    lead: 'Preços para profissionais, entrega rápida e apoio especializado. Contacte-nos.',
    whatsapp: 'Falar por WhatsApp',
    emailLabel: 'Email',
    phoneLabel: 'Telefone',
    webLabel: 'Web',
  },
  footer: { tagline: 'Pavimentos SPC premium para profissionais.', rights: 'Todos os direitos reservados.', madeFor: 'O seu parceiro de confiança em pavimentos.' },
};

const ru: Dictionary = {
  nav: { home: 'Главная', catalog: 'Каталог', features: 'Преимущества', contact: 'Контакты', menu: 'Меню' },
  hero: {
    eyebrow: 'Премиальные SPC-полы',
    title: 'Для профессионалов',
    lead: 'Премиальные SPC-полы для застройщиков, архитекторов, дизайнеров интерьеров и строительных компаний.',
    audience: ['Застройщики', 'Архитекторы', 'Дизайнеры интерьеров', 'Строительные компании'],
    ctaCatalog: 'Смотреть каталог',
    ctaContact: 'Связаться',
  },
  performance: {
    title: 'Максимальная надёжность',
    lead: 'Надёжность, на которую можно положиться в любом проекте.',
    points: ['100% влагостойкость', 'Высокая износостойкость', 'Быстрый монтаж', 'Совместимость с тёплым полом'],
  },
  features: {
    title: 'Надёжность, которой доверяют',
    lead: 'Десять причин, почему профессионалы выбирают ETERNO design.',
    items: [
      'Подходит для тёплых полов',
      'Максимальная прочность',
      'Лёгкий уход',
      'Устойчив к царапинам',
      'Подходит для домашних животных',
      'Устойчив к выгоранию',
      '100% водонепроницаемый',
      'Акустическая изоляция',
      'Замковая система Click',
      'Экологичный, без формальдегида',
    ],
  },
  partner: {
    title: 'Надёжный партнёр',
    lead: 'Рядом с вами на каждом этапе проекта.',
    points: [
      { title: 'Профессиональные цены', text: 'Выгодные условия для профессионального сегмента.' },
      { title: 'Быстрая доставка', text: 'Товар в наличии и оперативная логистика.' },
      { title: 'Экспертная поддержка', text: 'Техническая и продуктовая поддержка каждого проекта.' },
    ],
  },
  collections: {
    title: 'Наши коллекции',
    lead: 'Пять коллекций SPC, 47 декоров дерева для любого пространства.',
    decorsWord: 'декоров',
    view: 'Смотреть коллекцию',
  },
  catalog: {
    title: 'Каталог',
    lead: 'Все декоры по коллекциям и оттенкам.',
    filterCollection: 'Коллекция',
    filterTone: 'Оттенок',
    all: 'Все',
    tones: { light: 'Светлые', grey: 'Серые', beige: 'Бежевые', brown: 'Коричневые', dark: 'Тёмные' },
    decorsWord: 'декоров',
    packUnit: 'шт',
    empty: 'Нет декоров по выбранным фильтрам.',
    specs: { thickness: 'Толщина', size: 'Размер', wear: 'Защитный слой', bevel: 'Фаска', pack: 'Упаковка', article: 'Артикул' },
    request: 'Запросить образец',
  },
  contact: {
    title: 'Обсудим ваш проект',
    lead: 'Профессиональные цены, быстрая доставка и экспертная поддержка. Напишите нам.',
    whatsapp: 'Написать в WhatsApp',
    emailLabel: 'Почта',
    phoneLabel: 'Телефон',
    webLabel: 'Сайт',
  },
  footer: { tagline: 'Премиальные SPC-полы для профессионалов.', rights: 'Все права защищены.', madeFor: 'Ваш надёжный партнёр по напольным покрытиям.' },
};

const en: Dictionary = {
  nav: { home: 'Home', catalog: 'Catalogue', features: 'Features', contact: 'Contact', menu: 'Menu' },
  hero: {
    eyebrow: 'Premium SPC flooring',
    title: 'Built for Professionals',
    lead: 'Premium SPC flooring for developers, architects, interior designers and construction companies.',
    audience: ['Developers', 'Architects', 'Interior designers', 'Construction companies'],
    ctaCatalog: 'View catalogue',
    ctaContact: 'Get in touch',
  },
  performance: {
    title: 'Performance You Can Trust',
    lead: 'Performance you can rely on, project after project.',
    points: ['100% waterproof', 'High durability', 'Fast installation', 'Underfloor heating compatible'],
  },
  features: {
    title: 'Performance You Can Trust',
    lead: 'Ten reasons professionals choose ETERNO design.',
    items: [
      'Suitable for underfloor heating',
      'Maximum strength',
      'Easy to clean',
      'Scratch resistant',
      'Pet friendly',
      'Fade resistant',
      '100% waterproof',
      'Sound insulation',
      'Click installation system',
      'Eco friendly, formaldehyde free',
    ],
  },
  partner: {
    title: 'Your Reliable Partner',
    lead: 'By your side at every stage of the project.',
    points: [
      { title: 'Competitive trade pricing', text: 'Competitive terms for the professional channel.' },
      { title: 'Fast delivery', text: 'Stock availability and agile logistics.' },
      { title: 'Expert support', text: 'Technical and product support for every project.' },
    ],
  },
  collections: {
    title: 'Our Collections',
    lead: 'Five SPC collections, 47 wood decors for every space.',
    decorsWord: 'decors',
    view: 'View collection',
  },
  catalog: {
    title: 'Catalogue',
    lead: 'Browse every decor by collection and tone.',
    filterCollection: 'Collection',
    filterTone: 'Tone',
    all: 'All',
    tones: { light: 'Light', grey: 'Grey', beige: 'Beige', brown: 'Brown', dark: 'Dark' },
    decorsWord: 'decors',
    packUnit: 'pcs',
    empty: 'No decors match these filters.',
    specs: { thickness: 'Thickness', size: 'Dimensions', wear: 'Wear layer', bevel: 'Bevel', pack: 'Pack', article: 'Ref.' },
    request: 'Request a sample',
  },
  contact: {
    title: "Let's Talk About Your Project",
    lead: 'Trade pricing, fast delivery and expert support. Get in touch.',
    whatsapp: 'Message on WhatsApp',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    webLabel: 'Web',
  },
  footer: { tagline: 'Premium SPC flooring for professionals.', rights: 'All rights reserved.', madeFor: 'Your reliable flooring partner.' },
};

const dictionaries: Record<Locale, Dictionary> = { es, pt, ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? es;
}
