import styled from "styled-components";


export const InfoCard = styled.div`

        box-shadow: #000000;
        background-color: #000000;
        padding: 20px;
        border-radius: 5px;

        .image{
            width: 100%;
            height: 280px;
            overflow: hidden;
            margin-bottom: 20px;


        };
    

        .info{

            ul{
                margin-top: 20px;
                font-size: 14px;
                list-style-type: square;
                list-style-position: inside;

                li{
                    margin-bottom: 5px;
                }
            }

           
        }
        
        &:hover{
                filter: brightness(130%);
                transform: scale(1.03);
                
            }

`