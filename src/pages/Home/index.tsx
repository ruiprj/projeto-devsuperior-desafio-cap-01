import MainImage from 'assets/images/main-image-yellow-car.png';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <img src={MainImage} alt="Imagem principal" />

            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>

          <div className="home-content-container">
            <h1>botão aqui!</h1>

            <p>Comece agora a navegar</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
