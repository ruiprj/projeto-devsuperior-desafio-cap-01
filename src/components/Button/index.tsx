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

const Button = ({ description = 'CLIQUE AQUI', width = '174px', borderTopLeftRadius = '0.375rem', borderBottomLeftRadius = '0.375rem' }) => {
    return (
        <button className="btn  btn-custom" style={{ width: width, borderTopLeftRadius: borderTopLeftRadius, borderBottomLeftRadius: borderBottomLeftRadius }}>
            <h6>{ description }</h6>
        </button>
    );
}

export default Button;
