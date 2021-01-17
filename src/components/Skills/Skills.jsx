import React, { useContext } from "react";
import "./pageprojet.css";
import { ThemeContext } from "../reusables/contexts/Theme";
import ThemeButton from "../reusables/contexts/ThemeButton";
import SkillsContainer from "./SkillsContainer";

import Links from "../reusables/Links";

function Skills() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='PageProjet'>
        <ThemeButton />
        <div className='ProjetList'>
          <div className='scrol'>SCROLL DOWN /> </div>
          <div className='one'>
            <SkillsContainer
              name='DEVELOPPEMENT WEB FULLSTACK'
              headline='React / NodeJS'
              description='Formation de 6 mois à la Wild Code School de Bordeaux - 5 projets faits en équipes + 1 portfolio développé seule'
              tools='React.js, Redux, Node.js, Express, JWT, MySQL, Workbench, REST API, Postman, GitHub, TDD, Figma'
            />
          </div>
          <div className='two'>
            <SkillsContainer
              name='MARKETING DIGITAL & DESIGN WEB'
              headline='3 ans d&lsquo;expérience en Marketing Digital'
              description='Après des études en marketing (master), j&lsquo;ai travaillé pendant 3 ans en marketing digital dans les secteurs du toursime, du médical/esthétique et du mariage '
              tools='Photoshop, Illustrator, InDesign, bonnes pratiques SEO, SEO spider, Ahrefs, Adwords, Réseaux Sociaux, Emailing '
            />
          </div>
          <div className='three'>
            <SkillsContainer
              name='LANGUES'
              headline='Trilingue Français, Espagnol et Anglais'
              description='J&lsquo;ai eu l&lsquo;opportunité de pouvoir étudier puis travailler à l&lsquo;étranger pendant presque 4 ans. Une année et demie en Amérique du Sud (Argentine et Chili), une année en Australie puis une année en Espagne.'
            />
          </div>
          <div className='four'>
            <SkillsContainer
              name='METHODOLOGIES & TRAVAIL D&lsquo;EQUIPE'
              description='Méthodes agiles / SCRUM, travail d&lsquo;équipe, capacité à travaillé en remote et en autonomie'
              tools='Slack, Discord, Trello, Asana'
            />
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default Skills;
