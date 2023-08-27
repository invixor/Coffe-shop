

const AppFilter = (props)=>{
    const buttonsData =[
        {name:'Brazil', label: 'Brazil'},
        {name:'Kenya', label: 'Kenya'},
        {name:'Columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label})=>{
        const active = props.filter === name;
        const clazz = active ? 'filter-button_active' : 'filter-button';
        return(
            <button className={`${clazz}`}
            type="button"
            key = {name}
            onClick = {()=>props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return(
        <div className="filter">
            Or filter
            {buttons}
        </div>
    )
}

export default AppFilter;