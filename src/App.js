import logo from './logo.svg';
import './App.css';
import './styles/style.scss';


import { Component } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/aboutUs/about';
import OurBest from './components/ourBest/ourBest';
import Footer from './components/footer/footer';
import MainCoffee from './components/main-coffe/main-coffe';
import CoffeeItem from './components/coffee-item/coffee-item';
import OurCoffee from './components/about-coffee/about-coffee';
import CoffeList from './components/coffee-list/coffee-list';
import AppFilter from './components/app-filter/app-filter';
import SearchPannel from './components/search-panel/search-panel';
import PleasureMain from './components/pleasure-main/pleasure-main';
import PleasureAbout from './components/pleasure-about/pleasure-about';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1, best: true, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2, best: true, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3, best: true, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4, best: false, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5, best: false, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6, best: false, clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 7, best: false,clicked: false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 8, best: false,clicked: false}
      ],
      headerState: 'home',
      term:'',
      filter: 'all'
    }
  }

 onHomeButtonClick = (e)=>{
  
  this.setState(() =>{
    return {
      headerState:'home'
    }
  });
 }

 onCoffeButtonClick = (e)=>{
  e.preventDefault();
  this.setState(() =>{
    return {
      headerState:'coffee'
    }
  });
 }

 onPleasureButtonClick = (e)=>{
  e.preventDefault();
  this.setState(() =>{
    return {
      headerState:'pleasure'
    }
  });
 }


 onBestClick = (id)=>{
  this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id);

    const old = data[index];
    const newItem = {...old, clicked: !old.clicked};
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return{
      data:newArr
    }
  })

  this.setState(() =>{
    return {
      headerState:'itemClicked'
    }
  })
 }

 onUpdateSearch = (term)=>{
  this.setState({term});
 }


 searchEmp = (items, term)=>{
  if (term.length === 0){
      return items;
  }
  return items.filter(item => {
      return item.name.indexOf(term) > -1
  })
}

 filterPost = (items, filter) =>{
        switch (filter){
            case 'Brazil': 
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya': 
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia' :
                return  items.filter(item => item.country === 'Columbia'); 
            default:
                return items
        }
    }


    onFilterSelect = (filter) =>{
        this.setState({filter});
    }


  render(){
    const {headerState, data, term, filter} = this.state;
    const visibleData = this.filterPost (this.searchEmp(data, term), filter);
    if (headerState === 'home'){
      return(
        <div className="wrapper">
          <Header
          onHomeButtonClick = {this.onHomeButtonClick}
          onCoffeButtonClick = {this.onCoffeButtonClick}
          onPleasureButtonClick = {this.onPleasureButtonClick}/>
         <Main
         onCoffeButtonClick = {this.onCoffeButtonClick}/>
         <About/>
         <OurBest 
         data = {data}
         onBestClick = {this.onBestClick}/>
         <Footer
         onHomeButtonClick = {this.onHomeButtonClick}
         onCoffeButtonClick = {this.onCoffeButtonClick}
         onPleasureButtonClick = {this.onPleasureButtonClick}/>
        </div>
      )
    } 
    if (headerState === 'itemClicked'){
      return(
        <div className="wrapper">
          <Header
          onHomeButtonClick = {this.onHomeButtonClick}
          onCoffeButtonClick = {this.onCoffeButtonClick}
          onPleasureButtonClick = {this.onPleasureButtonClick}/>
          <MainCoffee/>
          <CoffeeItem
          data = {data}/>
          <Footer
          onHomeButtonClick = {this.onHomeButtonClick}
          onCoffeButtonClick = {this.onCoffeButtonClick}
          onPleasureButtonClick = {this.onPleasureButtonClick}/>
        </div>
      )
    } 
    if (headerState === 'coffee') {
      return(
        <div className="wrapper">
          <Header
          onHomeButtonClick = {this.onHomeButtonClick}
          onCoffeButtonClick = {this.onCoffeButtonClick}
          onPleasureButtonClick = {this.onPleasureButtonClick}/>
          <MainCoffee/>
          <OurCoffee/>
          <div className="panel">
            <div className="panel__container _container">
                <div className="panel__body">
                <SearchPannel
                onUpdateSearch = {this.onUpdateSearch}/>
                <AppFilter
                filter = {filter}
                onFilterSelect = {this.onFilterSelect}/>
                </div>
            </div>
          </div>
          
          <CoffeList
          data = {visibleData}
          onBestClick={this.onBestClick}
         />
          <Footer
          onHomeButtonClick = {this.onHomeButtonClick}
          onCoffeButtonClick = {this.onCoffeButtonClick}
          onPleasureButtonClick = {this.onPleasureButtonClick}/>
        </div>
      )
    } 
    if (headerState === 'pleasure') {
      return(
        <div className="wrapper">
          <Header
            onHomeButtonClick = {this.onHomeButtonClick}
            onCoffeButtonClick = {this.onCoffeButtonClick}
            onPleasureButtonClick = {this.onPleasureButtonClick}/>
          <PleasureMain/>
          <PleasureAbout/>
          <CoffeList
            data = {visibleData}
            onBestClick={this.onBestClick}
         />
         <Footer
            onHomeButtonClick = {this.onHomeButtonClick}
            onCoffeButtonClick = {this.onCoffeButtonClick}
            onPleasureButtonClick = {this.onPleasureButtonClick}/>
        </div>
        

      )
    }
    
  }
}

export default App;
