const products = [
    {
      id: 1,
      title: "Whey Protein Gold Standard",
      description:
        "Proteína de soro de leite para recuperação muscular de alta qualidade.",
      price: "150.00",
      category: "proteins",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 2,
      title: "Proteína de Soja Isolada",
      description:
        "Isolado de proteína de soja para uma dieta à base de plantas.",
      price: "130.00",
      category: "proteins",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 3,
      title: "Proteína Vegana de Ervilha",
      description: "Proteína vegana de ervilha para construção muscular.",
      price: "140.00",
      category: "proteins",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 4,
      title: "Proteína de Arroz Integral",
      description: "Proteína de arroz integral para uma opção sem glúten.",
      price: "120.00",
      category: "proteins",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 5,
      title: "Proteína de Ovo",
      description: "Proteína de ovo de alta qualidade para construção muscular.",
      price: "160.00",
      category: "proteins",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 6,
      title: "Lipo 6 Black",
      description: "Queimador de gordura eficaz com ingredientes naturais.",
      price: "120.00",
      category: "thermogenic",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 7,
      title: "Therma Pro Hardcore",
      description: "Acelere o seu metabolismo e perca peso mais rápido.",
      price: "110.00",
      category: "thermogenic",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 8,
      title: "Termogênico de Cafeína",
      description:
        "Suplemento termogênico com cafeína para energia e queima de gordura.",
      price: "100.00",
      category: "thermogenic",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 9,
      title: "Queimador de Gordura L-Carnitina",
      description: "Suplemento de L-Carnitina para aumentar a queima de gordura.",
      price: "90.00",
      category: "thermogenic",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 10,
      title: "Suplemento de CLA",
      description:
        "Suplemento de CLA para auxiliar na perda de peso e no aumento da massa magra.",
      price: "70.00",
      category: "supplements",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 11,
      title: "Luvas para Levantamento de Peso",
      description: "Luvas de levantamento de peso duráveis.",
      price: "60.00",
      category: "accessories",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 12,
      title: "Cinto de Musculação",
      description:
        "Cinto de musculação para suporte lombar durante os exercícios.",
      price: "40.00",
      category: "accessories",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 13,
      title: "Garrafa de Água para Academia",
      description:
        "Garrafa de água durável e à prova de vazamentos para acompanhar seus treinos.",
      price: "20.00",
      category: "accessories",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 14,
      title: "Pulseira Fitness Rastreadora",
      description:
        "Pulseira fitness com monitor de atividades, batimentos cardíacos e notificações.",
      price: "80.00",
      category: "accessories",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 15,
      title: "Mochila Esportiva",
      description:
        "Mochila resistente e espaçosa para levar seus equipamentos de treino.",
      price: "100.00",
      category: "accessories",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 16,
      title: "Camisa para Treino Nike",
      description: "Camisa de treino confortável e respirável.",
      price: "80.00",
      category: "clothes",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 17,
      title: "Calças de Treino Adidas",
      description: "Calças de treino flexíveis e duráveis.",
      price: "90.00",
      category: "clothes",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 18,
      title: "Top Esportivo Under Armour",
      description:
        "Top esportivo com suporte e conforto durante os exercícios de alto impacto.",
      price: "70.00",
      category: "clothes",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 19,
      title: "Shorts de Treino Reebok",
      description: "Shorts de treino com tecido respirável e cós elástico.",
      price: "50.00",
      category: "clothes",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 20,
      title: "Tênis Esportivo Asics",
      description:
        "Tênis esportivo com amortecimento e aderência para atividades físicas.",
      price: "120.00",
      category: "clothes",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 21,
      title: "Multivitamínico para Atletas",
      description:
        "Suplemento multivitamínico especialmente formulado para atletas e praticantes de exercícios intensos.",
      price: "50.00",
      category: "supplements",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 22,
      title: "Ômega-3",
      description:
        "Suplemento de ômega-3 com benefícios para a saúde cardiovascular e cognitiva.",
      price: "30.00",
      category: "supplements",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 23,
      title: "BCAA em Pó",
      description:
        "Suplemento de BCAA em pó para recuperação muscular e aumento de desempenho.",
      price: "40.00",
      category: "supplements",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 24,
      title: "Creatina Monohidratada",
      description:
        "Suplemento de creatina para aumento de força e desempenho nos treinos.",
      price: "25.00",
      category: "supplements",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 25,
      title: "Glutamina",
      description:
        "Suplemento de glutamina para recuperação muscular e suporte ao sistema imunológico.",
      price: "35.00",
      category: "supplements",
      image: "/assets/supplementsPhoto5.png",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 26,
      title: "GlutaminaD",
      description:
        "Suplemento de glutamina para recuperação muscular e suporte ao sistema imunológico.",
      price: "35.00",
      category: "supplements",
      image: "/assets/supplementsPhoto5.png",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 27,
      title: "GlutaminaW",
      description:
        "Suplemento de glutamina para recuperação muscular e suporte ao sistema imunológico.",
      price: "35.00",
      category: "supplements",
      image: "/assets/supplementsPhoto5.png",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
    {
      id: 28,
      title: "GlutaminaQ",
      description:
        "Suplemento de glutamina para recuperação muscular e suporte ao sistema imunológico.",
      price: "35.00",
      category: "supplements",
      image: "/assets/supplementsPhoto5.png",
      listImages: [
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha.jpg",
        "/assets/quilha2.webp",
      ],
    },
  ];
  
  export default products;