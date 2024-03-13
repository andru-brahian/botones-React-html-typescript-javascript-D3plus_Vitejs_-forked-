'use client'
 
import { useRouter } from 'next/navigation';
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function LoginForm() {
  const router = useRouter();

  const onSubmit = (e : any) => {
    e.preventDefault();

    router.push('/dashboard');
  }

  const onGoDashboard = (e : any) => {
    e.preventDefault();

    router.push('/dashboard');
  }

  const onGoLanding = (e : any) => {
    e.preventDefault();

    router.push('/');
  }

  return (
    <form className="space-y-3 w-1/3 shadow-md" onSubmit={onSubmit}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Por favor, de click en la acción que quiere ver
        </h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
              AUDIENCIA:
              Inversionistas que hacen swift trading
            </label>

          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
            CONTEXTO DEL OBJETIVO:
            
            El swift trading es una forma de hacer trading, enfocado únicamente a la compra y venta de acciones de empresas en un mediano plazo. Difiere del trading usual porque los periodos que tienen los traders entre venta y compra de acciones son mucho mayores (en el trading de forex por ejemplo, el tiempo entre compra y venta puede ser de minutos). El tiempo entre compra y venta de una acción en swift trading, puede ser de 1 día o más.
            <br/>

            <br/>
            Usualmente los swift traders tienen métodos de inversión que no incluyen un análisis de datos de este tipo  (porque lleva demasiado tiempo, y por eso se necesitan herramientas que saquen conclusiones automáticas de dicho análisis) incluirlos en sus acciones diarias). Es aquí donde este proyecto puede aportar más valor, puesto que permitirá  persuadir al trader de que es importante la inclusión de este tipo de análisis en sus métodos habituales usandolos en sus  rutinas diarias de SWIFT TRADING para la selección de opciones de inversión.

            </label>
          
          </div>
        </div>
        <LoginButton onGoDashboard={onGoDashboard} />
        <BacktoLandingButton onGoLanding={onGoLanding} />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton({ onGoDashboard } : { onGoDashboard : (e : any) => void }) {
  return (
    <Button className="mt-4 w-full" onClick={onGoDashboard}>
      Visualizar gráficos <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function BacktoLandingButton({ onGoLanding } : { onGoLanding : (e : any) => void }) {
  return (
    <Button className="mt-4 w-full bg-gray-400 hover:bg-gray-500 active:bg-gray-700" onClick={onGoLanding}>
      <ArrowLeftIcon className="mr-1 h-5 w-5 text-gray-50" /> Visualizar objetivo
    </Button>
  );
}
