import coisaruim from '../assets/images.jpg'
import { useState } from 'react'
import Produtos from '../assets/produtos.json'
import { GoChevronLeft, GoChevronRight  } from "react-icons/go";

export default function Produto(){
    const [produtos, setProdutos] = useState(Produtos)
    const [currentIndex, setCurrentIndex] = useState(0);


    const cardsToShow = 5; 

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
        Math.min(prevIndex + 1, produtos.length - cardsToShow)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

     


    return(
        <div className="produtos-container">
            <h1 className='produto-titulo'>Produtos</h1>

            <div className="produtos-cardbox">
            <button 
                className='cards-button' 
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                <GoChevronLeft />
            </button>
            
                {produtos.slice(currentIndex, currentIndex + cardsToShow).map((produto) => (
                <div key={produto.id} className="produto-card">
                    <div className='produto-card-foto'>
                    <img 
                        className='produto-foto'
                        src={produto.imagem}
                        alt={produto.nome}
                    />
                    </div>
                    <h2 className='cards-titulo'>{produto.nome}</h2>
                    <p className='cards-description'>{produto.descricao}</p>
                </div>
                ))}
               
               <button 
                    className='cards-button' 
                    onClick={nextSlide}
                    disabled={currentIndex >= produtos.length - cardsToShow}
                >
                    <GoChevronRight />
                </button>
            </div>


        </div>
    )
}