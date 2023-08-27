import CoffeItemPic from '../coffe-list-item/coffe_item.png'

const CoffeListItem = (props)=>{
    const {name, country, price, onBestClick} = props;
    return(
        <div className="coffe-list__item item"
        onClick={onBestClick}>
            <div className="item__pic">
                <img src={CoffeItemPic} alt="coffeImage" />
            </div>
            <div className="item__prop">
                <h2>{name}</h2>
                {country} <br /> <br/>
                {price}
            </div>
        </div>
    )
}

export default CoffeListItem;