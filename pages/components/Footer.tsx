import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
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
  );
};

export default Footer;
