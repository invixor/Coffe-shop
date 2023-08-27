import bestBackground from '../ourBest/back.png';
import CoffeListItem from '../coffe-list-item/coffe-list-item';

const OurBest = ({data, onBestClick})=>{
    const bestElements = data.map(item=>{
        const {id, ...itemProps} = item;
        if (item.best === true) {
            return (
                <CoffeListItem
                key = {id} {...itemProps}
                onBestClick = {()=> onBestClick(id)}/>
            )
        }
        
    })

    return(
        <section className="best">
            <div className="best__container _container">
                <div className="best__body">
                    <div className="best__title">
                        <h1>Our best</h1>
                    </div>
                    <div className="best__list">
                        {bestElements}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBest;