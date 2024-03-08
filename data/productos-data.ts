import { ProductsData } from "../interfaces/productos";
import { Category } from "./category-data";

export const products: ProductsData[] = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg",
    name: "Bidon de 20 Lts de Agua",
    category: Category.BEBIDA,
    price: 135,
    quantity: 20,
    description:
      "PranaMar el sabor del mar, se presenta como una opción natural y equilibrada para rehidratar el cuerpo. Rica en minerales esenciales, como sodio, potasio y magnesio, ayuda a restablecer los electrolitos perdidos durante la actividad física intensa o la deshidratación. Su composición se asemeja a la del plasma sanguíneo, lo que facilita una absorción rápida y eficiente de los nutrientes, contribuyendo así a mantener un equilibrio hídrico adecuado y a mejorar el rendimiento físico. Es importante destacar que debe llevarse a cabo de manera gradual, en caso de dudas puede consultar con un especialista.",
  },

  {
    id: 3,
    image: "https://http2.mlstatic.com/D_NQ_NP_969724-MLA74245733727_012024-O.webp",
    name: "Detergente Finish para baños 30 Capsulas",
    category: Category.PRODUCTOS_LIMPIEZA,
    price: 98,
    quantity: 20,
    description:
      "Descubre la solución definitiva para mantener tu hogar impecable con nuestro detergente para limpieza. Formulado con poderosos agentes desengrasantes y activos, nuestro producto penetra profundamente para eliminar la suciedad más difícil en todo tipo de superficies. Desde la cocina hasta el baño, este detergente garantiza una limpieza eficaz y duradera, dejando un fresco aroma a limpio. Su fórmula concentrada asegura un rendimiento óptimo con cada uso, mientras que su acción biodegradable respeta el medio ambiente. Simplifica tus tareas domésticas y confía en nuestro detergente para mantener tu hogar reluciente y libre de impurezas.",
  },
  {
    id: 4,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_998128-MLA74111690720_012024-F.webp",
    name: "Fideos Tirabuzon Matarazzo X500 Gr",
    category: Category.ALIMENTOS_SECOS,
    price: 112,
    quantity: 0,
    description:
      "Los fideos Matarazzo de 500 gramos son la elección perfecta para quienes buscan una pasta de calidad superior. Con una textura al dente y un sabor excepcional, esta variedad de fideos es versátil y se adapta a una amplia gama de recetas. Ya sea acompañados de una salsa tradicional de tomate y albahaca o en platos más creativos con mariscos o verduras, los fideos Matarazzo garantizan una experiencia culinaria satisfactoria. Elaborados con ingredientes de alta calidad y siguiendo procesos de fabricación cuidadosamente controlados, estos fideos son un elemento básico en cualquier despensa y una delicia para los amantes de la pasta.",
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_742819-MLU74408303093_022024-O.webp",
    name: "Arroz Diana Con Fideos 460G",
    category: Category.ALIMENTOS_SECOS,
    price: 112,
    quantity: 0,
    description:
      "Deléitate con la exquisita textura y sabor de nuestros fideos de arroz, una opción nutritiva y versátil para tus platos favoritos. Elaborados con los mejores granos de arroz y siguiendo técnicas tradicionales, nuestros fideos garantizan una experiencia culinaria auténtica y satisfactoria. Su suave consistencia y rápida cocción los convierten en la elección perfecta para sopas, salteados o platos fríos. Además, son naturalmente libres de gluten, ideales para aquellos con dietas especiales. Descubre la calidad y el sabor incomparables de nuestros fideos de arroz, y transforma tus comidas en auténticos festines de la cocina asiática.",
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_670957-MLA70460510773_072023-V.jpg",
    name: "Arroz Castellano Premium 500G",
    category: Category.ALIMENTOS_SECOS,
    price: 135,
    quantity: 20,
    description:
      "Embárcate en un viaje de sabores y tradición con nuestro arroz premium, cuidadosamente seleccionado de los campos más fértiles. Cultivado con esmero y cosechado en su punto óptimo de maduración, cada grano de nuestro arroz es un tesoro de calidad y sabor incomparables. Su textura perfectamente esponjosa y su sabor delicado hacen de cada bocado una experiencia gastronómica única. Ya sea como acompañamiento o ingrediente principal, nuestro arroz se adapta a una amplia variedad de recetas, desde platos exóticos hasta las preparaciones más reconfortantes del hogar. Descubre la excelencia culinaria con nuestro arroz premium y eleva tus comidas a otro nivel.",
  },
  {
    id: 7,
    image: "https://http2.mlstatic.com/D_NQ_NP_686178-MLU74332003605_012024-O.webp",
    name: "Atun En Lata Siete Lagos",
    category: Category.ALIMENTOS_CONSERVADOS,
    price: 85,
    quantity: 20,
    description:
      "Sumérgete en una experiencia culinaria extraordinaria con nuestro atún en lata de calidad premium. Capturado en las aguas más cristalinas y envasado con cuidado para preservar su frescura y sabor inigualables, cada lata de atún es una delicia gourmet lista para disfrutar. Rico en proteínas y ácidos grasos omega-3, nuestro atún es una opción nutritiva y versátil para tus comidas. Desde ensaladas frescas hasta exquisitos platos cocinados, nuestro atún en lata añade un toque de exquisitez a cualquier receta. Descubre la diferencia con nuestro atún en lata premium y deleita tu paladar con la calidad y el sabor que mereces.",
  },
  {
    id: 8,
    image: "https://http2.mlstatic.com/D_NQ_NP_628033-MLU72636991469_112023-O.webp",
    name: "Caballa en Conserva Publish",
    category: Category.ALIMENTOS_CONSERVADOS,
    price: 135,
    quantity: 20,
    description:
      "Sumérgete en el delicioso mundo del mar con nuestra caballa en conserva, capturada en aguas cristalinas y preservada con el máximo cuidado para garantizar su frescura y sabor excepcionales. Cada filete de caballa se selecciona con precisión y se envasa en aceite de la más alta calidad, resaltando su jugosidad y textura tierna. Rico en ácidos grasos omega-3 y proteínas, este manjar marino es una opción nutritiva y deliciosa para tus comidas. Ya sea en ensaladas, sándwiches o como acompañamiento, nuestra caballa en conserva añade un toque gourmet a tus platos, transportándote a la costa con cada bocado.",
  },
  {
    id: 9,
    image: "https://http2.mlstatic.com/D_NQ_NP_744966-MLA52629292897_112022-O.webp",
    name: "Jabones en barra puro Vegetal Nuez Pecan y cacao Tododia",
    category: Category.PRODUCTOS_HIGIENE,
    price: 85,
    quantity: 20,
    description:
      "Experimenta una limpieza suave y eficaz con nuestro jabón de manos, diseñado para cuidar y proteger tu piel con cada lavado. Enriquecido con ingredientes hidratantes y suavizantes, este jabón deja tus manos irresistiblemente suaves y perfumadas, sin resecarlas. Su fórmula delicada y libre de irritantes es ideal para toda la familia, incluso para pieles sensibles. Disponible en una variedad de fragancias frescas y revitalizantes, transforma cada momento de higiene en un placer aromático. Confía en nuestro jabón de manos para mantener la limpieza y el bienestar de tus manos, día tras día, con una sensación de frescura y confort incomparables.",
  },
  {
    id: 0,
    image: "https://http2.mlstatic.com/D_NQ_NP_928642-MLA74141740939_012024-O.webp",
    name: " Set De Bolsas de Residuo pack 10",
    category: Category.PRODUCTOS_LIMPIEZA,
    price: 100,
    quantity: 20,
    description:
      "Aborda la gestión de residuos de manera eficiente y confiable con nuestras bolsas de residuos de alta resistencia. Diseñadas para adaptarse a las necesidades de tu hogar o negocio, nuestras bolsas ofrecen una capacidad generosa y una durabilidad excepcional. Fabricadas con materiales resistentes y respetuosos con el medio ambiente, aseguran una contención segura de todo tipo de desechos, desde residuos domésticos hasta desechos comerciales. Su diseño práctico y fácil de manejar las convierte en la elección perfecta para mantener tus espacios limpios y ordenados. Confía en nuestras bolsas de residuos para una solución efectiva y responsable en la gestión de desechos.",
  },
  {
    id: 11,
    image: "https://http2.mlstatic.com/D_NQ_NP_910713-MLU73128393648_122023-O.webp",
    name: "Papel Higienico Felpita Superpack 30 Rollos",
    category: Category.PRODUCTOS_HIGIENE,
    price: 135,
    quantity: 20,
    description:
      "Experimenta el máximo confort y suavidad en cada uso con nuestro papel higiénico premium. Diseñado con capas extra suaves y absorbentes, nuestro papel garantiza una limpieza delicada y eficaz, cuidando la piel más sensible. Su resistencia y durabilidad lo convierten en la elección perfecta para el uso diario, mientras que su textura suave proporciona una sensación de frescura incomparable. Con nuestro papel higiénico, puedes confiar en una higiene impecable en cada momento. Descubre la calidad superior y el rendimiento excepcional de nuestro papel higiénico premium y disfruta de una experiencia de confort y bienestar en cada uso.",
  },
  {
    id: 12,
    image: "https://http2.mlstatic.com/D_NQ_NP_845480-MLU72787800319_112023-O.webp",
    name: "Pañales Pampers XG  Deluxe Protection",
    category: Category.PRODUCTOS_HIGIENE,
    price: 135,
    quantity: 20,
    description:
      "Brinda a tu bebé el máximo confort y protección con nuestros pañales XXG, diseñados para adaptarse a las necesidades de los pequeños más grandes. Con un ajuste seguro y suave, estos pañales ofrecen una absorción excepcional y una barrera antifugas confiable, manteniendo a tu bebé seco y cómodo durante más tiempo. Su diseño ergonómico y materiales suaves garantizan la máxima comodidad, mientras que su núcleo absorbente de alta tecnología proporciona una protección duradera día y noche. Confía en nuestros pañales XXG para brindarle a tu bebé la libertad de explorar y jugar sin preocupaciones, ¡porque cada momento es importante para su desarrollo feliz!",
  },
  {
    id: 13,
    image: "https://http2.mlstatic.com/D_NQ_NP_998128-MLA74111690720_012024-O.webp",
    name: "Fideos Matarazo Tirabuzon N28 Trigo",
    category: Category.ALIMENTOS_SECOS,
    price: 100,
    quantity: 20,
    description:
      "Embárcate en un viaje culinario inigualable con nuestros fideos Matarazzo, una deliciosa opción que ha conquistado los paladares más exigentes desde hace generaciones. Elaborados con los mejores ingredientes y siguiendo la tradición artesanal, nuestros fideos garantizan una textura perfecta y un sabor incomparable en cada bocado. Su versatilidad los hace ideales para crear una amplia variedad de platillos, desde clásicas recetas italianas hasta exquisitas preparaciones gourmet. Descubre el secreto de nuestra calidad y sabor únicos con los fideos Matarazzo, y convierte cada comida en una experiencia memorable llena de auténtico sabor y tradición.",
  },
  {
    id: 14,
    image: "https://http2.mlstatic.com/D_NQ_NP_853006-MLA52761906621_122022-O.webp",
    name: "Pack X 48 Unid. Picadillo 90 Gr Swift Pate/picadillos",
    category: Category.ALIMENTOS_NECESIDAD,
    price: 133,
    quantity: 20,
    description:
      "El picadillo Swift en envase de seis unidades ofrece comodidad y frescura en cada porción. Este pack es perfecto para tener a mano en cualquier ocasión, ya sea para un almuerzo rápido, una merienda o una cena improvisada. Cada porción está cuidadosamente envasada para preservar su sabor y calidad, asegurando una experiencia culinaria satisfactoria en cada bocado. Con su conveniente formato, es ideal para llevarlo contigo a donde vayas, ya sea al trabajo, de picnic o de viaje. Este pack de seis unidades ofrece una opción económica y práctica para satisfacer tus antojos de manera rápida y deliciosa.",
  },
  {
    id: 15,
    image: "https://http2.mlstatic.com/D_NQ_NP_601168-MLA74246731371_012024-O.webp",
    name: "Yerba Mate Premium Canarias 1KG",
    category: Category.ALIMENTOS_NECESIDAD,
    price: 133,
    quantity: 0,
    description:
      "Descubre el sabor auténtico de la tradición sudamericana con nuestra yerba mate premium, cuidadosamente seleccionada de las mejores plantaciones. Cultivada bajo el sol tropical y cosechada con esmero, nuestra yerba mate ofrece un equilibrio perfecto entre sabor robusto y aroma fresco. Rica en antioxidantes y nutrientes, esta infusión revitalizante es ideal para acompañarte en tus momentos de energía y concentración. Disfruta de su sabor único y estimulante tanto caliente como frío, compartiendo la alegría de una buena conversación o sumergiéndote en un momento de tranquilidad. Eleva tu experiencia con nuestra yerba mate premium y siente la pasión de la cultura gaucha en cada sorbo.",
  },
  {
    id: 16,
    image: "https://http2.mlstatic.com/D_NQ_NP_950188-MLU74116087730_012024-O.webp",
    name: "Protector Solar Dermaglos, en aerosol",
    category: Category.PRODUCTOS_HIGIENE,
    price: 133,
    quantity: 0,
    description:
      "El protector solar Dermaglos en aerosol ofrece una protección confiable y conveniente contra los daños causados por los rayos UVA y UVB. Su fórmula dermatológicamente probada es suave con la piel y resistente al agua, proporcionando una defensa efectiva contra las quemaduras solares y el envejecimiento prematuro de la piel. Con su formato en aerosol, la aplicación es rápida y uniforme, sin dejar residuos grasosos ni sensación pegajosa. Perfecto para todo tipo de actividades al aire libre, este protector solar Dermaglos garantiza una protección eficaz mientras disfrutas del sol. Es un aliado imprescindible para mantener la piel saludable y protegida durante todo el año.",
  },
  {
    id: 17,
    image: "https://http2.mlstatic.com/D_NQ_NP_903619-MLU69495174839_052023-O.webp",
    name: "Pasta de Dientes Colgate x 180gr",
    category: Category.PRODUCTOS_HIGIENE,
    price: 133,
    quantity: 0,
    description:
      "La pasta de dientes Colgate ofrece una experiencia de cuidado bucal completa y refrescante en cada cepillado. Formulada con ingredientes de alta calidad y respaldada por la experiencia de una marca confiable, esta pasta dental ayuda a proteger los dientes contra las caries, fortalece el esmalte y combate eficazmente la placa bacteriana, dejando una sensación de limpieza y frescura duradera. Su fórmula avanzada no solo promueve la salud bucal, sino que también brinda una sensación de confianza y bienestar. Con su presentación en envase de tamaño estándar, es un imprescindible en la rutina diaria de higiene oral para toda la familia.",
  },
  {
    id: 18,
    image: "https://http2.mlstatic.com/D_NQ_NP_671116-MLA49423023769_032022-O.webp",
    name: "Leche Descremada Larga Vida X 1 L Tregar",
    category: Category.BEBIDA,
    price: 133,
    quantity: 20,
    description:
      "La leche descremada es una opción saludable y baja en grasa para aquellos que desean disfrutar de los beneficios nutricionales de la leche sin el contenido de grasa adicional. Rica en calcio, vitaminas y proteínas, esta leche ofrece un aporte nutritivo esencial para mantener huesos fuertes y una dieta equilibrada. Su proceso de descremado elimina la mayor parte de la grasa, lo que la hace ideal para aquellos que siguen una dieta baja en grasas o están buscando controlar su consumo calórico. Con su sabor fresco y ligero, la leche descremada es una excelente opción para disfrutar sola, con cereales o en tus recetas favoritas.",
  },
  {
    id: 19,
    image: "https://http2.mlstatic.com/D_NQ_NP_835432-MLU72612667835_112023-O.webp",
    name: "Gatorade x 6 unidades, Savores varios",
    category: Category.BEBIDA,
    price: 133,
    quantity: 0,
    description:
      "Gatorade es una bebida deportiva líder en el mercado, diseñada para rehidratar y reponer los electrolitos perdidos durante la actividad física intensa. Su fórmula especial contiene una mezcla equilibrada de carbohidratos y electrolitos, como sodio y potasio, que ayudan a mantener el equilibrio hídrico y la función muscular durante el ejercicio. Disponible en una variedad de sabores refrescantes, Gatorade ofrece una rápida y efectiva recuperación, ayudando a prevenir la deshidratación y el agotamiento durante el entrenamiento y la competición. Con su conveniente presentación en botellas y sachets, Gatorade es la elección preferida de atletas y entusiastas del ejercicio en todo el mundo.",
  },
  {
    id: 20,
    image: "https://http2.mlstatic.com/D_NQ_NP_919290-MLU46233045456_062021-O.webp",
    name: "Powerade x 1Lt, Six Pack",
    category: Category.BEBIDA,
    price: 139,
    quantity: 0,
    description:
      "Pawerade es una bebida isotónica diseñada para reponer los electrolitos y la energía perdida durante la actividad física. Con una fórmula especializada, contiene una combinación equilibrada de carbohidratos y electrolitos clave, como sodio y potasio, para ayudar a mantener el equilibrio hídrico y la función muscular. Disponible en una variedad de sabores deliciosos y refrescantes, Pawerade ofrece una rápida y efectiva recuperación, ayudando a prevenir la deshidratación y la fatiga durante el ejercicio intenso. Su práctica presentación en botellas lo hace ideal para llevar durante el entrenamiento, competiciones deportivas o simplemente para mantenerse hidratado en cualquier momento del día.",
  },
];

//--
