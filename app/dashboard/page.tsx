import Link from "next/link";
import { CustomSection } from "../ui/dashboard/custom-section";

type CustomSectionType = { id? : string; title : string; body : string; i? : number };

const data : CustomSectionType[] = [
  {
    id : 'one',
    title : '1 Gráfico de Columnas con D3Plus, Volumen de ventas de AAPL (datos descargados con link de git hub)',
    body : 'Se aplicó este gráfico con el fin de visualizar la variabilidad inesperada que hay en el volumen del ventas de las acciones de Apple. Aquí se puede observar que existen días en los que hay un incremento inesperado de la demanda de acciones. Esto ocasiona un incremento de los precios pero no es un incremento constante, y esto explica por qué hay tanta volatilidad en los precios de las acciones en el entorno del mercado en trading. Cuando Apple vende muchas acciones, los precios de las mismas tienden a aumentar, esto puede deberse a muchos factores, pero la inversión en la empresa es uno de ellos, ya que aumenta el presupuesto de Apple para realizar mejoras productivas y organizacionales.',
  },
  {
    id : 'two',
    title : '2. USANDO D3: Gráfico de linea punteada, Precio de cierre de AAPL (datos descargados con link de git hub) ',
    body : ' Como se mencionó en el gráfico anterior, el aumento de la demanda de acciones ocasiona un aumento en los precios de las mismas, y esto se ve reflejado en el gráfico de puntos, donde los puntos más altos en precios, deberían coincidir con fechas cercanas al aumento del volumen de ventas de AAPL.',
  },
  {
    id : 'trhee',
    title : '3. Caja y Bigotes (AAPL)',
    body : '',
  },
  {
    id : 'four',
    title : '5 DINAMICO COMBINADO: Gráfico de Velas (precios de AAPL) vs Gráfico de barras (Volumen de ventas de AAPL)',
    body : 'Para comprobar la anterior, teoría, se juntaron los precios de AAPL en diagramas de velas, junto con su volumen de ventas en diagrama de barras, coincidentes con sus respectivas fechas cada uno. Se puede observar que al inicio el volumen de ventas se ve reducido, por lo cual los precios tienden a bajar (esto genera oportunidades de compra de acciones para después venderlas a un precio mayor y sacar rentabilidad, ejerciendo así el rol del trader). Este comportamiento, sucede así hasta el 30 de junio. Desde esa fecha hasta el 21 de agosto, no se sigue esta lógica. Como se mencionó antes, el volumen de ventas de acciones no es el único factor que influye en los precios de sus acciones, por lo cual antes de decidir invertir, se deben tener en cuenta otros factores. Se le atribuye una gran influencia a los precios de las acciones al marketing generado por Apple, por lo cual, en este proyecto se planea añadir los comentarios de twitter de analistas de acciones para complementar este criterio, entre otros',
  },
  {
    id : 'five',
    title : '',
    body : '',
  },
  {
    id : 'six',
    title : '6. MAPA',
    body : 'descripción, mapa',
  },

]

export default function DashboardPage() {
  return (
    <div>
        
      <Link style={{ color : '#000' }} href="#three2">Swift trading, AAPL</Link>
      {
        data.map((d, i) => (
          <CustomSection key={d.id} {...d} i={i+1} />
        ))
      }
    

    </div>
  )
}