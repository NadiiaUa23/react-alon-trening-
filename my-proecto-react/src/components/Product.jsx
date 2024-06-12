
export const Product = props => {
    return (
      <div>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} width="480" />
			<p>Price: {props.price} credits</p>
      </div>
    );
  };
  
    
    export default Product;
    

    /*
    Пропси використовуються для передачі 
    динамічних значень для компонента, наприклад,
     для використання в JSX-розмітці, використовуючи
      синтаксис {}. 
    */