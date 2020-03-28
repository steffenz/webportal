import React from "react";
import styled from "styled-components";
import useClock from "./useClock";

const Clock = styled.div`
    font-weight:bold;
    font-size:2rem;
    text-align:center;
    color:#ccc;
    span:not(:last-child)::after{
        content:':'
    }
`

export default(() => {

    const getNumberWithLeadingZeros = (number: number): string => (
        `0${number}`.slice(-2)
    );

    const time = useClock();
    
    return (
        <Clock>
            <span>{ getNumberWithLeadingZeros(time.getHours()) }</span>
            <span>{ getNumberWithLeadingZeros(time.getMinutes())}</span>
        </Clock>
    )}

)