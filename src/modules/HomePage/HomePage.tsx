import styles from './HomePage.module.css';
import HomePageIMG from '../../resources/img/HomePage.webp';
import PortfolioPageIMG from '../../resources/img/PortfolioPage.webp';
import kolonnaPageIMG from '../../resources/img/KolonnaPage.webp';

import { SliderBanner } from './SliderBanner/SliderBanner';

export const HomePage = () => {

  const slides = [
    {
      id: 1,
      imgPath: HomePageIMG,
      title: 'ЕМКОСТНОЕ ОБОРУДОВАНИЕ ВЫСОКОГО ДАВЛЕНИЯ',
      subTitle: 'ПРИНЦИПЫ ПРОЕКТИРОВАНИЯ И ПРОИЗВОДСТВЕННОГО ПРОЦЕССА',
      descr: 'Нестандартное оборудование, аппараты и реакторы на базе сосудов, работающих под давлением, для заказчиков химической, нефтегазового комплекса, нефтехимической, нефтеперерабатывающей, фармацевтической и пищевой промышленности.'
    },
    {
      id: 2,
      imgPath: kolonnaPageIMG,
      title: 'БОЛЬШАЯ ПРОИЗВОДСТВЕННАЯ БАЗА',
      subTitle: 'ДЛЯ РЕШЕНИЯ ЗАДАЧ ЗАКАЗЧИКА',
      descr: 'Средства и условия производства, позволяющие максимально эффективно производить продукцию'
    },
    {
      id: 3,
      imgPath: PortfolioPageIMG,
      title: 'ПОСТОЯННОЕ СОПРОВОЖДЕНИЕ',
      subTitle: 'И ОТЧЕТНОСТЬ ЗАКАЗЧИКУ НА ЛЮБОМ ЭТАПЕ ПРОИЗВОДСТВА',
      descr: 'Сотрудничество и образ работы с партнерами в условиях прозрачности с помощью предоставления грамотного планирования, отчетности, постоянной коммуникации на протяжении всего производственного процесса'
    },
  ];

  return (
    <div className={styles.promo}>
      <SliderBanner slides={slides} />
      {/* <div className={styles.promoDescr}>
        <span>ЕМКОСТНОЕ ОБОРУДОВАНИЕ ВЫСОКОГО ДАВЛЕНИЯ </span> <br />
        ПРИНЦИПЫ ПРОЕКТИРОВАНИЯ И ПРОИЗВОДСТВЕННОГО ПРОЦЕССА
      </div> */}
      {/* <div className={styles.promoRectangle}></div> */}
    </div>
    // <>
    //   <SliderBanner slides={slides}/>
    //   <div className={styles.promo}>
    //   <div className={styles.promoDescr}>
    //     <span>ЕМКОСТНОЕ ОБОРУДОВАНИЕ ВЫСОКОГО ДАВЛЕНИЯ </span> <br />
    //     ПРИНЦИПЫ ПРОЕКТИРОВАНИЯ И ПРОИЗВОДСТВЕННОГО ПРОЦЕССА
    //   </div>
    //   <div className={styles.promoRectangle}></div>
    // </div>
    // </>
    
  );
};
