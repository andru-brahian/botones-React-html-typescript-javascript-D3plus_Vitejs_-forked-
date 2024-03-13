import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// HAY QUE GUARDAR Y ACTUALIZAR LA PA´GINA EN STACKBLITZ, PARA REINICIAR EL KERNEL Y EVITAR EL ERROR DEL YARN DE D3PLUS DESPUÉS DE ESO SI SE HACE UN CAMBIO IMPORTANTE, EMPIEZA A DAR ERROR EL D3PLUS

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Nombre:  Brahian Andrey Giraldo Alzate</strong>
          </p>

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Google Colab Python:</strong> {' '}
            <a href='https://colab.research.google.com/drive/1XjDJeShA0lqwKMVCUAWiZX3gZfVgk477?usp=sharing" target = "_blank">https://colab.research.google.com/drive/1XjDJeShA0lqwKMVCUAWiZX3gZfVgk477?usp=sharing' className="text-blue-500">
            https://colab.research.google.com/drive/1XjDJeShA0lqwKMVCUAWiZX3gZfVgk477?usp=sharing
            </a>
            <br/>
          </p>

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>url stackblitz vite:</strong> {' '}
            <a href='url stackblitz vite:' className="text-blue-500">
            https://vitejsviteaqxouf-j54d--3000--810981ba.local-credentialless.webcontainer.io/
            </a>
          </p>

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Git hub:</strong> {' '}
            <a href='url stackblitz vite:' className="text-blue-500">
            https://github.com/andru-brahian/botones+React+html+typescript+javascript+D3plus_Vitejs_(forked).git
            </a>
          </p>




        

        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        </div>
      </div>




      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>OBJETIVO:</strong>  el objetivo principal de las visualizaciones en esta página web es promover el uso herramientas que permiten usar técnicas de análisis de datos de forma automática en el swift trading, haciendole entender a los swift traders que hay motivos por los cuales deberían usar estas herramientas.
          <br/>

          <br/>
          Se pretende lograr esto proporcionando a los traders un mensaje en forma de ejemplo que les permitirá entender lo que verían  de forma automática en una herramienta que mostró un análisis automático de los precios y demanda de acciones de AAPL. Este mensaje les generará conocimiento útil a la hora de decidir si AAPL es buena opción para incluir o no en el portafolio para decidir si es buena idea o no incluir en su portafolio de inversión a una empresa en específico.
          <br/>

          <br/>
          <strong>MENSAJE :</strong> 
            Es conveniente incluir en las decisiones de inversión en swift trading, información de análisis de datos automáticos, porque en decisiones de tiempo real no hay tiempo de hacer análisis robustos al respecto. Se pretende transmitir este mensaje a través de un ejemplo de análisis de datos en los precios y  demanda de acciones en AAPL (apple) 
          
          {' '}
        </p>
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Click acá para ver audiencia y el contexto</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
      </div>





      </div>
    </main>
  );
}
