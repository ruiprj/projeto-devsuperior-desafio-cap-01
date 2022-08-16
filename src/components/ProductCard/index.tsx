import './styles.css';

import ProductImg from 'assets/images/red-car.png';
import Button from 'components/Button';

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="base-card  product-search-card">
        <h1>Busca aqui!</h1>
      </div>

      <div className="base-card  product-main-card">
        <div className="product-image-content">
          <img src={ProductImg} alt="Nome do produto" />
        </div>

        <div className="product-main-content">
          <h4>Audi Supra TT</h4>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem
            é amistosis quis leo.Vehicula non
          </p>

          <div className="home-content-container-button">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
