import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowUp,
} from "react-icons/fa";
import Image from "next/image";
import joona from "../public/joona.jpg";
import design from "../public/design.png";
import nail from "../public/nail.png";
import iot from "../public/iot.png";
import cryptocurrency from "../public/cryptocurrency.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joona Luukkonen Portfolio</title>
      </Head>
      <main id="top">
        <nav className="py-5 mb-12 flex justify-between bg-black  top-0 border-b   border-stone-700 sticky opacity-90 z-50">
          <ul className="flex  justify-center text-sm lg:text-lg">
            <li>
              <a
                className=" hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 lg:mx-7 rounded-md   absolute right-2 top-3  
                "
                href="https://www.canva.com/design/DAFTb2qnQsQ/xMK_7n1zgk1t5tap1v0zmA/view?utm_content=DAFTb2qnQsQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              >
                Ansioluettelo
              </a>
            </li>
            <li>
              <a
                href="#tausta"
                className="hover:text-slate-100 hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 active:text-white lg:px-8 mx-2 py-2 "
              >
                Tausta
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-slate-100 hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 focus:text-white  lg:px-8  mx-2 py-2"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#yhteystiedot"
                className="hover:text-slate-100 hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 focus:text-white lg:px-8 mx-2 py-2"
              >
                Yhteystiedot
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center  dark:text-gray-200 px-5 md:px-20 lg:px-30">
          <h2 className="text-5xl py-2 text-white font-medium md:text-6xl">
            Joona Luukkonen
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl text-neutral-200">
            Web Kehittäjä
          </h3>
          <p className=" text-md  py-5 max-px-9  leading-6 text-neutral-400 md:text-xl max-w-xl mx-auto ">
            Olen Joona, 27-vuotias IT-Tradenomi opiskelija Vaasasta. Olen
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
            className="rounded-full object-cover mx-auto w-80 h-80 mt-9 md:h-96 md:w-96 shadow-md"
          />
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3  ">
          <a
            href="https://github.com/jjonez96"
            className="hover:text-white duration-500 text-neutral-400"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joona-luukkonen-7b7287228/"
            className="hover:text-white duration-500 text-neutral-400"
            id="tausta"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <section className="px-5 md:px-20 lg:px-30">
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl text-neutral-200 font-medium ">Tausta</h3>
            <div className="text-md py-5 leading-6 text-neutral-400 text-left md:px-30  lg:px-30  ">
              <p>
                Tein ennen ohjelmointiopintoja töitä CNC-Koneistajana
                Seinäjoella. Työssäni koneistin kaivostöihin kaikenlaisia osia
                eri käyttötarkoituksiin. Työ vaati välillä ongelmanratkaisua,
                koska näitä koneita ohjataan G-Koodilla. Kyselin apua
                kokeneemmilta kollegoilta, kun sormi jäi suuhun liian pitkäksi
                aikaa. Näitä duuneja tuli tehtyä kolmisen vuotta kunnes aloin
                etsimään uutta alaa. Syynä alanvaihdolle oli, että
                uramahdollisuuksia ei ollut, päivät oli usein samanlaisia eikä
                työ tuonut tarpeeksi haasteita. Palkassa ei ollut moitittavaa,
                mutta kiinnostus alaan vaan lopahti.
                <br />
                <br />
                Törmäsin 2021 kesän loppupuolella Youtubessa sattumalta
                ohjelmointiin ja näin tässä alassa paljon mahdollisuuksia.
                Aloitin 2021 syksyllä ennen koulua koodaamisen{" "}
                <b>HTML ja CSS</b> kielillä, josta siirryin aika pian{" "}
                <b>Javacriptin</b> ihmeelliseen maailmaan. Tietokoneiden kanssa
                olen touhunnut jo 6-vuotiaasta asti, kun mun vanhemmat osti
                enimmäisen tietokoneen 2000-luvun alussa. 14-vuotiaana kasasin
                oman tietokoneen ja sitä tulee aina vähän välilä päiviteltyä.
                <br />
                <br />
                Aloitin 2021 lokakuussa Vaasan H2C (Highway 2 Code) avoimen
                väylän, josta sain hyvät eväät aloittaessani ohjelmointi uran.
                H2C kesti puoli vuotta, jonka suoritin töiden ohessa.
                Koulutuksesta sain 30 noppaa, jotka hyväksiluettiin tutkintooni
                ja tämän jälkeen olen aktiivisesti koodannut omia
                harrastusprojekteja.
              </p>
              <br />
              <b className="text-neutral-300">
                Koulutuksessa opin seuraavista teknologioista perusteet: <br />
                Html, CSS, Javascript, React, Node.js, PHP & Mysql, Git.
              </b>
              <br />
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20 text-center max-w-3xl mx-auto ">
            <h3 className="text-3xl text-neutral-200 font-medium  py-5 mb-2">
              Tech Stack
            </h3>
            <div
              className="flex gap-6 justify-center shadow-lg  rounded-xl bg-black border border-stone-700 dark:bg-gray-800 text-5xl p-5 md:px-20 lg:px-30 "
              id="portfolio"
            >
              <FaReact color="#61dafb" />
              <FaNode color="#6aa05c" />
              <FaJs color="#efd81d" />
              <FaHtml5 color="#dd4b25" />
              <FaCss3Alt color="#0079c0" />
              <FaGitAlt color="#e84d31" />
            </div>
          </div>
        </section>
        <section className="px-5 md:px-20 lg:px-30">
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl text-neutral-200 font-medium ">
              Työskentelytavat
            </h3>
            <p className="text-md py-5 leading-6 text-neutral-400 text-left">
              Tykkään aloittaa projektit nollasta ja tehdä niistä oman näköisiä.
              Tämä tapa on opettanut minua parhaiten oppimaan asioita, kun niitä
              joutuu oikeasti miettimään ajatuksella. Ajatusprosessini yleensä
              menee niin, että mietin ongelmaa ensin päässä. Sitten kun saan
              idean niin kirjoitan sen koodiksi ja testailen sitä niin kauan
              että se alkaa toimia halutullani tavalla. Haasteita on riittänyt
              vuoden aikana paljon, mutta kertaakaan luovuttaminen ei ole ollut
              lähellä.
              <br />
              <br />
              Projekteissa käytän paljon versiohallintaa <b>(Git)</b>. Tässä
              vuoden aikana on tullu nähtyä kuinka hyödyllinen Git oikeasti on
              ja se on pelastanut mun projektin useita kertoja.
            </p>
            <p className="text-md py-5 leading-6 text-neutral-400 text-left">
              Pidän erityisesti ryhmä/paritöistä, koska niissä saa keskustella,
              pohtia ja jakaa omia mielipiteitä jonkun kanssa. Pidän myös siitä,
              että minulle annetaan rakentavaa palautetta ja haluan tuoda omat
              näkemykseni ja mielipiteeni esiin. Meillä on koulussa paljon
              ryhmätöitä, minkä näen isona plussana.
            </p>

            <h3 className="text-3xl text-neutral-200 font-medium mt-20 ">
              Portfolio
            </h3>
            <p className="text-md py-5 leading-6 text-neutral-400 text-left">
              Osaamiseni painottuu enemmän fronttiin ja toteutankin ne
              pääsääntöisesti <b>Reactilla</b>. Reactin parissa on tullut
              väkerreltyä noin vuoden verran aktiivisesti. Myös Reactiin
              kuuluvia frameworkkejä on tullut testailtua mm.{" "}
              <b>Next.js ja Gatsby.js</b>. Esim. Tämä portfolio sivu on tehty{" "}
              <b>Next.js:llä ja Tailwind CSS</b> frameworkilla. Tässä{" "}
              <a
                href="https://github.com/jjonez96/porfolio"
                className="hover:underline  text-white font-semibold"
              >
                lähdekoodi
              </a>{" "}
              portfolioon. <br /> <br /> <b>Node.js ja Express</b> on tullut
              lähiaikoina myös kokajan tutummaksi nykyistä Scootlator projektia
              värkkäillessä. Enimmäkseen näillä tulee tehtyä rajapintoja
              fronttiin. <br /> <br /> Meillä alkaa koulussa kevätlukukautena
              2023 <b>C#, .NET ja SQL</b> kurssit, joita odotan innolla kun en
              ole näillä päässyt vielä työskentelemään.
            </p>

            <b className=" text-neutral-300">
              Github repojen readme osioissa on lisätietoa projekteista.
            </b>
            <p className=" text-gray-800 dark:text-gray-200"></p>
          </div>

          <div className="xl:flex gap-5 mt-20 ">
            <div className="text-center shadow-lg p-6 bg-black border border-stone-700  rounded-xl my-10 dark:bg-gray-800 dev ">
              <Image
                src={design}
                alt="design"
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                Scootlator
              </h3>
              <div className="py-4 text-neutral-400 text-left ">
                Scootlator on SPA-sovellus, joka laskee matkan pituuden, ajan
                sekä matkan hinnan. Idea tähän projektiin lähti omasta päästä.
                Kuulin kesällä usein kysymyksen:{" "}
                <q>Paljonko scootti matka maksaa?</q> Esim. Tierin tai Voin
                sovelluksisissa ei tällaista laskinta ole. Kartassa näkyy Tierin
                scootteja Tukholmassa, koska Suomessa nämä ovat talviteloilla.
                Kehitys alkoi heinäkuun puolivälissä 2022 ja on edelleen
                aktiivisessa kehityksessä.
              </div>
              <h4 className=" text-white font-medium">Teknologiat</h4>
              <ul className=" py-1 font-bold text-neutral-400 md:grid lg:flex justify-center gap-5">
                <li>React</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>Googlemaps API</li>
              </ul>
              <br />
              <hr style={{ marginTop: "10px", border: "1px solid #222222" }} />
              <div className="xl:flex justify-center  pt-2 mt-2 ml-7  ">
                <a
                  href="https://scootlator.netlify.app/"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white  px-2 py-1 rounded-md focus:text-white mr-2"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/Scootlator"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white ml-2 "
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-6 rounded-xl bg-black border border-stone-700  my-10 dev ">
              <Image
                src={nail}
                alt="nail"
                width={100}
                height={100}
                className="mx-auto"
                priority
              />

              <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                Lillaiita kynsiteknikon sivut
              </h3>
              <p className="py-4 text-neutral-400 text-left">
                Ensimmäiset konkreettiset nettisivut, mitkä kehitin ja
                suunnittelin alusta loppuun. Tein nämä sivut Iidalle. Kuuntelin
                hänen ideansa ja näkemyksensä ja lähdin toteuttamaan näitä
                sivuja sen pohjalta. Kyselin usein palautetta ja tein korjauksia
                aina sen mukaan. Tämän projektin aloitin elokuussa 2022 ja
                valmistui marraskuun lopulla.
              </p>
              <div className="relative top-6 ">
                <h4 className=" text-white font-medium">Teknologiat</h4>
                <ul className=" py-1 font-bold text-neutral-400 md:grid lg:flex justify-center gap-5">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <hr
                  style={{ marginTop: "10px", border: "1px solid #222222" }}
                  className="relative top-6"
                />
              </div>
              <br />
              <div className="xl:flex justify-center pt-2 mt-8 ml-6 ">
                <a
                  href="https://lillaiita.netlify.app/"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white mr-2"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/kynsiteknikon-sivut"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white ml-2 "
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
          <div className="xl:flex justify-center gap-5 ">
            <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-black border border-stone-700   dev ">
              <Image
                src={cryptocurrency}
                alt="cryptocurrency"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                Crypto Tracker
              </h3>
              <p className="py-4 text-neutral-400 text-left">
                Tällä sovelluksella voit seurata haluamiasi kryptovaluuttoja ja
                kryptovaluuttoihin liittyviä uutisia. Kaikki lisätyt uutiset ja
                kryptot siirtyvät kotisivulle ja firebasen tietokantaan. Tämä
                projekti oli React kurssin lopputyö jonka aloitin maaliskuun
                alussa ja jatkoin tämän kehittämistä aktiivisesti 2022
                heinäkuuhun asti.
              </p>
              <div className="relative top-10">
                <h4 className=" text-white font-medium ">Teknologiat</h4>
                <ul className="py-1 font-bold text-neutral-400 md:grid lg:flex justify-center gap-5   ">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>React-Router</li>
                  <li>React-Styled-Components</li>
                </ul>
                <hr
                  style={{ marginTop: "10px", border: "1px solid #222222" }}
                  className="relative top-6"
                />
              </div>
              <br />
              <div className="xl:flex justify-center pt-2 mt-14 ml-6">
                <a
                  href="https://coin-app-8164d.web.app/Home"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white mr-2"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/jjonez96/Crypto-tracker"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white ml-2 "
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-black border border-stone-700  dark:bg-gray-800 dev ">
              <Image
                src={iot}
                alt="iot"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-xl font-medium pt-8 pb-2 text-white">
                IOT-Sovellus
              </h3>
              <p className="p-1 text-neutral-400 text-left">
                Tällä IOT-sovelluksella voidaan tarkkailla jääkaapinlämpötilaa.
                Sovellus lähettää viestin käyttäjälle, jos lämpötila karkaa
                liian ylös tai liian alas. Tämä sovellus oli H2C kurssin
                lopputyö, mikä tehtiin parityönä Hennan kanssa. Tämä projekti
                aloitettiin 2022 maaliskuussa ja valmistui toukokuun lopulla.
              </p>

              <b className="text-center  text-white">
                Videossamme kerrotaan tästä sovelluksesta ja Iot-Ticketistä
                tarkemmin.
                <br />
              </b>
              <a
                href="https://www.youtube.com/watch?v=jrhlCqbzOag"
                className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 relative top-2  rounded-md focus:text-white "
              >
                Video
              </a>
              <div className="relative top-3">
                <h4 className=" text-white font-medium mt-4"> Teknologiat</h4>
                <ul className=" py-1 font-bold text-neutral-400 md:grid lg:flex justify-center gap-5">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Wapice Oy:n Iot-Ticket</li>
                </ul>
              </div>
              <hr style={{ marginTop: "34px", border: "1px solid #222222" }} />
              <br />
              <div className="xl:flex justify-center   ml-6">
                <a
                  href="https://iotgreenteam.netlify.app/"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white mr-2"
                >
                  Demo
                </a>
                <a
                  href="https://gitlab.com/e2102793/fridgesensor"
                  className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white px-2 py-1 rounded-md focus:text-white ml-2 "
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="text-6xl flex justify-center pb-10">
          <a href="#top">
            <FaArrowUp
              className="hover:text-white duration-500 text-neutral-400"
              aria-hidden="true"
            />
          </a>
        </div>
        <footer
          id="yhteystiedot"
          className=" bg-black border-t  border-stone-700   md:flex md:items-center md:justify-between md:p-4 p-4 "
        >
          <span className="text-sm  sm:text-center hover:text-white duration-500 text-neutral-400">
            © 2022{" "}
            <a
              href="https://www.canva.com/design/DAFTb2qnQsQ/xMK_7n1zgk1t5tap1v0zmA/view?utm_content=DAFTb2qnQsQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className=""
            >
              Joona Luukkonen
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
            <li>
              <a
                href="mailto:joona114@hotmail.fi"
                className="mr-4  md:mr-6 hover:text-white duration-500 text-neutral-400"
              >
                joona114@hotmail.fi
              </a>
            </li>
            <li>
              <a
                href="tel:+358509133374"
                className="mr-4  md:mr-6 hover:text-white duration-500 text-neutral-400 "
              >
                0509133374
              </a>
            </li>
            <a
              href="https://www.linkedin.com/in/joona-luukkonen-7b7287228/"
              className="text-3xl px-2  hover:text-white duration-500 text-neutral-400"
            >
              <AiFillLinkedin />
            </a>
            <li>
              <a
                href="https://github.com/jjonez96"
                className="text-3xl hover:text-white duration-500 text-neutral-400 "
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
