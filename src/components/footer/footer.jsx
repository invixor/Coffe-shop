import coffeBeans from '../aboutUs/img/coffeBeans.png';


const Footer = (props)=>{
    const {onCoffeButtonClick, onHomeButtonClick, onPleasureButtonClick} = props;
    return(
        <footer className="footer">
        <div className="footer__container _container">
            <div className="footer__body">
                <div className="footer__list">
                    <div className="footer__item" onClick={onHomeButtonClick}>
                        Coffe House
                    </div>
                    <div className="footer__item" onClick={onCoffeButtonClick}>
                        Our Coffe
                    </div>
                    <div className="footer__item" onClick={onPleasureButtonClick}>
                        For your pleasure
                    </div>
                </div>
                <div className="footer__logo">
                    <img src={coffeBeans} alt="logo" />
                </div>     
            </div>
        </div>
    </footer> 
    )
    
}


export default Footer;