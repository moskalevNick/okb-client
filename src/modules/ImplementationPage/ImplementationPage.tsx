import React from 'react';
import  styles  from './ImplementationPage.module.css';
import Capacity1 from '../../resources/Implementation/Capacity1.webp'
import Capacity2 from '../../resources/Implementation/Capacity2.webp'
import Capacity3 from '../../resources/Implementation/Capacity3.webp'
import Capacity4 from '../../resources/Implementation/Capacity4.webp'

const ImplementationPage = () => {
    return (
        <>
        <div className={styles.promo}>
            <div className={styles.promoDescr}>
                <span>РЕАЛИЗАЦИЯ </span> <br />
                Емкостей, инструментов и технологического оборудования.
            </div>
            <div className={styles.promoRectangle}></div>
        </div>
        <div className={styles.promoPossibilities}>
            <div className={styles.possibilitiesWrap}>
                <div className={styles.possibilitiesItem}>
                    <div className={styles.possibilitiesTitle}>Емкость</div>
                    <div className={styles.possibilitiesImg}>
                        <img src={Capacity1} alt="Capacity1" />
                    </div>
                    <div className={styles.possibilitiesDescr}>
                        <span>Материал:</span> Сталь нержавеющая; <br />
                        <span>Объём, м³:</span> 1,25; <br />
                        <span>Диаметр наружный, мм:</span> 1000; <br />
                        <span>Высота, мм:</span> 1300; <br />
                        <span>Толщина стенки, мм:</span> 5; <br />
                    </div>
                </div>
                <div className={styles.possibilitiesItem}>
                <div className={styles.possibilitiesTitle}>Емкость</div>
                    <div className={styles.possibilitiesImg}>
                        <img src={Capacity2} alt="Capacity2" />
                    </div>
                    <div className={styles.possibilitiesDescr}>
                        <span>Материал:</span> Сталь нержавеющая; <br />
                        <span>Объём, м³:</span> 1,7; <br />
                        <span>Диаметр наружный, мм:</span> 1200; <br />
                        <span>Высота, мм:</span> 1500; <br />
                        <span>Толщина стенки, мм:</span> 6; <br />
                    </div>
                </div>
                <div className={styles.possibilitiesItem}>
                <div className={styles.possibilitiesTitle}>Емкость</div>
                    <div className={styles.possibilitiesImg}>
                        <img src={Capacity3} alt="Capacity3" />
                    </div>
                    <div className={styles.possibilitiesDescr}>
                        <span>Материал:</span> Сталь нержавеющая; <br />
                        <span>Объём, м³:</span> 3,2; <br />
                        <span>Диаметр наружный, мм:</span> 1600; <br />
                        <span>Высота, мм:</span> 2600; <br />
                        <span>Толщина стенки, мм:</span> 4; <br />
                    </div>
                </div>
                <div className={styles.possibilitiesItem}>
                <div className={styles.possibilitiesTitle}>Емкость на раме</div>
                    <div className={styles.possibilitiesImg}>
                        <img src={Capacity4} alt="Capacity4" />
                    </div>
                    <div className={styles.possibilitiesDescr}>
                        <span>Материал:</span> Сталь нержавеющая; <br />
                        <span>Объём, м³:</span> 2; <br />
                        <span>Диаметр наружный, мм:</span> 1500; <br />
                        <span>Высота, мм:</span> 2000; <br />
                        <span>Толщина стенки, мм:</span> 5; <br />
                    </div>
                </div>
                <div className={styles.possibilitiesItem}>

                </div>
                <div className={styles.possibilitiesItem}>

                </div>
                <div className={styles.possibilitiesItem}>

                </div>
                <div className={styles.possibilitiesItem}>

                </div>
            </div>
        </div>
        </>
        
    );
};

export default ImplementationPage;