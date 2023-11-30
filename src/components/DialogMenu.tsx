import Nav from "./Nav";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
interface PropsDialog {
  toggleMobileMenu: any;
  renderNavLinks: any;
}

export default function RenderDialog({
  toggleMobileMenu,
  renderNavLinks,
}: PropsDialog) {
  return (
    <motion.dialog
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay: 0.5 }}
      exit={{ opacity: 0.5 }}
      className=" min-w-[100vw] min-h-[100vh] sm:hidden bg-white  z-20  overflow-hidden"
    >
      <div className="bg-white min-w-[100vw] w-screen h-screen flex flex-col justify-around items-center rounded-xl relative ">
        <span className="w-full px-5 text-black  font-[special] flex justify-between text-4xl cursor-pointer">
          <h2>Caio Graco</h2>
          <h2
            onClick={toggleMobileMenu}
            className=" font-bold text-4xl cursor-pointer font-[special]"
          >
            X
          </h2>
        </span>
        <ul className="flex h-1/2 justify-center items-center flex-col gap-5 text-4xl">
          {renderNavLinks()}
        </ul>
        <Nav black={true} />
      </div>
    </motion.dialog>
  );
}
