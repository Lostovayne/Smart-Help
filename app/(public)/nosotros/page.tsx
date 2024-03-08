import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { CardText } from "./_components/CardText";
import { HandHeart, HeartHandshake, MessageCircle } from "lucide-react";
import { SectionAboutUs } from "./_components/SectionAboutUs";

const AboutUsPage = () => {
  const cardData = [
    {
      id: 1,
      title: "“Confianza”",
      description:
        "Tén la seguridad de que nosotros no buscamos generar ningún beneficio monetario de esta acción, queremos ser el nexo entre los damnificados y las personas que quieren ayudar.",
      icon: HandHeart,
    },
    {
      id: 2,
      title: "“Responsabilidad”",
      description:
        "Nos preocupamos de enviar los productos con la mayor rapidez y sobre todo de hacerle llegar a las personas que hayas elegido ayudar, nosotros nos encargamos del servicio de logística.",
      icon: HeartHandshake,
    },
    {
      id: 3,
      title: "“Comunicación”",
      description:
        "En nuestra plataforma podrás enviar un mensaje personalizado a la persona que buscas ayudar, queremos fomentar la solidaridad de la forma más humana posible usando la tecnología como medio.",
      icon: MessageCircle,
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <CardText />
      <SectionAboutUs />
      <div className='flex flex-col justify-center items-center text-center gap-4 my-14 px-10'>
        <p className='text-violet-700 font-bold text-xl'>Nuestra historia</p>
        <h2 className='text-gray-800 font-black text-4xl sm:text-5xl'>
          “Somos un grupo de amigos que ayuda a personas a ayudar a otras
          personas”
        </h2>
        <div className='py-7'>
          <Image
            src={"/about-us.png"}
            width={700}
            height={700}
            alt={"Imagen-homepage"}
            className='w-full object-cover rounded-xl'
          />
        </div>
        <p className='text-gray-600 text-base xl:text-lg text-center px-2 lg:px-0 sm:w-5/6'>
          Smarthelp nace de la mente de cinco amigos que querían conectar a
          personas que querían ayudar con productos de primera necesidad,
          comprados desde el almacén del barrio, sin intermediarios, con
          mensajes personales de las mismas personas que les envían los
          productos. Creamos una cadena de favores que se replica
          constantemente. Trabajamos por una economía centrada en la vida,
          pensando en el acompañamiento integral de las personas, para dar
          respuesta a situaciones de vulnerabilidad y desempleo desde procesos
          comunitarios.
        </p>
      </div>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='py-10 text-gray-800 font-extrabold text-3xl md:text-5xl'>
            “Nuestros valores”
          </h2>
          <div className='flex flex-col md:flex-row gap-5 text-center text-white w-5/6 py-7'>
            {cardData.map(({ id, title, description, icon: Icon }) => (
              <div
                className='bg-violet-700 p-5 rounded-xl gap-4 justify-center items-center flex flex-col'
                key={id}>
                <Icon size={40} />
                <h3 className='font-bold text-xl'>{title}</h3>
                <p className='font-normal text-base'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
