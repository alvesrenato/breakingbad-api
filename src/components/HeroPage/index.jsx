import { HeroSectionPage } from "./style";

export function HeroPage({nameSerie, title}) {
    return (
        
        //Componente de estilização

        <HeroSectionPage serie={nameSerie}>

            <div className="container">
                <h1>{title}</h1>
            </div>

        </HeroSectionPage>


    )
}