import React from "react";


//import redux from "../assets/logos/redux.png";
//import eclipse from"../assets/logos/eclipse.png";
//import paper1 from "../assets/logos/paper1.png";
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
import mongo from "../assets/logos/mongo.png";
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


const Skills = () => {
  return (
    <div name="Skills" className="w-full h-screen bg-[#d3ece2]">
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
            {"//"} These are the technologies I've worked with:
          </p>
          <p>need new image for eclipse redux paper</p>
        </div>

        {/* tech tiles container */}
        <div className="w-full grid grid-cols-5 sm:grid-cols-8 gap-4 text-center text-white font-medium">

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly  hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={css} alt={""} className="max-h-10"></img>
            </div>
            <div>CSS</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Dart} alt={""} className="max-h-10"></img>
            </div>
            <div>Dart</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={eas} alt={""} className="max-h-10"></img>
            </div>
            <div>EAS</div>
          </div>

          {/* needs new image */}
          {/* <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={eclipse} className="max-h-10"></img>
            </div>
            <div>Eclipse</div>
          </div> */}

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={expo} alt={""} className="max-h-10"></img>
            </div>
            <div>expo</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={firebase} alt={""} className="max-h-10"></img>
            </div>
            <div>firebase</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={git} alt={""} className="max-h-10"></img>
            </div>
            <div>git</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={html} alt={""} className="max-h-10"></img>
            </div>
            <div>html</div>
          </div>

          {/* need new image */}
          {/* <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={paper1} className="max-h-10"></img>
            </div>
            <div>paper</div>
          </div> */}

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={java} alt={""} className="max-h-10"></img>
            </div>
            <div>java</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={javascript} alt={""} className="max-h-10"></img>
            </div>
            <div>javascript</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={jira} alt={""} className="max-h-10"></img>
            </div>
            <div>jira</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={mongo} alt={""} className="max-h-10"></img>
            </div>
            <div>mongo</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={MUI} alt={""} className="max-h-10"></img>
            </div>
            <div>MUI</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={netlify} alt={""} className="max-h-10"></img>
            </div>
            <div>netlify</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={npm} alt={""} className="max-h-10"></img>
            </div>
            <div>npm</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={react} alt={""} className="max-h-10"></img>
            </div>
            <div>react</div>
          </div>

          {/* need new image */}
          {/* <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={redux} className="max-h-10"></img>
            </div>
            <div>redux</div>
          </div> */}

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Sass} alt={""} className="max-h-10"></img>
            </div>
            <div>Sass</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={stripe} alt={""} className="max-h-10"></img>
            </div>
            <div>stripe</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={tailwind} alt={""} className="max-h-10"></img>
            </div>
            <div>tailwind</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={Typescript} alt={""} className="max-h-10"></img>
            </div>
            <div>Typescript</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={VScode} alt={""} className="max-h-10"></img>
            </div>
            <div>VScode</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={workato} alt={""} className="max-h-10"></img>
            </div>
            <div>workato</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={xcode} alt={""} className="max-h-10"></img>
            </div>
            <div>xcode</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={yarn} alt={""} className="max-h-10"></img>
            </div>
            <div>yarn</div>
          </div>

          <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-full flex flex-col p-2 justify-evenly hover:animate-jiggle">
            <div className="w-full h-full flex justify-center items-center">
              <img src={zapier} alt={""} className="max-h-10"></img>
            </div>
            <div>zapier</div>
          </div>


          

          
          


        </div>
      </div>
    </div>
  );
};

export default Skills;
