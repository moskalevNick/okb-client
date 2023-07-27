import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styles from './ProductsItem.module.css';
import { productType } from '../../../types/product';

const ProductsItem = () => {
  const { error, loading, products } = useTypedSelector(
    (state) => state.products
  );

  const { fetchProduct } = useActions();

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const findBg = (product: productType) => {
    let currenBackground = { backgroundImage: 'none' };
    product.image.forEach((image) => {
      if (image.type === 'productBackground') {
        currenBackground = { backgroundImage: `url(${image.publicUrl})` };
      }
    });
    return currenBackground;
  };

  const findImg = (product: productType) => {
    let currenImg = ''; //in future set default image
    product.image.forEach((image) => {
      if (image.type === 'productImage') {
        currenImg = image.publicUrl;
      }
    });
    return currenImg;
  };

  return (
    <>
      {products.map((product: productType) =>
        product.image ? (
          <div key={product.id} className={styles.executedItem}>
            <div className={styles.executedBlur} style={findBg(product)}></div>
            <img
              src={findImg(product)}
              alt='kolonnaMin'
              className={styles.executedItemIMG}
            />
            <div className={styles.executedItemWrap}>
              <span className={styles.executedItemName}>{product.name}</span>
              <br />
              {product.client}
              <br />
              <br />
              {product.description}
              <div className={styles.executedItemBot}>
                <div>
                  <span>Материалы:</span> {product.materials}
                </div>
                <div>
                  <span>Сроки:</span> {product.time}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key={'default'}>Идет загрузка</div>
        )
      )}
    </>
  );
};

export default ProductsItem;
