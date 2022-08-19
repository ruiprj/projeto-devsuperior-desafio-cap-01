import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <Navbar />
      {/* container  my-4 */}
      <div>
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
