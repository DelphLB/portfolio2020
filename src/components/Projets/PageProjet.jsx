import React, { useContext } from "react";
import "./pageprojet.css";
import { ThemeContext } from "../reusables/contexts/Theme";
import ThemeButton from "../reusables/contexts/ThemeButton";
import ProjetContainer from "./ProjetsContainer";
import Ridy from "../../assets/ridy.png";
import festoch from "../../assets/festoch.png";
import john from "../../assets/john.png";
import Links from "../reusables/Links";
import cookeat from "../../assets/cookeat.png";

function PageProjet() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='PageProjet'>
        <ThemeButton />
        <div className='ProjetList'>
          <div className='scrol'>SCROLL DOWN /> </div>
          <div className='one'>
            <ProjetContainer
              image={john}
              name='JONATHAN PAK - SPORT'
              headline='Projet pour un client coach sportif en équipe de 5 personnes  '
              description='Application permettant aux coachs sportifs de créer et de communiquer des programmes personnalisés à leurs clients ainsi que de suivre leurs progrès'
              tools='React.js, Redux, Node.js, Express, JWT, MySQL, Workbench, Postman'
            />
          </div>
          <div className='two'>
            <ProjetContainer
              image={cookeat}
              name='COOK&lsquo;EAT - LIVES CULINAIRES'
              headline='Projet gagnant - Hackathon de 48h sur le thème "Créer du lien en période de confinement" organisé par Ekino et la Wild Code School '
              description='COOK&lsquo;EAT est une application permettant à ses utilisateurs de partager leurs meilleures recettes de cuisine et d&lsquo;organiser des lives culinaires'
              tools='React.js, Redux, Node.js, Express, JWT, MySQL, Workbench, Postman, Twilio, Firebase'
              link='https://cook-eat.netlify.app/'
            />
          </div>
          <div className='three'>
            <ProjetContainer
              image={festoch}
              name='BILLETERIE FESTIVAL'
              headline='Projet fictif en équipe de 5 personnes'
              description='Festoch-Fastoch est un site vous permettant de découvrir de nouveaux festivals selon le style muscial et de réserver vos billets'
              tools='React.js, Node.js, Express, MySQL Workbench, Postman'
              link='https://festochfastoch.herokuapp.com/'
            />
          </div>
          <div className='four'>
            <ProjetContainer
              image={Ridy}
              name='RIDY'
              headline='Hackathon de 24h sur le thème "Retour vers le futur" en équipe 5 de personnes'
              description='Le "Drivy du Moyen-Age", Ridy est une une application vous permettant de trouver et de réserver le cheval le plus proche de chez vous'
              tools='React.js, Node.js, Express, MySQL Workbench, Postman, API Google Maps'
              link='https://ridy.herokuapp.com/'
            />
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default PageProjet;
