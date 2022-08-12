const products = [
  {
    id: 1,
    title: "El Temor del Hombre Sabio",
    price: 2300,
    image: "assets/libro_el_temor_del_hombre_sabio.jpg",
    author: "Patrick Rothfuss",
    description:
      "Es la continuación de El Nombre del Viento y pertenece a la serie Crónica del Asesino de Reyes.",
    editor: "Debolsillo",
    category: "Novela",
    stock: 3,
  },
  {
    id: 2,
    title: "El Mito de la Libertad",
    price: 4500,
    image: "assets/libro_el_mito_de_la_libertad.webp",
    author: "Chogyam Trungpa",
    description:
      "Suele pensarse que nuestros actos arrancan de la libertad, pero a menudo sólo proceden de la ignoranica, de hábitos anquilosados, de emociones negativas. ¿Se trata entonces de la libertad o sólo de un mito? El presente libro explora de manera magistral el significado y el alcance de la libertad en el marco de la psicología budista y de la práctica meditativa tibetana.",
      editor: "Continente",
      category: "Budismo",
    stock: 8,
  },

  {
    id: 3,
    title: "Libro de Oro",
    price: 3200,
    image: "assets/libro_de_oro.webp",
    author: "Saint Germain",
    description:
      "Es uno de los textos claves en el estudio de la Metafísica, la ciencia que nos enseña que la mente es creadora y, por lo tanto, la responsable de la realidad que cada persona ha de vivir. ¡Así como son tus pensamientos, asimismo será tu vida!",
      editor: "Valkiria",
      category: "Metafisica",
    stock: 30,
  },
  {
    id: 4,
    title: "La Conciencia sin Fronteras",
    price: 4000,
    image: "assets/libro_la_conciencia_sin_fronteras.webp",
    author: "Ken Wilber",
    description:
      "Explica e indaga la más persistente alienación del ser humano, la que está en la base de toda su infelicidad y angustia: la fractura de nuestra identidad en diferentes partes separadas. Ejemplos de esta artificial división en compartimentos: razón e instinto, vida y muerte, organismo y medio.",
      editor: "Kairós",
      category: "Filosofia",
    stock: 5,
  },
  {
    id: 5,
    title: "Manual de Mindfulness",
    price: 1800,
    image: "assets/libro_manual_de_mindfulness.webp",
    author: "Elisha Goldstein",
    description:
      "El ajetreo de la vida moderna puede hacer que nos sintamos ansiosos, irritables, dispersos y desbordados. ¿Cómo podemos impedir que el estrés nos robe lo mejor de nosotros mismos? ¿Cómo evitar acabar completamente agotados? El manual del mindfulness contiene prácticas diarias sencillas que utilizan el MBSR (reducción del estrés basado en el mindfulness).",
      editor: "Kairós",
      category: "Autoayuda",
    stock: 1,
  },
  {
    id: 6,
    title: "Chamanismo Cuantico",
    price: 2800,
    image: "assets/libro_chamanismo_cuantico.webp",
    author: "Enrique Gonzalez",
    description:
      "Nuestra época se caracteriza por ser el momento del encuentro entre el misticismo y la ciencia. La esperada unión entre conocimiento científico y espiritualidad ya está aquí, y está para cambiar la manera en que definimos el mundo. El presente texto fue escrito con la intención de establecer un enlace conceptual entre el chamanismo y la teoría cuántica, ya que ambos caminos son convergentes.",
      editor: "Dilema",
      category: "Filosofia Originaria",
    stock: 0,
  },
  {
    id: 7,
    title: "Decide de Nuevo",
    price: 3300,
    image: "assets/libro_decide_de_nuevo.webp",
    author: "Marta Salvat",
    description:
      "La forma clara y directa con la que Marta Salvat imparte Un curso de milagros me permitió hacer uno de los descubrimientos más grandes de mi vida: No tengo que volver a la Fuente porque, en realidad, nunca me fui. Tantos años buscando el camino para volver a Casa y resulta que siempre he estado en ella.",
    editor: "Grupal",
    category: "Autoayuda",
    stock: 3,
  },
  {
    id: 8,
    title: "Espabila de una Puta Vez",
    price: 2500,
    image: "assets/libro_espabila_de_una_puta_vez.jpg",
    author: "Jose Montañez",
    description:
      "habla sin pelos en la lengua y, por eso, está cambiando la forma de ver la vida de muchas personas en todo el mundo. Leerás cosas que, normalmente, evitas escuchar, pero que tarde o temprano, tendrás que cambiar si quieres que tus sueños se hagan realidad de una vez por todas.",
    editor: "Independiente",
    category: "Filosofia",
    stock: 22,
  },
];

export default products;
