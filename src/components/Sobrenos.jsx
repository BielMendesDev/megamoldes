import coisaruim from '../assets/images.jpg'



export default function Sobrenos(){



    return(
        <div className="sobrenos-container">
            <div className="sobrenos-box">
                <div className="sobrenos-texto">

                    <h1 className='sobrenos-titulo'>Sobre Nós</h1>

                    <p className='sobrenos-descricao'>Percebemos, cada vez mais, que o desafiador cenário 
                        globalizado deve passar por modificações 
                        independentemente do processo de comunicação 
                        como um todo.</p>
                </div>
                <div className="sobrenos-foto">
                    <img  width={"500vw"} height={"500vw"} src={coisaruim} alt="" />
                </div>
            </div>
        </div>
    )
}