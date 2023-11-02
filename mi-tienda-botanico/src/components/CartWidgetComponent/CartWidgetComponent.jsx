import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {
    const iconStyles = {
        fontSize: '25px',
        paddingRight: '8px',
        color: 'rgb(19, 169, 19)'
    }
    const numStyles = {
        fontSize: '20px',
        color: 'rgb(19, 169, 19)',
        fontWeight: '500'        
    }

    return (
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span style={numStyles} >10</span>
        </div>
    )
}

export default CartWidgetComponent;