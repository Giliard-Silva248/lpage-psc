import './style.scss'
import aboutMeImg from '../../assets/img/aboutMeImg.jpg'

export const AboutMe = () =>{
    return(
        <section className='container-apre'>
            <div className='img-about'>
                <img src={aboutMeImg} alt="Psi. Luana Ribeiro" />
            </div>
            <div className='about-inf'>
                <h2>Conheça a Psi. Luana Ribeiro</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam nisi, obcaecati in, non fuga doloremque illum molestias quos ipsum earum. Odit quam labore doloribus nobis quasi? Pariatur facilis nostrum sed sapiente praesentium doloremque modi eaque. Consectetur eum, non esse quam, cumque voluptas nemo eaque, necessitatibus fuga dolorem dolorum laboriosam</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam nisi, obcaecati in, non fuga doloremque illum molestias quos ipsum earum. Odit quam labore doloribus nobis quasi? Pariatur facilis nostrum sed sapiente praesentium doloremque modi eaque. Consectetur eum, non esse quam, cumque voluptas nemo eaque, necessitatibus fuga dolorem dolorum laboriosam</p>

            </div>
        </section>
    )
}