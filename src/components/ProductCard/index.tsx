import './styles.css';

import CarsList from 'components/CarsList';
import Find from 'components/Find';

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="base-card  product-search-card">
        <Find description='BUSCAR' />
      </div>

      <div>
        <div className="row">
          <div className="col-sm-6  col-lg-4">
            <CarsList />
          </div>
          
          <div className="col-sm-6  col-lg-4">
            <CarsList />
          </div>
          
          <div className="col-sm-6  col-lg-4">
            <CarsList />
          </div>
          
          <div className="col-sm-6  col-lg-4">
            <CarsList />
          </div>
          
          <div className="col-sm-6  col-lg-4">
            <CarsList />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
