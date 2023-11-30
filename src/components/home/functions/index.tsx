import { motion } from "framer-motion";
import profile from "../../../assets/profile.jpg";
import externalLink from "../../../assets/icon.svg";

export const HomeSection = ({ children }: any) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      {children}
    </section>
  );
};

export const ProfileSection = (props: any) => {
  
  return (
    <motion.img
      variants={props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      src={profile}
      alt="profile"
      className="w-[80%] object-fill mr-[-1.125rem] xl:w-1/2 sm:ml-[2.25rem] sm:w-[60%] xl:h-[35rem] xl:rounded-md xl:mt-[5rem] xl:rounded-l-full ${}`"
    />
  );
};

export const DescriptionSection = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-[80%] xl:w-2/4 mt-[-4.5rem] m-[-10.125rem] h-full xl:h-[31.5rem] flex flex-col justify-center xl:justify-center xl:gap-5 sm:items-start items-center bg-primary text-white rounded-sm sm:mr-[2.25rem] xl:rounded-r-full xl:pl-5 "
    >
      {children}
    </motion.div>
  );
};

export const HireMeButton = ({ onClick }: any) => {
  return (
    <span
      onClick={onClick}
      className="flex justify-center items-center gap-2 w-[7.9088rem] h-[3.3988rem] rounded-full xl:rounded-none bg-white text-black font-bold p-2 xl:rounded-r-full mb-5 sm:ml-5 xl:ml-2"
    >
      <p>Hire me</p>
      <img className="xl:block hidden" src={externalLink} alt="external link" />
    </span>
  );
};
