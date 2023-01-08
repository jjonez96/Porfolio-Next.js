import Image from "next/image";
import design from "../../public/design.png";
import nail from "../../public/nail.png";
import iot from "../../public/iot.png";
import cryptocurrency from "../../public/cryptocurrency.png";

const ProjectCards = () => {
  return (
    <section className="px-5 md:px-20 xl:px-20">
      <div className="xl:flex  gap-5 mt-10">
        <div className="text-center shadow-lg p-6 bg-black border border-stone-700  rounded-xl my-10 dark:bg-gray-800 dev ">
          <Image src={design} alt="design" className="mx-auto " height={100} />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Scootlator
          </h3>
          <div className="py-4 text-neutral-400 text-left ">
            Scootlator on kätevä ja nopea äppi skuuttimatkan hinnan laskemiseen.
            Idea tähän projektiin lähti omasta päästä. Kuulin kesällä usein
            kysymyksen: <q>Paljonko skuutti matka maksaa?</q> ja idea
            sovellukseen lähti tästä kysymyksestä liikkeelle. Tierin tai Voin
            sovelluksisissa ei tällaista laskinta ole. Kartassa näkyy Tierin ja
            Voin scootteja Örebrossa, koska Suomessa nämä ovat talviteloilla.
            Kehitys alkoi heinäkuun puolivälissä 2022 ja on edelleen
            aktiivisessa kehityksessä.
          </div>
          <h4 className=" text-white font-medium">Teknologiat</h4>
          <ul className=" py-1 font-bold text-neutral-400  lg:flex justify-center gap-5">
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>Googlemaps API</li>
          </ul>
          <br />
          <hr style={{ marginTop: "10px", border: "1px solid #222222" }} />
          <div className="xl:flex justify-center  pt-2 mt-2 ml-7  ">
            <a
              href="https://scootlator.vercel.app/"
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white  p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/scootlator-nextjs"
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2 "
            >
              Lähdekoodi
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-6 rounded-xl bg-black border border-stone-700  my-10 dev ">
          <Image src={nail} alt="nail" width={100} className="mx-auto" />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Lillaiita kynsiteknikon sivut
          </h3>
          <p className="py-4 text-neutral-400 text-left">
            Ensimmäiset konkreettiset nettisivut, mitkä kehitin ja suunnittelin
            alusta loppuun. Tein nämä sivut Iidalle. Kuuntelin hänen ideansa ja
            näkemyksensä ja lähdin toteuttamaan näitä sivuja sen pohjalta.
            Kyselin usein palautetta ja tein korjauksia aina sen mukaan. Tämän
            projektin aloitin elokuussa 2022 ja valmistui marraskuun lopulla.
          </p>
          <br />
          <div className="relative top-6 ">
            <h4 className=" text-white font-medium">Teknologiat</h4>
            <ul className=" py-1 font-bold text-neutral-400  lg:flex justify-center gap-5">
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
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/kynsiteknikon-sivut"
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2 "
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
            className="mx-auto"
          />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Crypto Tracker
          </h3>
          <p className="py-4 text-neutral-400 text-left">
            Tällä sovelluksella voit seurata haluamiasi kryptovaluuttoja ja
            kryptovaluuttoihin liittyviä uutisia. Kaikki lisätyt uutiset ja
            kryptot siirtyvät kotisivulle ja firebasen tietokantaan. Tämä
            projekti oli React kurssin lopputyö jonka aloitin maaliskuun alussa
            ja jatkoin tämän kehittämistä aktiivisesti 2022 heinäkuuhun asti.
          </p>
          <div className="relative top-10">
            <h4 className=" text-white font-medium ">Teknologiat</h4>
            <ul className="py-1 font-bold text-neutral-400  lg:flex justify-center gap-5   ">
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
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2  rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/Crypto-tracker"
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2  rounded-md focus:text-white ml-2 "
            >
              Lähdekoodi
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-black border border-stone-700  dark:bg-gray-800 dev ">
          <Image src={iot} alt="iot" width={100} className="mx-auto" />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            IOT-Fridgesensor
          </h3>
          <p className="p-1 text-neutral-400 text-left">
            Tällä IOT-sovelluksella voidaan tarkkailla jääkaapin lämpötilaa.
            Sovellus lähettää viestin käyttäjälle, jos lämpötila karkaa liian
            ylös tai liian alas. Tämä sovellus oli H2C kurssin lopputyö, mikä
            tehtiin parityönä Hennan kanssa. Tämä projekti aloitettiin 2022
            maaliskuussa ja valmistui toukokuun lopulla.
          </p>

          <b className="text-center font-medium text-white">
            Videossamme kerrotaan tästä sovelluksesta ja Iot-Ticketistä
            tarkemmin.
            <br />
          </b>
          <a
            href="https://www.youtube.com/watch?v=jrhlCqbzOag"
            className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 relative top-4  rounded-md focus:text-white "
          >
            Video
          </a>
          <div className="relative top-3">
            <h4 className=" text-white font-medium mt-4"> Teknologiat</h4>
            <ul className=" py-1 font-bold text-neutral-400  lg:flex justify-center gap-5">
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
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/IOT-Fridgesensor"
              className="hover:text-white text-stone-300 duration-500  border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2 "
            >
              Lähdekoodi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
