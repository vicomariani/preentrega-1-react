const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize: '45px',
        color: 'white',
        textAlign: 'center',
        marginTop: '80px',        
        fontWeight: '600',
        textShadow: '2px 1px 4px rgb(19, 169, 19)'      
    }
    return (
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;