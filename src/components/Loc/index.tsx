import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineWhatsapp  } from "react-icons/md";
import { FaInstagram, FaFacebookSquare  } from "react-icons/fa";

import Iframe from '../Iframe'
import './style.scss'

export const Loc = () => {
    return(
        <section className='container-ext-loc'>
            <div className='container-int-loc'>

                <div className='loc'>
    
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#03045E"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        </span>
                        <p>Praça Min. Salgado Filho, s/n - Imbiribeira, Recife - PE</p>
                    </div>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31598.36329666797!2d-34.93927413318105!3d-8.122301468691798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1732993307594!5m2!1spt-PT!2sbr" />
                </div>
                <div className="contact">
                    <div>
                        <h2>Contato</h2>
                        <p><BsTelephone/> (11) 11111-1111</p>
                        <p><MdOutlineEmail /> email@email.com</p>
                    </div>
                    <p>
                        Convidamos você a se conectar, explorar nossos serviços e começar uma jornada rumo ao bem-estar. Estamos aqui para apoiar cada passo do seu caminho.
                    </p>
                    <div>
                        <h2>Siga-nos:</h2>
                        <p><MdOutlineWhatsapp /> (11) 11111-1111</p>
                        <p><FaInstagram /> @instatest</p>
                        <p><FaFacebookSquare /> @facebooktest</p>
                    </div>
                </div>
            </div>
        </section>
    )
}