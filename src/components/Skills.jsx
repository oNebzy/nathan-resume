import React from "react";

import redux from "../assets/logos/redux.png";
import eclipse from"../assets/logos/eclipse.png";
import css from "../assets/logos/css.png";
import Dart from "../assets/logos/Dart.png";
import eas from "../assets/logos/eas.png";
import expo from "../assets/logos/expo.png";
import firebase from "../assets/logos/firebase.png";
import git from "../assets/logos/git.png";
import html from "../assets/logos/html.png";
import java from "../assets/logos/java.png";
import javascript from "../assets/logos/javascript.png";
import jira from "../assets/logos/jira.png";
import MUI from "../assets/logos/MUI.png";
import netlify from "../assets/logos/netlify.png";
import npm from "../assets/logos/npm.png";
import react from "../assets/logos/react.png";
import Sass from "../assets/logos/Sass.png";
import stripe from "../assets/logos/stripe.png";
import tailwind from "../assets/logos/tailwind.png";
import Typescript from "../assets/logos/Typescript.png";
import VScode from "../assets/logos/VScode.png";
import workato from "../assets/logos/workato.png";
import xcode from "../assets/logos/xcode.png";
import yarn from "../assets/logos/yarn.png";
import zapier from "../assets/logos/zapier.png";
import figma from "../assets/logos/figma.png";
import androidStudio from "../assets/logos/androidStudio.png";
import intelliJ from "../assets/logos/intelliJ.png";
import BigQuery from "../assets/logos/BigQuery.png";
import DataStudio from "../assets/logos/DataStudio.png";
import python from "../assets/logos/python.png";


const Skills = () => {
  return (
    <div name="Skills" className="w-full min-h-screen bg-[#d3ece2] mb-36 sm:mb-0">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full">
        {/* header container */}
        <div className="mt-[20px]">
          <p className="font-Kaushanscript text-[#7b857f]">{"<h1>"}</p>
          <p className="text-[#358f60] italic font-bold md:text-6xl text-4xl">
            Skills {"&"} Experience
          </p>
          <p className="font-Kaushanscript text-[#7b857f]">{"<h1/>"}</p>
        </div>

        {/* text container */}
        <div>
          <p className="text-[#637269] mt-3">
            The scope of my work and experience has given me the opportunity to
            work with multiple technologies and industries. From retail to
            agriculture, medical to education, I've been able to produce and
            deliver quality solutions and applications.
          </p>
          <p className="mt-6 text-[#637269]">
            These are the technologies I've worked with recently:
          </p>
        </div>

        {/* tech tiles container */}
        <div className="w-full grid grid-cols-4 md:grid-cols-8 gap-3 text-center text-white font-medium sm:text-sm text-xs">
          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={react} alt={""} className="max-h-10"></img>
            </div>
            <div>React</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={react} alt={""} className="max-h-10"></img>
            </div>
            <div>React Native</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={javascript} alt={""} className="max-h-10"></img>
            </div>
            <div>JavaScript</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Typescript} alt={""} className="max-h-10"></img>
            </div>
            <div>TypeScript</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={html} alt={""} className="max-h-10"></img>
            </div>
            <div>HTML</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly  hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={css} alt={""} className="max-h-10"></img>
            </div>
            <div>CSS</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Sass} alt={""} className="max-h-10"></img>
            </div>
            <div>Sass</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={tailwind} alt={""} className="max-h-10"></img>
            </div>
            <div>Tailwind</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={java} alt={""} className="max-h-10"></img>
            </div>
            <div>Java</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Dart} alt={""} className="max-h-10"></img>
            </div>
            <div>Dart</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={python} alt={""} className="max-h-10"></img>
            </div>
            <div>Python</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={redux} alt={""} className="max-h-10"></img>
            </div>
            <div>Redux</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={MUI} alt={""} className="max-h-10"></img>
            </div>
            <div>MUI</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={VScode} alt={""} className="max-h-10"></img>
            </div>
            <div>VSCode</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={xcode} alt={""} className="max-h-10"></img>
            </div>
            <div>Xcode</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={eclipse} alt={""} className="max-h-10"></img>
            </div>
            <div>Eclipse</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={androidStudio} alt={""} className="max-h-10"></img>
            </div>
            <div>Android Studio</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={intelliJ} alt={""} className="max-h-10"></img>
            </div>
            <div>IntelliJ</div>
          </div>


          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={expo} alt={""} className="max-h-10"></img>
            </div>
            <div>Expo</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={eas} alt={""} className="max-h-10"></img>
            </div>
            <div>EAS</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={npm} alt={""} className="max-h-10"></img>
            </div>
            <div>npm</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={yarn} alt={""} className="max-h-10"></img>
            </div>
            <div>Yarn</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={firebase} alt={""} className="max-h-10"></img>
            </div>
            <div>Firebase</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={netlify} alt={""} className="max-h-10"></img>
            </div>
            <div>Netlify</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={git} alt={""} className="max-h-10"></img>
            </div>
            <div>Git</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={jira} alt={""} className="max-h-10"></img>
            </div>
            <div>Jira</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={BigQuery} alt={""} className="max-h-10"></img>
            </div>
            <div>BiqQuery</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={DataStudio} alt={""} className="max-h-10"></img>
            </div>
            <div>Data Studio</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={figma} alt={""} className="max-h-10"></img>
            </div>
            <div>Figma</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={stripe} alt={""} className="max-h-10"></img>
            </div>
            <div>Stripe</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={workato} alt={""} className="max-h-10"></img>
            </div>
            <div>Workato</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={zapier} alt={""} className="max-h-10"></img>
            </div>
            <div>Zapier</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
