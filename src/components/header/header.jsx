


const Header = (props)=>{
   const {onCoffeButtonClick, onHomeButtonClick, onPleasureButtonClick} = props;
    return(
        
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__item" onClick = {onHomeButtonClick}>
                        <a href="">Coffe House</a>
                    </div>
                    <div className="header__item" onClick={onCoffeButtonClick}>
                        <a href="">Our Coffe</a>
                    </div>
                    <div className="header__item" onClick={onPleasureButtonClick}>
                        <a href="">For Your pleasure</a>
                    </div>
                </div>
            </div>
        </header>
    )
}




export default Header;