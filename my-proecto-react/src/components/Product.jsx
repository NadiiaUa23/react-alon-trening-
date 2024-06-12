
export const Product = ({ name, imgUrl, price }) => {
    return (
      <div>
        <h2>{name}</h2>
              <img src={imgUrl} alt={name} width="480" />
              <p>Price: {price} credits</p>
      </div>
    );
  };
  };
  
    
    export default Product;
    

    /*
    Пропси використовуються для передачі 
    динамічних значень для компонента, наприклад,
     для використання в JSX-розмітці, використовуючи
      синтаксис {}. 
    */