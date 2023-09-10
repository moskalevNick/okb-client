import ProductsItem from './ProductsItem/ProductsItem';
import { Slider } from './Slider/Slider';
import styles from './PortfolioPage.module.css';
import photo_1 from '../../resources/portfolio/portfolioSlides/photo_1.webp';
import photo_2 from '../../resources/portfolio/portfolioSlides/photo_2.webp';
import photo_3 from '../../resources/portfolio/portfolioSlides/photo_3.webp';
import photo_4 from '../../resources/portfolio/portfolioSlides/photo_4.webp';
import photo_5 from '../../resources/portfolio/portfolioSlides/photo_5.webp';
import photo_6 from '../../resources/portfolio/portfolioSlides/photo_6.webp';
import photo_7 from '../../resources/portfolio/portfolioSlides/photo_7.webp';
import photo_8 from '../../resources/portfolio/portfolioSlides/photo_8.webp';

export const PortfolioPage = () => {
  const slides1 = [
    {
      id: 1,
      imgPath: photo_1,
    },
    {
      id: 2,
      imgPath: photo_2,
    },
    {
      id: 3,
      imgPath: photo_3,
    },
    {
      id: 4,
      imgPath: photo_4,
    },
    {
      id: 5,
      imgPath: photo_5,
    },
    {
      id: 6,
      imgPath: photo_6,
    },
    {
      id: 7,
      imgPath: photo_7,
    },
    {
      id: 8,
      imgPath: photo_8,
    },
  ];

  // const slides2 = [
  //   {
  //     id: 1,
  //     imgPath: photo_5,
  //   },
  //   {
  //     id: 2,
  //     imgPath: photo_6,
  //   },
  //   {
  //     id: 3,
  //     imgPath: photo_7,
  //   },
  //   {
  //     id: 3,
  //     imgPath: photo_8,
  //   },
  // ];

  return (
    <>
      <div className={styles.promo}>
        <div className={styles.promoDescr}>
          <span>ПОРТФОЛИО</span> <br />
          Выполненные заказы и возможности предприятия
        </div>
        <div className={styles.promoRectangle}></div>
      </div>
      <div className={styles.executed}>
        <ProductsItem />
      </div>
      <div className={styles.possibilities}>
        <div className={styles.possibilitiesTitle}>Наши возможности</div>
        <p>
          Нестандартное оборудование, аппараты и реакторы на базе сосудов,
          работающих под давлением, по тз заказчиков химической, нефтегазового
          комплекса, нефтехимической, нефтеперерабатывающей, фармацевтической и
          пищевой промышленности.
        </p>
        {/* <article className={styles.slidesWrap}>
          <Slider slides={slides1} />
        </article> */}
        <div className={styles.possibilitiesDescr}>
          <ul>
            <li>Технологическое оборудование для систем химической подготовки и дезактивации воды для атомных электрических станций (АЭС) (для БелАЭС);</li>
            <li>Емкостное, сепарационное и нагревательное оборудование для очистки попутного нефтяного газа низкого и высокого давления;</li>
            <li>Фильтры для химподготовки воды ( ионитные, катионитные, смешанного действия, обезжелезивающие, ловушки и др.), производительностью до 450м3/ч и рабочим давлением 6 атм;</li>
            <li>Мерники спирта и других технических жидкостей образцовые и технические вместимостью от 750 л до 10000 л;</li>
            <li>Теплообменное оборудование (кожухотрубные теплообменники на базе гладких и гофрированных труб) для подогрева и охлаждения технических сред и пищевых продуктов;</li>
            <li>Резервуары и аппараты на их базе для хранения и обработки продуктов в химической, нефтехимической, нефтеперерабатывающей, фармацевтической и пищевой промышленности;</li>
          </ul>

          <span>Технологическое оборудование для модернизации критических стендов <br />
          «Кристалл» и «Гиацинт»:</span>

          <ul>
            <li>Криогенные емкости;</li>
            <li>Воздухосборники, объемом от 1 м3 до 20м3 и рабочим давлением от 8 атм до 40 атм;</li>
            <li>Ресиверы различных газов, объемом до 20м3 и рабочим давлением до 12 атм.</li>
          </ul>

        </div>
        <p>Насосы:</p>
        {/* <article className={styles.slidesWrap}>
          <Slider slides={slides2} />
        </article> */}
        <div className={styles.possibilitiesDescr}>
          <ul>
            <li>консольные химические (НКХ) предназначены для перекачивания химически активных и нейтральных жидкостей плотностью не более 1850 кт/м3, вязкостью до 30*10-6 м2/с, содержащих твердые включения размером до 1 мм, объемная концентрация которых не превышает 1,5%;</li>
            <li>диспергаторы (НД, НДГ) предназначены для приготовления стойких эмульсий и паст из различных веществ в жидком и порошкообразном виде, применяется в химической, пищевой, фармацевтической промышленности;</li>
            <li>пищевые насосы (НПП), предназначены для перекачивания воды и жидких продуктов низкой и средней вязкости;</li>
            <li>Узлы торцовых уплотнений (на базе современных износостойких материалов) и системы охлаждения торцовых уплотнений к насосам, диспергаторам и другим ответственным изделиям;</li>
            <li>Технологические трубопроводы, сварные металлоконструкции;</li>
            <li>Торосферические днища для сосудов работающих под давлением;</li>
            <li>Баллоны для окиси этилена по собственному ТУ BY 100103729.026-2012.</li>
          </ul>
        </div>
        <article className={styles.slidesWrap}>
          <Slider slides={slides1} />
        </article>
      </div>
    </>
  );
};
