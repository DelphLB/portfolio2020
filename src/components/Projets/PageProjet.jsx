import React, { useContext } from "react";
import "./pageprojet.css";
import { ThemeContext } from "../reusables/contexts/Theme";
import ThemeButton from "../reusables/contexts/ThemeButton";
import ProjetContainer from "./ProjetsContainer";
import Ridy from "../../assets/ridy.png";
import festoch from "../../assets/festoch.png";
import john from "../../assets/john.png";
import Links from "../reusables/Links";

function PageProjet() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='PageProjet'>
        <ThemeButton />
        <div className='ProjetList'>
          <div className='one'>
            <ProjetContainer
              image={festoch}
              name='BILLETERIE FESTIVAL'
              headline='Projet fictif en équipe de 5 personnes'
              description='Festoch-Fastoch est un site vous permettant de découvrir de nouveaux festivals selon le style muscial et de réserver vos billets'
              tools='React.js, Node.js, Express, MySQL Workbench, Postman'
              link='https://festochfastoch.herokuapp.com/'
            />
          </div>
          <div className='two'>
            <ProjetContainer
              image={Ridy}
              name='RIDY'
              headline='Hackaton de 24h sur le thème "Retour vers le futur" en équipe 5 de personnes'
              description='Le "Drivy du Moyen-Age", Ridy est une une application vous permettant de trouver et de réserver le cheval le plus proche de chez vous'
              tools='React.js, Node.js, Express, MySQL Workbench, Postman, API Google Maps'
              link='https://ridy.herokuapp.com/'
            />
          </div>
          <div className='three'>
            <ProjetContainer
              image={john}
              name='JONATHAN PAK - SPORT'
              headline='Projet pour un client coach sportif en équipe de 5 personnes / en cours de développement \ '
              description='Application permettant aux coachs sportifs de créer et de communiquer des programmes personnalisés à leurs clients ainsi que de suivre leurs progrès'
              tools='React.js, Redux, Node.js, Express, JWT, MySQL, Workbench, Postman'
            />
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default PageProjet;
