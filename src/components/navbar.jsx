import '../style/Style.css'
import coisaruim from '../assets/images.jpg'


export default function Navbar(){



    return(
        <div className="navbar-container">
            <div className="navbar-container-logo">
                <img src={coisaruim} alt="logo" className='navbar-logo' />
            </div>
            <div className="navbar-container-links">
                <a href="" className="navbar-links">Sobre Nós</a>
                <a href="" className="navbar-links">Produtos</a>
                <a href="" className="navbar-links">Serviços</a>
                <a href="" className="navbar-links">Contato</a>
            </div>
            <div className="navbar-container-button">
                <button className="navbar-button">
                    Orçamento
                </button>
            </div>
        </div>
    )
}