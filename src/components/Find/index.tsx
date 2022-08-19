import './styles.css';

const Find = ({ description = 'CLIQUE AQUI'}) => {
  return (
    <div className="find-content">
      <div>
        <input className="input-custom" type="text" placeholder="Digite sua busca" />
      </div>
      <div className="teste">
        <button className="btn  base-btn  btn-find-custom" >
          <h6>{ description }</h6>
        </button>
      </div>
    </div>
  );
};

export default Find;
