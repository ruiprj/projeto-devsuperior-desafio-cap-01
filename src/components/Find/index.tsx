import Button from 'components/Button';
import './styles.css';

const Find = () => {
    return (
        <div className="find-content">
            <div>
                <input className="input-custom" type="text" placeholder='Digite sua busca' />
            </div>
            <div>
                <Button description='BUSCAR' width='77px' borderTopLeftRadius='0' borderBottomLeftRadius='0' />
            </div>
        </div>  
    )
}

export default Find;

