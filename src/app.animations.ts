// import { motion } from "framer-motion";

export const routeVariants = {
    enter: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.3
        }
    }, 
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
}
