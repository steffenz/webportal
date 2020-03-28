import React from 'react';
import styled from 'styled-components';
import osloforoslo from "./osloforoslo";

const Wrapper = styled.div`
    
`;

interface  ItemProps {
    background: string
}

const Item = styled.div<ItemProps>`
    background: url(${props => props.background}) no-repeat;
`;

const DescriptionHeader = styled.header`
    padding: 100px 0;
`;
const SmallShops = () => {

    return (
        <Wrapper>
            <DescriptionHeader>
                <h1>Butikker</h1>
                <p>
                    Vi vet at korona-krisen virkelig er krise for mange, spesielt for små lokale aktører! Vi har laget en oversikt - en liste over
                    Oslo-bedrifter som nå tilbyr levering eller har gjort andre kreative tiltak for å sikre drift. Vi kan alle bidra i den store dugnaden!
            </p>
            </DescriptionHeader>
            {osloforoslo.map(shop => {
                return (
                    <Item background={shop.path} key={shop.name}>
                        <img src={shop.path} width={200} height={200} alt={shop.name} />
                        <h1>{shop.name}</h1>
                        <p>{shop.description}</p>
                    </Item>
                )
            })}
        </Wrapper>
    )

}

export default SmallShops;