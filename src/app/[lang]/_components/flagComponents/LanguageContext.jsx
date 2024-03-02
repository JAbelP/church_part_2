"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translate = (key) => {
    const translations = {
      en: {
        Liderazgo: "Leadership",
        pastores: "Pastors",
        Decons: "Decons",
        "pastores Asociados": "Associate Pastors",
        // Ministeros
        Ministerios: "Minsistries",
        Evangelismo: "Evenglism",
        "ADORACIÓN Y ALABANZAS": "WORSHIP AND PRAISE",
        "Soy Nuevo": "Join Us Today",
        "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES (GPS)": "Small Health Groups",
        "EDUCACIÓN CRISTIANA": "CHRISTIAN EDUCATION",
        MISIONES: "MISSIONS",
        ORACIÓN: "PRAYER",
        "CONSEJERÍA PASTORAL": "PASTORAL COUNSELING",
        "MINISTERIO DE PAREJAS": "COUPLES MINISTRY",
        "MINISTERIO DE HOMBRES": "MEN'S MINISTRY",
        "MINISTERIO DE MUJERES": "WOMEN'S MINISTRY",
        "MINISTERIO DE JÓVENES": "TEENS'S MINISTRY",
        "MINISTERIO DE NIÑOS": "CHILDREN'S MINISTRY",
        // QuienesSomos
        "Quienes Somos?": "Who Are we?",
        MISIÓN: "Our Mission",
        VISIÓN: "Our Vision",
        "Somos una Iglesia que Ama y Restaura":
          "We are a Church that Loves and Restores",
        "Evangelizar y Discipular a través del Sistema de Grupos Familiares la ciudad, mediante la formación de un Ministerio Hispano, haciendo de cada cristiano un discípulo.":
          "Evangelize and Disciple through the city's Family Group System, through the formation of a Hispanic Ministry, making each Christian a disciple.",
        // title bar
        "Quienes Somos": "About Us",
        Eventos: "Events",
        Sermones: "Sermons",
        Ofrenda: "Offerings",
        Casa: "Home",
        // Footer
        "Domingo 1:30 PM": "Sunday 1:30 PM",
        "Viernes 7:30 PM": "Friday 7:30 PM",
        Horas: "Hours",
        Visítanos: "Visit Us",
        // events
        "Culto De Adoracion": "Worship",
        "PEQUEÑOS GRUPOS SALUDABLES (GPS) EN LOS HOGARES ORLANDO EN PORTUGUES":
        "SMALL GROUPS HELP AT HOMES IN PORTUGUESE",
        "ESTUDIOS BIBLICOS":"Bible Study",
        "RETIRO DE ORACIÓN":"PRAYER RETREAT",
        //
        // Changes Often
        'Miércoles 19 Julio 7:30 PM':'Wednesday July 19 7:30 PM',
        'Sábado 29 Julio 9:00 AM - 1:00 PM':'Saturday July 29 9:00 AM - 1:00 PM',
        "La Evangelización O Evangelismo" : "Evangelization Or Evangelism, Is The Mission And Main Function Of The Church. It consists of bringing the Good News of Jesus Christ to those who, because they do not know it, are losing their opportunity to live the abundant life and be saved. The Dynamic to Evangelize Sprouts from the Experience of Having Been Reconciled with God. Therefore, basically evangelizing is the task of all Christians, all the time and in everything they do. Christ Sent All Believers Around the World to Make Disciples.",
        "Este Ministerio tiene como meta fundamental velar por el cuidado de los miembros de la congregación, procurando integrarlos a la vida total de la iglesia, en un clima de hermandad y amor cristiano." : "The fundamental goal of this Ministry is to ensure the care of the members of the Congregation, seeking to integrate them into the total life of the Church, in a climate of brotherhood and Christian love.",
        "velar por el cuidado de los miembros de la congregación, procurando integrarlos a la vida total de la iglesia, en un clima de hermandad y amor cristiano.":"Ensure the care of the members of the congregation, seeking to integrate them into the total life of the church, in a climate of brotherhood and Christian love.",
        "En el acto de adoración enriquecemos nuestra vida espiritual, pues la vida de Dios nos es ofrecida en el Cristo que hace la presencia en el culto. La adoración no es el fin último de la vida cristiana, pero es la función de la iglesia y los creyentes, que nutre y unifica todas las demás funciones del Cuerpo de Cristo.":"In the act of worship we enrich our spiritual life, since the life of God is offered to us in the Christ who is present in the worship. Worship is not the ultimate goal of the Christian life, but it is the function of the church and believers, which nourishes and unifies all other functions of the Body of Christ.",
        "La Educación cristiana tiene como meta proveer y facilitar aquellos procesos y experiencias necesarias, para que las personas puedan estudiar, examinar y reflexionar sobre los contenidos de su fe cristiana, particularmente en cuanto al amor redentor de Dios revelado en Jesucristo, para que cada persona pueda responder en fe y amor al Señor, para que se comprenda a sí misma y su situación humana, y para que unida a la comunidad cristiana, viva en el Espíritu todas sus relaciones humanas, y cumpla su discipulado en el mundo, perseverando en la esperanza cristiana.":"Christian Education aims to provide and facilitate those necessary processes and experiences, so that people can study, examine and reflect on the contents of their Christian faith, particularly regarding the redeeming love of God revealed in Jesus Christ, so that each person can respond in faith and love to the Lord, so that she understands herself and her human situation, and so that, united with the Christian community, she lives in the Spirit all her human relationships, and fulfills her discipleship in the world, persevering in hope. Christian.",
        "Nuestro Señor Jesucristo ordenó que su Evangelio fuera predicado hasta lo último de la tierra. La responsabilidad misionera de la iglesia es ineludible. Todos tenemos parte en esa obligación, unos participando directamente como misioneros en distintas funciones, otros aportando de nuestros recursos para que esa labor sea posible. Por tanto, hacemos misión como individuos, en la congregación local, y a través de las instituciones y organizaciones de nuestra iglesia que tienen esta encomienda. Nuestra principal responsabilidad de respaldo y sostén misionero es a través de la Iglesia Cristiana Luz Y Vida MC Inc. y las entidades eclesiásticas que éstas sostienen.":"Our Lord Jesus Christ ordered that his Gospel be preached to the ends of the earth. The missionary responsibility of the church is unavoidable. We all have a part in that obligation, some participating directly as missionaries in different functions, others contributing our resources to make this work possible. Therefore, we do mission as individuals, in the local congregation, and through the institutions and organizations of our church that have this task. Our main responsibility for missionary support and support is through the Iglesia Cristiana Luz Y Vida MC Inc. and the ecclesiastical entities that they support.",
        "El Ministerio de Oración es esencialmente importante en la existencia y sostenimiento de la vida espiritual de la Iglesia. Este ministerio promulgara constantemente, estimulara e inspirara al cuerpo corporativo de la Iglesia a mantener viva la oración en todo asunto y en todo tiempo tal como el Señor nos enseñó a orar sin cesar.":"The Ministry of Prayer is essentially important in the existence and maintenance of the spiritual life of the Church. This ministry will constantly promulgate, stimulate and inspire the corporate body of the Church to keep prayer alive in all matters and at all times just as the Lord taught us to pray without ceasing.",
        "La consejería es otorgada por el Pastor Principal y será considerada como consejo de parte del Señor siempre y cuando dicho consejo sea bíblico, de carácter sano, este en línea con la visión y misión de la iglesia, y estimule la unión entre hermanos. Toda reunión de consejo será efectuada con mayor confidencia.":"Counseling is given by the Senior Pastor and will be considered advice from the Lord as long as said advice is biblical, of a healthy character, is in line with the vision and mission of the church, and stimulates unity between brothers. All council meetings will be held with greater confidentiality.",
        "Llevar sanidad a todas las parejas de nuestra iglesia y otras parejas relacionadas, capacitándolas y equipándolas para sus vidas de pareja en Cristo Jesús":"Bring healing to all couples in our church and other related couples, empowering and equipping them for their couple lives in Christ Jesus",
        "El Ministerio de Hombres es la búsqueda activa de hombres para conectarlos con Dios, Su Palabra, y otros hombres, con el propósito de ganar, desarrollar y entrenar en Cristo al hombre de Dios.":"Men's Ministry is the active pursuit of men to connect them with God, His Word, and other men, for the purpose of winning, developing, and training the man of God in Christ.",
        "Fomentar el rol de la mujer desde una perspectiva cristiana, fortaleciendo las diferentes áreas de su vida. Poder ir en pos de las mujeres, ya sean solteras, casadas, separadas y/o divorciadas para que tengan un encuentro con Cristo. Y que participemos activamente y seamos unas fieles representantes de Dios en la iglesia, en los hogares y en nuestra comunidad.":"Promote the role of women from a Christian perspective, strengthening the different areas of their lives. Being able to go after women, whether they are single, married, separated and/or divorced so that they have an encounter with Christ. And that we actively participate and be faithful representatives of God in the church, in our homes and in our community.",
        "Capturar a la juventud a través del amor de Jesús de modo que puedan reconocer el papel que juegan dentro de la iglesia y la sociedad, proporcionándoles las herramientas necesarias para poder enfrentar cualquier situación en la vida y salir más que vencedores en el nombre de nuestro Señor Jesucristo, además puedan entender el llamado de Dios en sus vidas y que sean jóvenes que impacten la sociedad donde viven con una vida recta delante de Dios.":"Capture youth through the love of Jesus so that they can recognize the role they play within the church and society, providing them with the necessary tools to be able to face any situation in life and come out more than conquerors in the name of our Lord Jesus Christ, they can also understand the call of God in their lives and be young people who impact the society where they live with a righteous life before God.",
        "Tener un ministerio de niños efectivo con un crecimiento de carácter espiritual, trasformador, innovador y creciente, llevando al niño a través de la enseñanza a que ame a Jesús y sea lleno del Espíritu Santo":"Have an effective children's ministry with a spiritual, transformative, innovative and growing growth, leading the child through teaching to love Jesus and be filled with the Holy Spirit",
        "- Mateo 11:28":"Matthew 11:28",
        "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.":"Come to me, all you who are weary and burdened, and I will give you rest.",
        "-Miqueas 6:8":"-Micah 6:8",
        "Él te ha declarado, oh hombre, lo que es bueno. ¿Y qué es lo que demanda el Señor de ti, sino solo practicar la justicia, amar la misericordia, y andar humildemente con tu Dios?":"He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"
      },
      es: {
        Liderazgo: "Liderazgo",
        pastores: "Pastores",
        Decons: "Diáconos",
        "pastores Asociados": "Associate Pastores",
        // Ministeros

        Ministerios: "Ministerios",
        Evangelismo: "Evangelismo",
        "ADORACIÓN Y ALABANZAS": "ADORACIÓN Y ALABANZAS",
        "Soy Nuevo": "Soy Nuevo",
        "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES":
          "CÉLULAS GRUPOS PEQUEÑOS SALUDABLES",
        "EDUCACIÓN CRISTIANA": "EDUCACIÓN CRISTIANA",
        MISIONES: "MISIONES",
        ORACIÓN: "ORACIÓN",
        "CONSEJERÍA PASTORAL": "CONSEJERÍA PASTORAL",
        "MINISTERIO DE PAREJAS": "MINISTERIO DE PAREJAS",
        "MINISTERIO DE HOMBRES": "MINISTERIO DE HOMBRES",
        "MINISTERIO DE MUJERES": "MINISTERIO DE MUJERES",
        "MINISTERIO DE JÓVENES": "MINISTERIO DE JÓVENES",
        "MINISTERIO DE NIÑOS": "MINISTERIO DE JÓVENES",
        // QuienesSomos
        "Quienes Somos?": "Quienes Somos?",
        MISIÓN: "MISIÓN",
        VISIÓN: "VISIÓN",
        "La Evangelización O Evangelismo": "La Evangelización O Evangelismo, Es La Misión Y Función Principal De La Iglesia. Consiste En Llevar Las Buenas Nuevas De Jesucristo, A Quienes Por No Conocerlas, Están Perdiendo Su Oportunidad De Vivir La Vida Abundante Y Ser Salvos. La Dinámica Para Evangelizar Brota De La Experiencia De Haber Sido Reconciliados Con Dios. Por Eso,Básicamente El Evangelizar Es Tarea De Todos Los Cristianos, Todo El Tiempo Y En Todo Lo Que Hacen. Cristo Envió A Todos Los Creyentes Por El Mundo A Hacer Discípulos.",
        "Este Ministerio Tiene Como Meta Fundamental Velar Por El Cuidado De Los Miembros De La Congregación, Procurando Integrarlos A La Vida Total De La Iglesia, En Un Clima De Hermandad Y Amor Cristiano." : "Este Ministerio Tiene Como Meta Fundamental Velar Por El Cuidado De Los Miembros De La Congregación, Procurando Integrarlos A La Vida Total De La Iglesia, En Un Clima De Hermandad Y Amor Cristiano.",
        // Soy Nuevo Page
        //Titles
        "Contact Information":"Informacion De Contacto",
        "Additional Information":"Información Adicional",
        "Name":"Nombre",
        "Age":"Edad",
        "Email":"Correo electrónico",
        "Phone":"Teléfono",
        "How did you hear about us?":"¿Cómo te enteraste de nosotros?",
        "I would like to...":"Me gustaría...",
        "Do You Have a Petition?":"¿Tiene una petición?",
        "Submit":"Someter",
        "Select Gender":"Seleccione género",
        "Male":"Hombre",
        "Female":"Mujer",
        "Select An Option":"Seleccione una opción",
        "Friend":"Amigo/a",
        "Evangalism":"Evangelización",
        "Join The Church":"Únete a la iglesia",
        "Convert":"Convertirme",
        "Talk To Someone":"Habla con alguien",





      },
    };
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
