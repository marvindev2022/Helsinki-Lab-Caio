import { motion, AnimatePresence } from "framer-motion";

function PageTransition(props:any) {
  const { children } = props;
    return (
      <AnimatePresence >
        <motion.div
          key={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }


export default PageTransition;
