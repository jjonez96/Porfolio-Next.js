const WorkingMethods = () => {
  return (
    <section className="px-5 md:px-20 lg:px-30">
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl text-neutral-200 font-medium ">
          Työskentelytavat
        </h3>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          Tykkään aloittaa projektit nollasta ja tehdä niistä oman näköisiä.
          Tämä tapa on opettanut parhaiten oppimaan asioita, kun niitä joutuu
          oikeasti miettimään ajatuksella. Ajatusprosessini yleensä menee niin,
          että mietin ongelmaa ensin päässä. Sitten kun saan idean niin
          kirjoitan sen koodiksi ja testailen sitä niin kauan että se alkaa
          toimia halutullani tavalla. Haasteita on riittänyt vuoden aikana
          paljon, mutta kertaakaan luovuttaminen ei ole käynyt mielessä.
          <br />
          <br />
          Projekteissa käytän paljon versiohallintaa <b>(Git)</b>. Tässä vuoden
          aikana on tullu nähtyä kuinka hyödyllinen Git oikeasti on ja se on
          pelastanut projektini useasti.
        </p>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          Pidän erityisesti ryhmä/paritöistä, koska niissä saa keskustella,
          pohtia ja jakaa omia mielipiteitä jonkun kanssa. Pidän myös siitä,
          että minulle annetaan rakentavaa palautetta ja haluan tuoda omat
          näkemykseni ja mielipiteeni esiin. Meillä on koulussa paljon
          ryhmätöitä, minkä näen isona plussana.
        </p>
      </div>
      <hr
        id="portfolio"
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

export default WorkingMethods;
