import Link from "next/link";

const PoliticasPage = () => {
  return (
    <section>
      <div className='w-full my-10 px-6 flex flex-col gap-4 justify-center text-center lg:text-left'>
        <h1 className='text-5xl font-bold py-5'>Política de privacidad</h1>
        <p>
          En SmartHelp, respetamos su privacidad y nos comprometemos a
          protegerla mediante el cumplimiento de esta política. Esta política
          describe los tipos de información que podemos recoger de usted o que
          usted puede proporcionar cuando visita nuestro sitio web y nuestras
          prácticas para recopilar, usar, mantener, proteger y divulgar esa
          información.
        </p>
        <div>
          <h2 className='text-2xl font-medium py-5'>
            Recopilación de Información
          </h2>
          <div>
            Podemos recopilar varios tipos de información, incluyendo
            información:
            <ul className='font-medium lg:font-normal lg:list-disc lg:list-inside py-3 lg:pl-3 gap-1 flex flex-col'>
              <li>Directamente proporcionada por el usuario.</li>
              <li>
                Recopilada automáticamente a medida que navega por el sitio.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-medium py-5'>Uso de la Información</h2>
          <div>
            <p>
              Usamos la información que recopilamos sobre usted o que usted nos
              proporciona, incluyendo cualquier información personal:
            </p>
            <ul className='font-medium lg:font-normal lg:list-disc lg:list-inside py-3 lg:pl-3 gap-1 flex flex-col'>
              <li>Para presentar nuestro sitio web y sus contenidos.</li>
              <li>
                Para proporcionarle información, productos o servicios que nos
                solicite.
              </li>
              <li>
                Para cumplir con nuestras obligaciones y hacer valer nuestros
                derechos derivados de cualquier contrato celebrado entre usted y
                nosotros.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-medium py-5'>
            Divulgación de su Información
          </h2>
          <p>
            No compartimos, vendemos ni divulgamos su información personal a
            terceros.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-medium py-5'>Seguridad de los Datos</h2>
          <p>
            Hemos implementado medidas diseñadas para proteger su información
            personal de la pérdida accidental y del acceso, uso, alteración y
            divulgación no autorizados
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-medium py-5'>
            Cambios en Nuestra Política de Privacidad
          </h2>
          <p>
            Es nuestra política publicar cualquier cambio que hagamos en nuestra
            política de privacidad en esta página. Si tiene alguna pregunta
            sobre esta Política de Privacidad, póngase en contacto con nosotros
            en
            <Link
              href='SmartHelp@gmail.com'
              className='text-violet-700 font-medium'>
              {" "}
              SmartHelp@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticasPage;
