//import imagen from "./public/diagrama_de_correlacion_AAPL_velas.png";
import imagen from "../public/diagrama_de_correlacion_AAPL_velas.png";


 //<img src={imagen} alt="Tu descripción de la imagen"/>

export default function InvoicesPage() {
  return (
    <div>
      <h1>Gráficos de Google Colab</h1>
      <a href="https://imgur.com/Lz0K1wu"><img src="https://i.imgur.com/Lz0K1wu.png" title="source: imgur.com" /></a>

      <h1>
        Usando librería seaborn: Gráfico de correlación entre las variables usadas en el gráfico de velas
        Se puede observar que todos los precios tienen una correlación fuerte positiva, y esto se debe a que normalmente la varaición de los precios sigue una distribución normal, por lo cual, si un precio baja o sube , el precio de cierre no será muy diferente al precio de apertura en el día corresondiente. Lo mismo sucede con las demás variables relacionadas al precio con las cuales se hizo el diagrama de velas. Esta distribución normal permite aplicar distintos métodos de predicción de variación en los precios como simulación montecarlo, entre otras.
      </h1>

      <h1>
        Usando librería seaborn: Gráfico de histograma con linea de tendencia, distribución de los datos, variable Close_AAPL Los datos están más concentrados desde el 142 hasta los 157.
      </h1>
  
      <a href="https://imgur.com/mjEyTuR"><img src="https://i.imgur.com/mjEyTuR.png" title="source: imgur.com" /></a>

      <a>
        CONCLUSIÓN MENSAJE PRINCIPAL:
        ¿Es aconsejable invertir en AAPL? La respuesta no es sencilla y depende de varios factores, pero entre más completo sea el análisis,  menos riesgo asume el swift trader y así la repetición de sucesos de inversión en el mediano plazo se verá
        beneficiada aumentando la cantidad de casos en los que se obtienen ganancias 

        Factores a favor de invertir en AAPL:Empresa sólida con un historial de crecimiento usual. Alto volumen de ventas: El alto volumen de ventas de acciones de AAPL indica que hay un gran interés en la empresa por parte de los inversores. Correlación fuerte positiva entre las variables: Los precios de las acciones de AAPL tienen una correlación fuerte positiva, lo que significa que son relativamente predecibles y se pueden usar métodos de análisis técnico para predecir su comportamiento futuro. Oportunidades para traders: Los traders pueden aprovechar las fluctuaciones en el precio de las acciones de AAPL para obtener beneficios a corto plazo. Factores en contra de invertir en AAPL: Volatilidad del precio: El precio de las acciones de AAPL es volátil y puede experimentar cambios bruscos. Influencia del marketing: El precio de las acciones de AAPL puede verse afectado por el marketing y las noticias, lo que puede ser un factor de riesgo para los inversores. Análisis fundamental de la empresa: Evaluar la salud financiera de Apple, su estrategia de negocio y sus perspectivas de crecimiento futuro. Análisis técnico del precio de las acciones: Estudiar el comportamiento histórico del precio de las acciones para identificar patrones y tendencias. Consideración de otros factores: Evaluar el impacto de las noticias, el marketing y otros factores externos en el precio de las acciones. En general, AAPL es una empresa sólida con un historial de crecimiento constante. Sin embargo, el precio de sus acciones es volátil y puede verse afectado por diversos factores. Se recomienda realizar un análisis profundo antes de tomar una decisión de inversión.
      </a>
  
    </div>
  )
}
