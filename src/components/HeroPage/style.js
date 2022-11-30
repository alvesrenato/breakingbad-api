import styled from "styled-components";
import bgBB from '../../assets/background-bb.jpg';
import bgSaul from '../../assets/background-saul.jpg';

export const HeroSectionPage = styled.div`

    height: 400px;
    //background-image: url(${bgBB});
      
    background-position: top center;
    background-size: cover;
    display: flex;
    align-items: flex-end;

    h1{
        text-align: center;
        margin-top: 30px;
    }

    ${props => {
        if (props.serie === 'breakingbad') {
            return `background-image: url(${bgBB})`

        } else if (props.serie === 'Saul') {
            return `background-image: url(${bgSaul})`

        } else {
            return `background-image: green`

        }

    }

    }

`