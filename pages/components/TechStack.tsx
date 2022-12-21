import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
const TechStack = () => {
  return (
    <section>
      <div className=" m-10 text-center max-w-3xl mx-auto ">
        <h3 className="text-3xl text-neutral-200 font-medium  py-5 mb-2">
          Tech Stack
        </h3>
        <div className="flex gap-6 justify-center shadow-lg  rounded-xl bg-black border border-stone-700 dark:bg-gray-800 text-5xl p-5 md:px-20 lg:px-30 ">
          <FaReact color="#61dafb" />
          <FaNode color="#6aa05c" />
          <FaJs color="#efd81d" />
          <FaHtml5 color="#dd4b25" />
          <FaCss3Alt color="#0079c0" />
          <FaGitAlt color="#e84d31" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
