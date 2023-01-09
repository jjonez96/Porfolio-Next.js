import { FaArrowUp } from "react-icons/fa";

const BacktoTop = () => {
  return (
    <section className="text-6xl flex justify-center pb-10">
      <a href="#top">
        <FaArrowUp className="hover:text-white duration-500 text-neutral-400" />
      </a>
    </section>
  );
};

export default BacktoTop;
