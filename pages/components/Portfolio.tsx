const Portfolio = () => {
  return (
    <section className="px-5 md:px-20 lg:px-30">
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl text-neutral-200 font-medium mt-20 ">
          Portfolio
        </h3>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          Osaamiseni painottuu enemmän fronttiin ja toteutankin ne
          pääsääntöisesti <b>Reactilla</b>. Reactin parissa on tullut
          väkerreltyä noin vuoden verran aktiivisesti. Myös Reactiin kuuluvia
          frameworkkejä on tullut testailtua mm. <b>Next.js ja Gatsby.js</b>.
          Esim. Tämä portfolio sivu on tehty <b>Next.js:llä ja Tailwind CSS</b>{" "}
          frameworkilla. Tässä{" "}
          <a
            href="https://github.com/jjonez96/porfolio"
            className="hover:underline  text-white font-semibold"
          >
            lähdekoodi
          </a>{" "}
          portfolioon. <br /> <br /> <b>Node.js ja Express</b> on tullut
          lähiaikoina myös kokajan tutummaksi nykyistä Scootlator projektia
          värkkäillessä. Enimmäkseen näillä kielillä teen rajapintoja fronttiin
          ja karsin turhaa dataa pois. <br /> <br /> Meillä alkaa koulussa
          kevätlukukautena 2023 <b>C#, .NET ja SQL</b> kurssit, joita odotan
          innolla kun en ole näillä päässyt vielä työskentelemään.
        </p>
        <b className=" text-neutral-300">
          Github repojen readme osioissa on lisätietoa projekteista.
        </b>
        <p className=" text-gray-800 dark:text-gray-200"></p>
      </div>
    </section>
  );
};

export default Portfolio;
