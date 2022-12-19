import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import Image from "next/image";
import joona from "../public/joona.jpg";
import design from "../public/design.png";
import nail from "../public/nail.png";
import iot from "../public/iot.png";
import cryptocurrency from "../public/cryptocurrency.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Joona Luukkonen Portfolio</title>
      </Head>
      <main className="bg-gray-50 px-5 md:px-20 lg:px-30   dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between bg-transparent">
            <ul className="">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-yellow-100 fixed top-10 left-5 "
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white fixed top-9 right-8 px-2 py-1 rounded-md
                "
                  href="https://www.canva.com/design/DAFTb2qnQsQ/xMK_7n1zgk1t5tap1v0zmA/view?utm_content=DAFTb2qnQsQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                >
                  Ansioluettelo
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center  dark:text-gray-200">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Joona Luukkonen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Web Kehittäjä</h3>
            <p className=" text-md  py-5 max-px-9  leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Olen Joona, 26-vuotias IT-Tradenomi opiskelija Vaasasta. Olen
              utelias koodaaja, joka tykkää pujahtaa Googlen syövereihin. Näen
              ohjelmoinnin palapelinä, jota lähden kokoamaan pala kerrallaan.
              Palasien etsiminen voi välillä viedä aikaa, mutta kun ne oikeat
              palat löytyvät niin se palkitsee ja motivoi menemään haasteissa
              eteenpäin.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src={joona}
              alt="joona"
              className="rounded-full object-cover mx-auto w-80 h-80 mt-9 md:h-96 md:w-96"
            />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-teal-600">
            <a href="https://github.com/jjonez96">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/joona-luukkonen-7b7287228/">
              <AiFillLinkedin />
            </a>
          </div>
        </section>
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl text-teal-600 font-medium ">Tausta</h3>
          <div className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
            <p>
              Aloitin 2021 lokakuussa Vaasan H2C(Highway 2 Code) avoimen väylän,
              josta sain hyvät eväät aloittaessani ohjelmointi urani. H2C kesti
              puoli vuotta, jonka suoritin töiden ohessa. Koulutuksesta sain 30
              opintopistettä, jotka hyväksiluettiin tutkintooni ja tämän jälkeen
              olen aktiivisesti koodannut omia harrastusprojekteja.
            </p>
            Koulutuksessa opin seuraavista teknologioista perusteet: <br />
            <b>Html, Css, Javascript, React, Node.js, Php & MySql, Git.</b>
            <br />
          </div>
        </div>
        <section>
          <div className="mt-20 text-center max-w-3xl mx-auto ">
            <h3 className="text-3xl text-teal-600 font-medium  py-5 mb-2">
              Tech stack
            </h3>
            <div className="flex gap-5 justify-center shadow-lg p-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-5xl ">
              <FaReact color="#61dafb" />
              <FaNode color="#6aa05c" />
              <FaJs color="#efd81d" />
              <FaHtml5 color="#dd4b25" />
              <FaCss3Alt color="#0079c0" />
              <FaGitAlt color="#e84d31" />
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl text-teal-600 font-medium ">
              Portfolio / Harrasteprojektit
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Tykkään aloittaa projektit nollasta ja tehdä niistä oman näköisiä.
              Tämä tapa opettaa minua parhaiten oppimaan asioita, kun niitä
              joutuu oikeasti miettimään ajatuksella. Ajatusprosessini yleensä
              menee niin, että mietin ongelmaa ensin päässä. Kun saan idean niin
              kirjoitan sen koodiksi ja testailen sitä niin kauan että se alkaa
              toimia halutullani tavalla. Joskus tämä prosessi voi viedä kauan
              tai selviää parissa päivässä. Riippuu paljon ongelman laajuudesta.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Toteutan projektini pääsääntöisesti Reactilla ja Node.js:llä.
              Reactin parissa on tullut väkerreltyä noin vuoden verran. Myös
              Reactiin kuuluvia frameworkkejä on tullut testailtua mm. Next.js
              ja Gatsby.js. <br /> Node.js:llä tulee pääsääntöisesti tehtyä
              rajapintoja fronttiin.
            </p>

            <b className=" text-gray-800 dark:text-gray-200">
              Github repojen readme osioissa on lisätietoa projekteista.
            </b>
            <p className=" text-gray-800 dark:text-gray-200"></p>
          </div>

          <div className="xl:flex gap-5">
            <div className="text-center shadow-lg p-6 bg-gray-100  rounded-xl my-10 dark:bg-gray-800 dev ">
              <Image
                src={design}
                alt="design"
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Scootlator
              </h3>
              <div className="py-4 dark:text-gray-200 ">
                Scootlator on SPA-sovellus, joka laskee matkan pituuden, ajan
                sekä matkan hinnan. Idea tähän projektiin lähti omasta päästä.
                Kuulin kesällä usein kysymyksen:{" "}
                <q>Paljon scootti matka maksaa?</q> Esim. Tierin tai Voin
                sovelluksisissa ei tällaista laskinta ole. Sovellus hyödyntää
                Tierin rajapintoja. Kartassa näkyy Tierin scootteja Tukholmassa,
                koska Suomessa nämä ovat talviteloilla. Kehitys alkoi heinäkuun
                puolivälissä 2022 ja on edelleen aktiivisessa kehityksessä.
              </div>
              <h4 className=" text-teal-600 font-medium">Teknologiat</h4>
              <ul className="text-gray-800 py-1 font-bold dark:text-gray-200 flex justify-center gap-5">
                <li>React</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>Googlemaps API</li>
              </ul>
              <div className="xl:flex justify-center  pt-2 mt-2 ml-6 ">
                <a
                  href="https://scootlator.netlify.app/"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md mr-10"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/Scootlator"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-6 rounded-xl bg-gray-100  my-10 dark:bg-gray-800 dev ">
              <Image
                src={nail}
                alt="nail"
                width={100}
                height={100}
                className="mx-auto"
                priority
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Lillaiita kynsiteknikon sivut
              </h3>
              <p className="py-4 dark:text-gray-200">
                Ensimmäiset konkreettiset nettisivut, mitkä kehitin ja
                suunnittelin alusta loppuun. Tein nämä sivut Iidalle. Kuuntelin
                hänen ideansa ja näkemyksensä ja lähdin toteuttamaan näitä
                sivuja sen pohjalta. Kyselin usein palautetta ja tein korjauksia
                aina sen mukaan.
              </p>
              <h4 className=" text-teal-600 font-medium">Teknologiat</h4>
              <ul className="text-gray-800 py-1 font-bold dark:text-gray-200 flex justify-center gap-5">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="xl:flex justify-center pt-2 mt-2 ml-6 ">
                <a
                  href="https://lillaiita.netlify.app/"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md mr-10"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/kynsiteknikon-sivut"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="xl:flex justify-center gap-5  ">
            <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-gray-100  dark:bg-gray-800 dev ">
              <Image
                src={cryptocurrency}
                alt="cryptocurrency"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Crypto Tracker
              </h3>
              <p className="py-4 dark:text-gray-200">
                Tällä sovelluksella voit seurata haluamiasi kryptovaluuttoja ja
                kryptovaluuttoihin liittyviä uutisia. Kaikki lisätyt uutiset ja
                kryptot siirtyvät kotisivulle ja firebasen tietokantaan. Tämä
                projekti oli React kurssin lopputyö ja jatkoin tämän
                kehittämistä aktiivisesti 2022 heinäkuuhun asti.
              </p>
              <h4 className=" text-teal-600 font-medium ">Teknologiat</h4>
              <ul className="text-gray-800 py-1 font-bold dark:text-gray-200 flex justify-center gap-5  ">
                <li>React</li>
                <li>Firebase</li>
                <li>React-Router</li>
                <li>React-Styled-Components</li>
              </ul>
              <div className="xl:flex justify-center pt-2 mt-2 ml-6">
                <a
                  href="https://coin-app-8164d.web.app/Home"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md mr-10"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/Crypto-tracker"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-gray-100  dark:bg-gray-800 dev ">
              <Image
                src={iot}
                alt="iot"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                IOT-Sovellus
              </h3>
              <p className="py-4 dark:text-gray-200">
                Tällä IOT-sovelluksella voidaan tarkkailla jääkaapinlämpötilaa.
                Tässä käytettiin rasberry pi piirilevyä, mistä tuli anturi
                jääkaappiin. Sovellus lähettää viestin käyttäjälle, jos
                lämpötila karkaa liian ylös tai liian alas. Tämä sovellus
                tehtiin parityönä Hennan kanssa.
                <br />
                <b>Videossamme kerrotaan tästä sovelluksesta tarkemmin.</b>
              </p>
              <a
                href="https://www.youtube.com/watch?v=jrhlCqbzOag"
                className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md "
              >
                video
              </a>
              <h4 className=" text-teal-600 font-medium mt-4">Teknologiat</h4>
              <ul className="text-gray-800 py-1 font-bold dark:text-gray-200 flex justify-center gap-5">
                <li>React</li>
                <li>Node.js</li>
                <li>Iot-Ticket</li>
              </ul>
              <br />
              <div className="xl:flex justify-center   ml-6">
                <a
                  href="https://iotgreenteam.netlify.app/"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md mr-10"
                >
                  Demo
                </a>
                <a
                  href="https://gitlab.com/e2102793/fridgesensor"
                  className="bg-gradient-to-r from-cyan-500 to to-teal-500 text-white px-2 py-1 rounded-md"
                >
                  Gitlab Repo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
