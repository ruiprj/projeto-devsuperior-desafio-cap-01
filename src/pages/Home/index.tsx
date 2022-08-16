import MainImage from 'assets/images/main-image-yellow-car.png';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-card-image">
          <div className="home-image-container">
            <div className="home-image-container-content">
              <h1>O carro perfeito para você</h1>
              <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>

            <div>
              <img src={MainImage} alt="Imagem principal" />
            </div>
          </div>
        </div>

        <div className="base-card  home-card-content">
          <div className="home-content-container">
            <div className="home-content-container-button">
              <Button />
            </div>

            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
