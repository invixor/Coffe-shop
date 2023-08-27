
import beansLogo from '../main/img/Beanslogo.svg'


const Main = (props)=> {
    const {onCoffeButtonClick} = props;
            return (
                <main className="main">
                    <div className="main__container _container">
                        <div className="main__body">
                            <div className="main__title">
                                <h1>Everything You Love About Coffee</h1>
                                <img src={beansLogo} alt="logo" />
                            </div>
                            <div className="main__text">
                            We makes every day full of energy and taste <br /> <br/>
                            Want to try our beans?
                            <button onClick={onCoffeButtonClick}>More</button>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }


    

export default Main;