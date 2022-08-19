import './styles.css';

// const Button = () => {
//     return (
//         <button className="btn  btn-custom">
//             <h6>VER CATÁLOGO</h6>
//         </button>
//     );
// }
// 
// export default Button;

const Button = ({ description = 'CLIQUE AQUI', width = '174px' }) => {
    return (
        <button className="btn  base-btn  btn-custom" style={{ width: width }}>
            <h6>{ description }</h6>
        </button>
    );
}

export default Button;
