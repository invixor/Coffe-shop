import AllItem from "../all-item/all-item";


const CoffeList = ({data, onBestClick})=>{
    const elements = data.map(item=>{
        const {id, ...itemProps} = item;
        return (
            <AllItem
                key = {id} {...itemProps}
                onBestClick = {()=> onBestClick(id)}/>
        )
    })

    return (
        <div className="coffee-list">
            <div className="coffe-list__container _container">
                <div className="coffee-list__body">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default CoffeList;