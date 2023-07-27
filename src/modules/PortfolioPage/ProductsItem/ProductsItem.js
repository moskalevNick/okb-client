import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styles from './ProductsItem.module.css'

const ProductsItem = () => {

    const {error, loading, product} = useTypedSelector(state => state.product)

    const {fetchProduct} = useActions()

    useEffect(() => {
        fetchProduct()
    }, [])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {product.map(product => 
                product.image ?
                <div key={product.id} className={styles.executedItem}>
                    <div 
                        className={styles.executedBlur}
                        style={{backgroundImage:product.image[0].type === 'productBackground' 
                        ? 
                        `url(${product.image[0].publicUrl})` 
                        : 
                        `url(${product.image[1].publicUrl})`}}
                    ></div>
                    <img src={product.image[0].type === 'productImage' ? product.image[0].publicUrl : product.image[1].publicUrl} alt="kolonnaMin" className={styles.executedItemIMG}/>
                    <div className={styles.executedItemWrap}>
                        <span className={styles.executedItemName}>{product.name}</span>
                        <br />
                        {product.client}
                        <br />
                        <br />
                        {product.description}
                        <div className={styles.executedItemBot}>
                        <div><span>Материалы:</span> {product.materials}</div>
                        <div><span>Сроки:</span> {product.time}</div>
                        </div>
                    </div>
                </div>
                : 
                <div>Идет загрузка</div>
            )}
        </>
    );
};

export default ProductsItem;