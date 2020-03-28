import React from "react";
import { Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { routeVariants } from "../app.animations";


interface AnimatedSwitchProps extends RouteComponentProps {
    children: object,
}


export const AnimatedWrapper = styled(motion.div)`
    
`;

/**
 * This component is used to control the routing animation.
 * It controls what should happen after animation complete (onRest).
 * It differs animation direction based on routePopped props. (Set in router.action.js and available from routerReducer).
 * @param location React router location used as key in Switch
 * @param children All routes (set in Routes.js)
 * @param routePopped Used to manage direction of animation
 * @param rest All other props sent down
 */

const AnimatedSwitch: React.SFC<AnimatedSwitchProps> = ({ location, children, ...rest }) => {

    return (
        <AnimatePresence>
            <AnimatedWrapper
                id={"page-wrapper"}
                variants={routeVariants}
                initial={"exit"}
                animate={"enter"}
                exit={"exit"}
                key={location.pathname}
            >
                <Switch location={location} {...rest}>
                    {children}
                </Switch>
            </AnimatedWrapper>
        </AnimatePresence>
    );
};

export default React.memo(AnimatedSwitch);
