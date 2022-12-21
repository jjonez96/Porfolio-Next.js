import Head from "next/head";
import Image from "next/image";
import joona from "../../public/joona.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <section>
      <Head>
        <title>Joona Luukkonen Portfolio</title>
      </Head>
      <div className="text-center px-5 md:px-20 lg:px-30 mt-10">
        <h2 className="text-5xl py-2 text-white font-medium md:text-6xl">
          Joona Luukkonen
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl text-neutral-200">
          Web Kehittäjä
        </h3>
        <p className=" text-lg xl:text-xl py-5 max-px-9 leading-6 text-neutral-400  max-w-xl mx-auto ">
          Olen Joona, 27-vuotias IT-Tradenomi opiskelija Vaasasta. Olen utelias
          koodaaja, joka tykkää pujahtaa Googlen syövereihin. Näen ohjelmoinnin
          palapelinä, jota lähden kokoamaan pala kerrallaan. Palasien etsiminen
          voi välillä viedä aikaa, mutta kun ne oikeat palat löytyvät niin se
          palkitsee ja motivoi menemään haasteissa eteenpäin.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={joona}
          alt="joona"
          className="rounded-full object-cover mx-auto w-80 h-80 mt-9 md:h-96 md:w-96 shadow-md"
          priority
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
      <hr
        className="mx-auto"
        style={{
          marginTop: "50px",
          border: "1px solid #242424",

          width: "80%",
        }}
      />
    </section>
  );
};

export default Header;
