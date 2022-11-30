import { HeroSection } from "./style";
import CardBB from "../../assets/card-bb.jpg"
import CardSaul from "../../assets/card-saul.jpg"
import { Link } from "react-router-dom";

export function HeroHome() {
    return (


        //Componente de Estilo
        <HeroSection>

            <div className="container">
                <h1>"Não estou em perigo, eu sou o perigo!"</h1>
                <p>Atenção: Contém Spolier</p>

                <div className="cards">

                    <Link to="bb">
                        <img src={CardBB} alt="" />
                    </Link>

                    <Link to="bcs">
                        <img src={CardSaul} alt="" />
                    </Link>

                </div>
                
            </div>

        </HeroSection>

    )
}