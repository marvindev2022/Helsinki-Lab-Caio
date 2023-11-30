import { useNavigate } from "react-router-dom";
import RenderHero from "./HeroSection";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
export default function RenderHome(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="w-full h-full flex flex-col justify-center items-center  ">
      <RenderHero />
      <div className="w-full h-full flex flex-col sm:flex-row sm:relative justify-center items-center rounded-3xl bg-black-50 py-5 ">
        <motion.img
          src={profile}
          alt="profile"
          className="w-[80%]   object-cover mr-[-1.125rem] sm:ml-[2.25rem] sm:w-[60%] xl:h-[35rem] xl:rounded-md xl:mt-[5rem] xl:rounded-l-[50%]"
        />
        <motion.div className="w-[80%] xl:w-full mt-[-4.5rem] ml-[-1.125rem]  h-full xl:h-[30rem] flex flex-col  justify-center xl:justify-center xl:gap-5  sm:items-start items-center  bg-primary text-white rounded-sm sm:mr-[2.25rem]  xl:rounded-r-[50%]">
          <p className="w-11/12  text-justify font-bold text-white px-5  py-5 xl:pl-2 xl:pr-32  xl:text-xl">
            <strong className="text-[1.099rem]">Caio Graco - Roza</strong> Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Error
            laudantium, architecto tenetur veritatis maxime quas consequatur in.
            Provident quos voluptatum alias ad, esse quia, placeat tempora
            laboriosam
          </p>
          <p className="w-11/12  text-justify text-base font-bold text-white px-5 pb-5 xl:pl-2 xl:pr-32  xl:text-xl">
            Lorem, ipsum dolor.{" "}
            <em className="">
              Lorem ipsum dolor sit amet. <strong> Leaders</strong>{" "}
            </em>
            and Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque mollitia aliquid, ea voluptatem hic dolore sed voluptatum
            animi cum et porro illo impedit dolor numquam expedita aperiam
            soluta! Maxime blanditiis quisquam quas ratione quod corrupti vero
            voluptatum nemo
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="w-[7.9088rem] h-[3.3988rem] bg-white text-primary font-bold p-2 rounded-full mb-5 ml-5 sm:hidden"
          >
            Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}
