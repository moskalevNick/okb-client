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
            <div className={styles.enumerationWrap}>
                <div className={styles.enumerationEquipment}>
                    <div className={styles.enumerationTitle}>Перечень неиспользуемого технологического оборудования для реализации</div>
                    <div className={styles.Equipment}>
                    1. Координатно-расточной станок, мод. 2411, инв.№ 0100331, 1977 г.в.; <br />
                    2. Круглошлифовальный станок, мод. 3М132В, инв.№ 0100342, 1989 г.в.; <br />
                    3. Внутришлифовальный станок, мод. 3К227В, инв.№ 0101477, 1971 г.в.; <br />
                    4. Токарно-винторезный станок, мод. 1К625, инв.№ 0100306, 1971 г.в.; <br />
                    5. Токарно-винторезный станок, мод. 1К625, инв.№ 0100281, 1971 г.в.; <br />
                    6. Токарно-винторезный станок, мод. 163, инв.№ 0100493; <br />
                    7. Токарно-револьверный станок, мод. 1Е65БП, инв.№ 0100448, 1990 г.в.; <br />
                    8. Горизонтально-фрезерный станок, мод. 6Р82, инв.№ 0100291; <br />
                    9. Горизонтально-фрезерный станок, мод. 6М82, инв.№ 0100292, 1971 г.в.; <br />
                    10. Сталлаж элеваторного типа СЕТ-3, инв.№ 0100398/4; <br />
                    11. Сталлаж элеваторного типа СЕТ-3, инв.№ 0100398/5; <br />
                    12. Сталлаж элеваторного типа СЕТ-3, инв.№ 0101665. <br />
                    </div>
                </div>
                <div className={styles.enumerationTool}>
                    <div className={styles.enumerationGradient}></div>
                    <div className={styles.enumerationTitle}>Перечень реализуемого инструмента</div>
                    <div className={styles.enumerationSubTitle}>
                        <span>Наименование</span>
                        <span>кол-во</span>
                    </div>
                    <div className={styles.Tool}>
                        <div className={styles.Name}>
                            Сверло ф0,28ц/х Р6М5 <br/>
                            Сверло ф0,3ц/х <br/>
                            Сверло 0,4ц/х <br/>
                            Сверло ф2,2 <br/>
                            Сверло ф2,3 ц/х <br/>
                            Сверло ф2,7 ц/х <br/>
                            Сверло ф 2,9 ц/х <br/>
                            Сверло ф6,7 ц/х Р6М5 <br/>
                            Сверло ф 7,2 ц/х Р6М5 <br/>
                            Сверло ф7,5 к/х Р6М5К5;ВК1 <br/>
                            Сверло ф 7,6 ц/х <br/>
                            Сверло ф7,8 к/х Р6М5 <br/>
                            Сверло ф 8,8ц/х Р6М5 <br/>
                            Сверло ф9 к/х Р6М5 2301-0393 <br/>
                            Сверло ф9,1 ц/х ТИЗ <br/>
                            Сверло ф 9,2 к/х Р6М5 ТИЗ удл.2301-5233 <br/>
                            Сверло ф9,5ц/х Р6М5 <br/>
                            Сверло ф 9,7 ц/х Р6М5К5 <br/>
                            Сверло ф9,8 ц/х Р6М5 <br/>
                            Сверло ф 10,8 ц/х Р6М5 <br/>
                            Сверло ф14,5 к/х HSS удл L=215;lp=120 <br/>
                            Сверло ф12,2 к/х Р6М5 удл. <br/>
                            Сверло ф9,0 к/х удл. Р6М5 <br/>
                            Сегменты для пил ф1430 <br/>
                            Зенкер ф10,19 Р6М5 <br/>
                            Зенкер Ф10,19х65 Р6М5 <br/>
                            Зенкер ф10,27 к/х Р6М5 <br/>
                            Зенкер ф11 к/х Р6М5 <br/>
                            Зенкер ф11,1х95 к/х Р6М5 <br/>
                            Зенкер ф11,35х90 к/х Р6М5 <br/>
                            Зенкер ф11,59 к/х Р6М5 <br/>
                            Зенкер ф12х95 к/х Р6М5 <br/>
                            Зенкер ф26 Р6М5 <br/>
                            Метчик гаечн.М16х1,5 2620-4003 <br/>
                            Метчик компл. М12х1,5 <br/>
                            Метчик компл.М12х1,5 HSS <br/>
                            Метчик М14х1,5 Р6М5;HSS <br/>
                            Метчик М2,5х0,45 <br/>
                            Метчик М2х0,4 <br/>
                            Метчик М3х0,35 <br/>
                            Метчик М5х0,5 <br/>
                            Метчик трубн.1/2 <br/>
                            Метчик М3х0,5 <br/>
                            Метчик М3,5х0,6 <br/>
                            Метчик М18х1,5 компл. <br/>
                            Метчик М20х2,5 <br/>
                            Метчик М3х0,5 гаечн. <br/>
                            Развертка ручн.ф4 ц/х <br/>
                            Развертка ручн. ф3 ц/х <br/>
                            Развертка ручн. ф5 ц/х <br/>
                            Развертка маш. Ф4 ц/х <br/>
                            Фреза конц ф32 к/х Р6М5 <br/>
                            Фреза шпоночная ф3 ц/х <br/>
                            Фреза шпоночная ф18 ц/х Р6М5 <br/>
                            Фреза шпоночная ф18 к/х <br/>
                            Фреза отрезн. 50х1 Р6М5 <br/>
                            Фреза отрезн. 50х2 Р6М5 <br/>
                            Фреза отрезн.80х1,2 Р6М5 <br/>
                            Фреза отрезн.80х1,4 Р6М5 <br/>
                            Фреза отрезн. 80х1,6 Р6М5 <br/>
                            Фреза отрезн.80х2 Р6М5 <br />
                            Плашка 3х0,5 <br />
                            Напильник плоск.250 №4 <br />
                            Напильник плоск.200 №4 <br />
                            Напильник плоск. 200 №2 <br />
                            Напильник плоск. 150 №3 <br />
                            Напильник кругл. 400 №2 <br />
                            Напильник кругл. 300 №3 <br />
                            Ключ гаечный 4х5 <br />
                            Бородок <br />
                            Алмазная головка 3х4х40х3 <br />
                            Алмазная головка 3х6х40х3 <br />
                            Алмазная головка 4х6х40х4 <br />
                            Алмазная головка 5х8х60х3 <br />
                            Алмазная головка 6х10х60х3 <br />
                            Алмазная головка 6х6х2 <br />
                            Резец электрограверный <br />
                            Тверд. сплав.пласт. 02251ВК <br />
                            Тверд.сплавн.пласт.06330ВК <br />
                            Тверд.сплав пласт. 07120ВК <br />
                        </div>
                        <div className={styles.quantity}>
                            100 <br/>
                            450 <br/>
                            60 <br/>
                            50 <br/>
                            100 <br/>
                            60 <br/>
                            60 <br/>
                            60 <br/>
                            300 <br/>
                            20 <br/>
                            20 <br/>
                            50 <br/>
                            10 <br/>
                            20 <br/>
                            10 <br/>
                            20 <br/>
                            150 <br/>
                            10 <br/>
                            100 <br/>
                            10 <br/>
                            60 <br/>
                            10 <br/>
                            50 <br/>
                            330 <br/>
                            60 <br/>
                            200 <br/>
                            110 <br/>
                            20 <br/>
                            100 <br/>
                            80 <br/>
                            30 <br/>
                            60 <br/>
                            5 <br/>
                            20 <br/>
                            10 <br/>
                            40 <br/>
                            110 <br/>
                            100 <br/>
                            230 <br/>
                            100 <br/>
                            20 <br/>
                            40 <br/>
                            1000 <br/>
                            60 <br/>
                            50 <br/>
                            50 <br/>
                            50 <br/>
                            100 <br/>
                            60 <br/>
                            100 <br/>
                            20 <br/>
                            10 <br/>
                            60 <br/>
                            30 <br/>
                            70 <br />
                            200 <br />
                            50 <br />
                            150 <br />
                            20 <br />
                            100 <br />
                            20 <br />
                            100 <br />
                            150 <br />
                            80 <br />
                            60 <br />
                            200 <br />
                            50 <br />
                            300 <br />
                            50 <br />
                            100 <br />
                            43 <br />
                            36 <br />
                            78 <br />
                            48 <br />
                            15 <br />
                            45 <br />
                            878 <br />
                            147 <br />
                            12170 <br />
                            210 <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default ImplementationPage;