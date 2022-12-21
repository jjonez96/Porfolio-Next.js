const NavBar = () => {
  return (
    <nav className="py-5 mb-12 flex justify-between bg-black  top-0 border-b   border-stone-700 sticky opacity-90 z-50">
      <ul className="flex justify-center text-sm lg:text-lg ">
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
            className="hover:text-slate-100  hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 click:text-white lg:px-7 px-2 py-2  "
          >
            Tausta
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-slate-100 hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 focus:text-white  lg:px-7  px-2 py-2  "
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#yhteystiedot"
            className="hover:text-slate-100 hover:bg-[#1d1d1d] hover: rounded-md text-stone-300 duration-500 focus:text-white lg:px-7 px-2 py-2  "
          >
            Yhteystiedot
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
