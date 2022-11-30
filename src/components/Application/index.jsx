import axios from "axios"
import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"
import { ContentCard, Loader, VejaMais } from "./style"
import ImageLoader from "../../assets/loader.png"


export function Application({ nameSerie }) {


    const [items, setItems] = useState([])
    const [showCards, setShowCards] = useState(4)
    const [totalCards, setTotalCards] = useState(0)
    const [isLoader, setIsLoader] = useState(true) //loader deve aparecer
    

    function mostrarMais(){
        setIsLoader(true) // loader deve aparecer
        setShowCards(showCards + 4);
        
        
    }

   

    useEffect(() => {
        axios.get(`https://breakingbadapi.com/api/characters?category=${nameSerie}&limit=${showCards}&offset=0`)
            .then(response => {
                //console.log(response.data)
                setItems(response.data)
                setTotalCards(response.data.length)
                //alert(totalCards) 
                setIsLoader(false)
            })
    },[showCards])

   


    return (
        <>
            {
                isLoader && (
                    <Loader>
                        <img src={ImageLoader} alt="" />
                    </Loader>
                )
            }
            <div className="container">
                <ContentCard>

                    {
                        items.map((dados) => (


                            <CardItem key={dados.char_id}
                                imagem={dados.img}
                                nome={dados.name}
                                ator={dados.portrayed}
                                apelido={dados.nickname}
                                status={dados.status}
                            />

                        ))
                    }


                </ContentCard>

                {`Total Exibido: ${totalCards}`} <br/>
                {/* {`Total Solicitado: ${showCards}`}  */}

                
                <VejaMais onClick={mostrarMais} disabled={showCards !== totalCards ? true : false}>  {`Mostrar mais ${totalCards}-${showCards}`}</VejaMais>
                

            </div>
        </>
    )


}