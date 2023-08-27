import coffeeItemPage from '../coffePics/coffe_page.png';
import coffeBeans from '../aboutUs/img/coffeBeans.png';

const CoffeeItem = ({data})=>{
    const clickedItem = data.filter((item) => item.clicked === true);

    return(
        <div className="product">
            <div className="product__container _container">
                <div className="product__body">
                    <div className="product__img">
                        <img src={coffeeItemPage} alt="coffee_logo" />
                    </div>
                    <div className="product__description description">
                        <div className="description__title">
                            <h1>About it</h1>
                            <img src={coffeBeans} alt="coffeBeans" />
                        </div>
                        <div className="description__text text">
                            <div className="text__item">
                                <span>Country: </span>{clickedItem[0].country}
                            </div>
                            <div className="text__item">
                                <span>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="text__item">
                                <span>Price: </span><h2>{clickedItem[0].price}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CoffeeItem;