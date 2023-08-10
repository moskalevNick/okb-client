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
    },
    {
      id: 2,
      imgPath: kolonnaPageIMG,
    },
    {
      id: 3,
      imgPath: PortfolioPageIMG,
    },
  ];

  return (
    <div className={styles.promo}>
      <SliderBanner slides={slides} />
      <div className={styles.promoDescr}>
        <span>ЕМКОСТНОЕ ОБОРУДОВАНИЕ ВЫСОКОГО ДАВЛЕНИЯ </span> <br />
        ПРИНЦИПЫ ПРОЕКТИРОВАНИЯ И ПРОИЗВОДСТВЕННОГО ПРОЦЕССА
      </div>
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
