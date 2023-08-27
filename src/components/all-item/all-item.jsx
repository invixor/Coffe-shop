import CoffeItemPic from '../coffe-list-item/coffe_item.png';


const AllItem = (props)=>{
    const {name, country, price, onBestClick} = props;
    return (
        <div className="all-item"
        onClick={onBestClick}>
            <div className="all-item__pic">
                <img src={CoffeItemPic} alt="coffeImage" />
            </div>
            <div className="all-item__prop">
                <h2>{name}</h2>
                {country} <br /> <br/>
                <span>{price}</span>
            </div>
        </div>
    )
}
export default AllItem;