import styled from "styled-components"
import bgHome from "../../assets/background-home.jpg"

export const HeroSection = styled.div`

    height: 100vh;
    background-image: url(${bgHome});
    background-position: center top;
    background-size: cover;
    
    display: flex;
    align-items: flex-end;

    h1{
        text-align: center;
        font-size: 40px;
        margin-bottom: 20px;

        @media (max-width: 600px){
            font-size: 20px;
        }

    }

    p{
        text-align: center;
        margin-bottom: 20px;
        
    }
    .cards{
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;

        img{
            border: solid 1px white;
            transition: 0.3s;
            
            &:hover{
                filter: brightness(130%);
                transform: scale(1.03);
                
            }

            @media (max-width: 600px){
                width: 60%;
                margin: 0 auto;
        }

        }

        @media (max-width: 600px){
            flex-direction: column;
            gap: 20px;
            padding: 20px;
        }

    }

`
