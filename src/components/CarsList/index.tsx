import './styles.css';

import ProductImg from 'assets/images/red-car.png';
import Button from 'components/Button';

const CarsList = () => {
  return (
    <div className="base-card  product-main-card">
      <div className="product-image-content">
        <img src={ProductImg} alt="Nome do produto" />
      </div>

      <div className="product-main-content">
        <div className="product-main-content-description">
          <h4>Audi Supra TT</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>

        <div className="home-content-container-button">
          <Button description="VER CATÁLOGO" />
        </div>
      </div>
    </div>
  );
};

export default CarsList;
