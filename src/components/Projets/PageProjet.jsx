import React, { useContext } from "react";
import "./pageprojet.css";
import {
  ThemeContext,
  ThemeContextProvider,
} from "../reusables/contexts/Theme";
import ThemeButton from "../reusables/contexts/ThemeButton";
import ProjetContainer from "./ProjetsContainer";
import "../../assets/ridy.png";
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
              image='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
              name='patate'
              description=' patate'
              link='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
            />
          </div>
          <div className='two'>
            <ProjetContainer
              image='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
              name='patate'
              description=' patate'
              link='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
            />
          </div>
          <div className='three'>
            <ProjetContainer
              image='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
              name='patate'
              description=' patate'
              link='https://www.goktepeliler.com/attachments/goktepeliler-17-png.100438/'
            />
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
}

export default PageProjet;
