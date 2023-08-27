import { Component } from "react";


class SearchPannel extends Component {
    constructor (props){
        super (props);
        this.state = {
            term:''
        }
    }

    onUpdateSearch = (e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }


    render() {
        return(
            <div className="search-panel">
                Looking for  
                <input type="text"
                className="search-panel__search"
                placeholder="start typing here..."
                value = {this.state.term} 
                onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPannel;