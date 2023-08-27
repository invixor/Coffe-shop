import pleasureImg from '../coffePics/pleasure.png';
import coffeBeans from '../aboutUs/img/coffeBeans.png';

const PleasureAbout = ()=>{
    return(
        <div className="our-coffee">
            <div className="our-coffee__container _container">
                <div className="our-coffee__body">
                    <div className="our-coffee__img">
                        <img src={pleasureImg} alt="ourCoffe_logo" />
                    </div>
                    <div className="our-coffee__article article">
                        <div className="article__title">
                            <h1>About our beans</h1>
                            <img src={coffeBeans} alt="coffeeBeans" />
                        </div>
                        <div className="article__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br/><p>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PleasureAbout;