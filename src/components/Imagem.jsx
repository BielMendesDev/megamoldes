import PromoFirma from '../assets/promofirma.jpg'

export default function Image(){
    return(
        <div className="image-container">
            <img src={PromoFirma} alt="" className="image-promo" />
        </div>
    )
}