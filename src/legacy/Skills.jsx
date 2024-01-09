import React from "react";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

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
import yarn from "../assets/logos/yarn.png";
import zapier from "../assets/logos/zapier.png";
import figma from "../assets/logos/figma.png";
import androidStudio from "../assets/logos/androidStudio.png";
import intelliJ from "../assets/logos/intelliJ.png";
import BigQuery from "../assets/logos/BigQuery.png";
import DataStudio from "../assets/logos/DataStudio.png";
import python from "../assets/logos/python.png";
import sql from "../assets/logos/sql.png"


const Skills = () => {
  return (
    <div name="Skills" className="w-full min-h-screen bg-[#d3ece2] mb-36 sm:mb-0">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full">

        {/* Header container */}
        <div className='mt-[20px]'>
          <Fade clear delay={400} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f] mb-1">{'<h1>'}</p>
          </Fade>
          <Fade right delay={800} duration={1600} distance="40%">
            <p className="text-[#358f60] font-medium md:text-6xl text-4xl">
              Skills {"&"} Experience
            </p>
          </Fade>
          <Fade clear delay={400} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f] mt-1">{'</h1>'}</p>
          </Fade>
        </div>

        {/* text container */}
        <div>
          <Fade top delay={1200} duration={1200}>
            <p className="text-[#637269] mt-3">
              The scope of my work and experience has given me the opportunity to
              work with multiple technologies and industries. From retail to
              agriculture, medical to education, I've been able to produce and
              deliver quality solutions and applications.
            </p>
          </Fade>
          <Fade top delay={1400} duration={1200}>
              <p className="mt-6 text-[#637269] mb-2">
                These are the technologies I've worked with recently:
              </p>
          </Fade>
        </div>

        {/* tech tiles container web */}
        <div className="w-full hidden md:grid md:grid-cols-8 gap-3 text-center text-white font-medium sm:text-sm text-xs">

          <div className="hover:animate-jelloR">
            <Fade left delay={1600} duration={1200}>
              <Jello delay={2600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} alt={""} className="max-h-10"></img>
                  </div>
                  <div>React</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={1900} duration={1200}>
              <Jello delay={2900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} alt={""} className="max-h-10"></img>
                  </div>
                  <div>React Native</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={javascript} alt={""} className="max-h-10"></img>
                  </div>
                  <div>JavaScript</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Typescript} alt={""} className="max-h-10"></img>
                  </div>
                  <div>TypeScript</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={html} alt={""} className="max-h-10"></img>
                  </div>
                  <div>HTML</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={css} alt={""} className="max-h-10"></img>
                  </div>
                  <div>CSS</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={1900} duration={1200}>
              <Jello delay={2900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Sass} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Sass</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1600} duration={1200}>
              <Jello delay={2600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={tailwind} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Tailwind</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={1800} duration={1200}>
              <Jello delay={2800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={java} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Java</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2100} duration={1200}>
              <Jello delay={3100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Dart} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Dart</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2400} duration={1200}>
              <Jello delay={3400}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={python} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Python</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2700} duration={1200}>
              <Jello delay={3700}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={sql} alt={""} className="max-h-10"></img>
                  </div>
                  <div>SQL</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2700} duration={1200}>
              <Jello delay={3700}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={redux} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Redux</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2400} duration={1200}>
              <Jello delay={3400}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={MUI} alt={""} className="max-h-10"></img>
                  </div>
                  <div>MUI</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2100} duration={1200}>
              <Jello delay={3100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={VScode} alt={""} className="max-h-10"></img>
                  </div>
                  <div>VSCode</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1800} duration={1200}>
              <Jello delay={2800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={eclipse} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Eclipse</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2000} duration={1200}>
              <Jello delay={3000}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={androidStudio} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Android Studio</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2300} duration={1200}>
              <Jello delay={3300}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={intelliJ} alt={""} className="max-h-10"></img>
                  </div>
                  <div>IntelliJ</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2600} duration={1200}>
              <Jello delay={3600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Expo</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2900} duration={1200}>
              <Jello delay={3900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={eas} alt={""} className="max-h-10"></img>
                  </div>
                  <div>EAS</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2900} duration={1200}>
              <Jello delay={3900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={npm} alt={""} className="max-h-10"></img>
                  </div>
                  <div>npm</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2600} duration={1200}>
              <Jello delay={3600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={yarn} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Yarn</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2300} duration={1200}>
              <Jello delay={3300}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={firebase} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Firebase</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2000} duration={1200}>
              <Jello delay={3000}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={netlify} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Netlify</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={git} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Git</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={jira} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Jira</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2800} duration={1200}>
              <Jello delay={3800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={BigQuery} alt={""} className="max-h-10"></img>
                  </div>
                  <div>BiqQuery</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={3100} duration={1200}>
              <Jello delay={4100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={DataStudio} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Data Studio</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={3100} duration={1200}>
              <Jello delay={4100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={figma} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Figma</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2800} duration={1200}>
              <Jello delay={3800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={stripe} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Stripe</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={workato} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Workato</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={zapier} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Zapier</div>
                </div>
              </Jello>
            </Fade>
          </div>

        </div>

        {/* Tech tiles container mobile */}
        <div className="w-full md:hidden grid grid-cols-4 gap-3 text-center text-white font-medium sm:text-sm text-xs">

          <div className="hover:animate-jelloR">
            <Fade left delay={1600} duration={1200}>
              <Jello delay={2600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} alt={""} className="max-h-10"></img>
                  </div>
                  <div>React</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={1900} duration={1200}>
              <Jello delay={2900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={react} alt={""} className="max-h-10"></img>
                  </div>
                  <div>React Native</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={javascript} alt={""} className="max-h-10"></img>
                  </div>
                  <div>JavaScript</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Typescript} alt={""} className="max-h-10"></img>
                  </div>
                  <div>TypeScript</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={2500} duration={1200}>
              <Jello delay={3500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={html} alt={""} className="max-h-10"></img>
                  </div>
                  <div>HTML</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={2200} duration={1200}>
              <Jello delay={3200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={css} alt={""} className="max-h-10"></img>
                  </div>
                  <div>CSS</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={1900} duration={1200}>
              <Jello delay={2900}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Sass} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Sass</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1600} duration={1200}>
              <Jello delay={2600}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={tailwind} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Tailwind</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={1800} duration={1200}>
              <Jello delay={2800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={java} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Java</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2100} duration={1200}>
              <Jello delay={3100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={Dart} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Dart</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={2400} duration={1200}>
              <Jello delay={3400}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={python} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Python</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={2700} duration={1200}>
              <Jello delay={3700}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={sql} alt={""} className="max-h-10"></img>
                  </div>
                  <div>SQL</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={200} duration={1200}>
              <Jello delay={1200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={redux} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Redux</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={500} duration={1200}>
              <Jello delay={1500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={MUI} alt={""} className="max-h-10"></img>
                  </div>
                  <div>MUI</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={800} duration={1200}>
              <Jello delay={1800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={VScode} alt={""} className="max-h-10"></img>
                  </div>
                  <div>VSCode</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1100} duration={1200}>
              <Jello delay={2100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={eclipse} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Eclipse</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={200} duration={1200}>
              <Jello delay={1200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={androidStudio} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Android Studio</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={500} duration={1200}>
              <Jello delay={1500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={intelliJ} alt={""} className="max-h-10"></img>
                  </div>
                  <div>IntelliJ</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={800} duration={1200}>
              <Jello delay={1800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={expo} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Expo</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={1100} duration={1200}>
              <Jello delay={2100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={eas} alt={""} className="max-h-10"></img>
                  </div>
                  <div>EAS</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={200} duration={1200}>
              <Jello delay={1200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={npm} alt={""} className="max-h-10"></img>
                  </div>
                  <div>npm</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={500} duration={1200}>
              <Jello delay={1500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={yarn} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Yarn</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={800} duration={1200}>
              <Jello delay={1800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={firebase} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Firebase</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1100} duration={1200}>
              <Jello delay={2100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={netlify} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Netlify</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={200} duration={1200}>
              <Jello delay={1200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={git} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Git</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={500} duration={1200}>
              <Jello delay={1500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={jira} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Jira</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade left delay={800} duration={1200}>
              <Jello delay={1800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={BigQuery} alt={""} className="max-h-10"></img>
                  </div>
                  <div>BiqQuery</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade left delay={1100} duration={1200}>
              <Jello delay={2100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={DataStudio} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Data Studio</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={200} duration={1200}>
              <Jello delay={1200}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={figma} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Figma</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={500} duration={1200}>
              <Jello delay={1500}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={stripe} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Stripe</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloR">
            <Fade right delay={800} duration={1200}>
              <Jello delay={1800}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloR">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={workato} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Workato</div>
                </div>
              </Jello>
            </Fade>
          </div>

          <div className="hover:animate-jelloL">
            <Fade right delay={1100} duration={1200}>
              <Jello delay={2100}>
                <div className="bg-[#414d46] rounded-lg shadow-lg w-full h-[86px] flex flex-col p-2 justify-evenly hover:animate-jelloL">
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={zapier} alt={""} className="max-h-10"></img>
                  </div>
                  <div>Zapier</div>
                </div>
              </Jello>
            </Fade>
          </div>

        </div>  


      </div>
    </div>
  );
};

export default Skills;
