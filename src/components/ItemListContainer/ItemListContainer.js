import Estilos from '../css/App.module.css';

const ItemListContainer = ({greeting}) => {
    return(
        <div className={Estilos.greeting}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;