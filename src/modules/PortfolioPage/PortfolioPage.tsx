import kolonna from '../../resources/portfolio/kolonna.webp'
import kolonnaMin from '../../resources/portfolio/portfolioMin/kolonnaMin.webp'
import kolonnaK98 from '../../resources/portfolio/kolonnak98.webp'
import kolonnaK98Min from '../../resources/portfolio/portfolioMin/kolonnak98Min.webp'

import ProductsItem from './ProductsItem/ProductsItem'

import { Slider } from './Slider/Slider'
import photoSlife from '../../resources/portfolio/photo.webp'

import styles from './PortfolioPage.module.css';


export const PortfolioPage = () => {

  const slides = [
    {
      id: 1,
      photo: photoSlife
    },
    {
      id: 2,
      photo: photoSlife
    },
    {
      id: 3,
      photo: photoSlife
    },
    {
      id: 4,
      photo: photoSlife
    },
  ]

  return (
    <>
      <div className={styles.promo}>
        <div className={styles.promoDescr}>
          <span>НАШИ ЗАКАЗЫ</span> <br />
          ЗАКАЗ ДЛЯ ЗАКАЗЧИКА “ЗАКАЗЧИК”
        </div>
        <div className={styles.promoRectangle}></div>
      </div>
      <div className={styles.executed}>
        <ProductsItem/>
      </div>
      <div className={styles.possibilitiesTitle}>Наши возможности</div>
      <div className={styles.possibilities}>
          <p> Нестандартное оборудование, аппараты и реакторы на базе сосудов, работающих под давлением, по тз заказчиков химической, нефтегазового комплекса, нефтехимической, нефтеперерабатывающей, фармацевтической и пищевой промышленности.
          </p>
          <Slider slides={slides}/>
          Технологическое оборудование для систем химической подготовки и дезактивации воды для атомных электрических станций (АЭС) (для БелАЭС);
          <br />
          <br />
          Емкостное, сепарационное и нагревательное оборудование для очистки попутного нефтяного газа низкого и высокого давления;
          <br />
          <br />
          Фильтры для химподготовки воды ( ионитные, катионитные, смешанного действия, обезжелезивающие, ловушки и др.), производительностью до 450м3/ч и рабочим давлением 6 атм;
          <br />
          <br />
          Мерники спирта и других технических жидкостей образцовые и технические вместимостью от 750 л до 10000 л;
          <br />
          <br />
          Теплообменное оборудование (кожухотрубные теплообменники на базе гладких и гофрированных труб) для подогрева и охлаждения технических сред и пищевых продуктов;
          <br />
          <br />
          Резервуары и аппараты на их базе для хранения и обработки продуктов в химической, нефтехимической, нефтеперерабатывающей, фармацевтической и пищевой промышленности
          <br />
          <br />
          Технологическое оборудование для модернизации критических стендов
          «Кристалл» и «Гиацинт»:
          <br />
          <br />
          Криогенные емкости;
          <br />
          <br />
          Воздухосборники, объемом от 1 м3 до 20м3 и рабочим давлением от 8 атм до 40 атм;
          <br />
          <br />
          Ресиверы различных газов, объемом до 20м3 и рабочим давлением до 12 атм
          <p className={styles.possibilitiesPleft}>Насосы:</p>
          <Slider slides={slides}/>
          консольные химические (НКХ) предназначены для перекачивания химически активных и нейтральных жидкостей плотностью не более 1850 кт/м3, вязкостью до 30*10-6 м2/с, содержащих твердые включения размером до 1 мм, объемная концентрация которых не превышает 1,5%.
          <br />
          <br />
          диспергаторы (НД, НДГ) предназначены для приготовления стойких эмульсий и паст из различных веществ в жидком и порошкообразном виде, применяется в химической, пищевой, фармацевтической промышленности
          <br />
          <br />
          пищевые насосы (НПП), предназначены для перекачивания воды и
          жидких продуктов низкой и средней вязкости
          <br />
          <br />
          Узлы торцовых уплотнений (на базе современных износостойких материалов) и системы охлаждения торцовых уплотнений к насосам, диспергаторам и другим ответственным изделиям;
          <br />
          <br />
          Технологические трубопроводы, сварные металлоконструкции;
          <br />
          <br />
          Торосферические днища для сосудов работающих под давлением.
          <br />
          <br />
          Баллоны для окиси этилена по собственному ТУ BY 100103729.026-2012.
      </div>
    </>
    
  )
};
