import { motion } from "framer-motion";
import lakeFinland from "../assets/foggy-lake-in-finland-wallpaper.jpg";

export default function RenderHero(): JSX.Element {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center  ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 3 }}
        className="relative"
      >
        <div
          style={{
            backgroundImage: `url(${lakeFinland})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" w-screen h-screen flex flex-col gap-10 justify-center items-center z-5 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            className="w-full h-full flex flex-col gap-10 justify-center items-center z-5 px-5 bg-[#0000004b] sm:bg-cover"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white text-center lgt:text-justify">
              Communicate. Educate. Advocate.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white text-center lgt:text-justify">
              Neuroscientist. Science Communicator. Policy Advocate. Leader.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
