import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    onClick: any,
    title: string
}


const Icon = styled(motion.div)`
    width: 12.8rem;
    height:12.8rem;
    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #C4C4C4;
    display:block;
    cursor: pointer;
    box-shadow:0px 0px 2px rgba(0,0,0,0.2);
`

export default(({ title, onClick }: Props) => (
    <Icon onClick={onClick} 
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        transition={{ ease: "easeOut", duration: .2 }}>
    </Icon>
));