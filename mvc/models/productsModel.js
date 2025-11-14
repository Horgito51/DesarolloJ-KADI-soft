const products = [
    {
        id: 1,
        tittle: "Camiseta FC Barcelona 2014/2015",
        descripcion: "Camiseta local Nike Qatar Airways, poliéster Dri-FIT",
        precio: 40,
        stock: 7,
        enStock: true,
        enlace: 'camisetaBarca.html',
        imagen: "img/P1.png",
        marca: "Nike",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["S", "M", "L", "XL"]
            },
            equipacion: {
                label: "Equipacion",
                valores: ["Local", "Visitante", "tercera"]
            }
        },
        detalles: [
            { label: "Tipo de Tejido", valor: "Poliéster Dri-FIT" },
            { label: "Origen", valor: "España/FC Barcelona" }
        ]
    },
    {
        id: 2,
        tittle: "Balón de Fútbol Trionda Pro",
        descripcion: "Réplica Mundial, cuero sintético PU de alta calidad con cámara de látex butílico",
        precio: 34.99,
        stock: 7,
        enStock: true,
        enlace: 'balon.html',
        imagen: "img/balon.png",
        marca: "Adidas style",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["3: 58-60cm", "4: 63-66cm", "5: 68-70cm"]
            }
        },
        detalles: [
            { label: "Tipo", valor: "Balón de fútbol térmico cosido" },
            { label: "Material", valor: "Exterior: Cuero sintético PU | Capa intermedia: 4 capas de espuma EVA | Cámara: Látex butílico" }
        ]
    },
    {
        id: 3,
        tittle: "Cuerda de Saltar",
        descripcion: "Mejora tu agilidad y resistencia con esta cuerda de alta velocidad",
        precio: 16.99,
        stock: 7,
        enStock: true,
        enlace: 'cuerdassaltar.html'
        ,
        imagen: "img/cuerdasaltar.png",
        marca: "FitGear",
        opciones: {
            largo: {
                label: "Largo",
                valores: ["2,8m", "1,5m", "1,95m"]
            }
        },
        detalles: [
            { label: "Material", valor: "Cable de acero recubierto con PVC" },
            { label: "Longitud", valor: "Ajustable hasta 3 metros" }
        ]
    },
    {
        id: 4,
        tittle: "Gorra Deportiva Performance Plus",
        descripcion: "Gorra tipo béisbol con visera curva, 90% poliéster técnico, 10% elastano, protección UV",
        precio: 14.99,
        stock: 7,
        enStock: true,
        imagen: "img/gorrita.png",
        marca: "ActiveWear Pro",
        enlace: 'gorra.html'
        ,
        opciones: {
            talla: {
                label: "Talla",
                valores: ["Única Ajustable (56-62 cm)"]
            }
        },
        detalles: [
            { label: "Género", valor: "Unisex" },
            { label: "Material", valor: "90% Poliéster técnico, 10% Elastano" },
            { label: "Tipo", valor: "Gorra tipo béisbol con visera curva" }
        ]
    },
    {
        id: 5,
        tittle: "Leggins Deportivos High Waist",
        descripcion: "Compresión y control, 75% Nylon de alta resistencia, 25% Spandex, gramaje 240 GSM",
        precio: 32.99,
        stock: 7,
        enStock: true,
        enlace: 'legginsdeportivos.html',
        imagen: "img/legginsdeportivos.png",
        marca: "FitFlow Activewear",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["XS", "S", "M", "L"]
            },
            color: {
                label: "Color",
                valores: ["Negro", "Azul", "Rosa", "Gris"]
            }
        },
        detalles: [
            { label: "Material", valor: "75% Nylon de alta resistencia, 25% Spandex (Elastano)" },
            { label: "Gramaje", valor: "240 GSM (grosor medio-alto)" },
            { label: "Altura", valor: "Tobilleras, cuarto (quarter), media caña, altas" }
        ]
    },
    {
        id: 6,
        tittle: "Liga Elástica de Resistencia",
        descripcion: "100% TPE termoplástico elastómero, libre de látex, antideslizante no tóxico",
        precio: 9.99,
        stock: 7,
        enStock: true,
        enlace: 'ligaselastivas.html',

        imagen: "img/ligaselasticas.png",
        marca: "FlexBand Pro",
        opciones: {
            resistencia: {
                label: "Nivel de Resistencia",
                valores: ["Ligera", "Media", "Fuerte", "Extra Fuerte"]
            }
        },
        detalles: [
            { label: "Material", valor: "100% TPE (Termoplástico Elastómero)" },
            { label: "Características", valor: "Libre de látex (hipoalergénico), Antideslizante, No tóxico" }
        ]
    },
    {
        id: 7,
        tittle: "Mancuernas Hexagonales con Neopreno",
        descripcion: "Núcleo de hierro fundido sólido con recubrimiento de neopreno, mango de acero cromado",
        precio: 45,
        stock: 7,
        enStock: true,
        enlace: 'mancuernas.html',

        imagen: "img/mancuernas.png",
        marca: "IronGrip Pro",
        opciones: {
            peso: {
                label: "Precio",
                valores: ["5 kg - $45", "10 kg - $75", "15 kg - $95", "20 kg - $120"]
            }
        },
        detalles: [
            { label: "Material", valor: "Núcleo: Hierro fundido sólido | Recubrimiento: Neopreno de alta calidad | Mango: Acero cromado texturizado" },
            { label: "Tipo", valor: "Mancuernas hexagonales fijas" },
            { label: "Género", valor: "Unisex" }
        ]
    },
    {
        id: 8,
        tittle: "Medias Deportivas Antideslizantes Pro",
        descripcion: "85% algodón, 12% poliéster, 3% elastano, para running, fútbol, basketball, gym",
        precio: 9.99,
        stock: 7,
        enStock: true,
        enlace: 'mediasdeportivas.html',

        imagen: "img/mediasDepor.png",
        marca: "ProSport",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["Tobilleras", "Cuarto (quarter)", "Media caña", "Altas"]
            },
            color: {
                label: "Color",
                valores: ["Blanco", "Negro", "Gris", "Azul"]
            }
        },
        detalles: [
            { label: "Material", valor: "85% algodón, 12% poliéster, 3% elastano" },
            { label: "Deporte", valor: "Running, fútbol, basketball, gym, trekking, etc." },
            { label: "Peso", valor: "Ligero" }
        ]
    },
    {
        id: 9,
        tittle: "Mochila Adventure Time",
        descripcion: "Diseño collage de personajes, poliéster/tel resistente, bolsillo frontal con cierre",
        precio: 27,
        stock: 7,
        enStock: true,
        enlace: 'Mochila.html',

        imagen: "img/mochi.png",
        marca: "Adventure Gear",
        detalles: [
            { label: "Material", valor: "Poliéster/tel resistente" },
            { label: "Características", valor: "Bolsillo frontal con cierre, Compartimento principal amplio" },
            { label: "Peso", valor: "Ligero" }
        ]
    },
    {
        id: 10,
        tittle: "Botella Térmica de Acero Inoxidable 500ml",
        descripcion: "Mantiene frío/calor 24hrs, acero inoxidable de alta calidad, origen Ecuador/Quito",
        precio: 15,
        stock: 7,
        enStock: true,
        enlace: 'termo.html',

        imagen: "img/termo.png",
        marca: "ThermoFlask",
        detalles: [
            { label: "Material", valor: "Acero inoxidable de alta calidad" },
            { label: "Capacidad", valor: "500ml" },
            { label: "Origen", valor: "Ecuador/Quito" }
        ]
    }
];



