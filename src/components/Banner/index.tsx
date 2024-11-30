import bannerImg from '../../assets/img/bannerImg.png'
import { Btn } from '../Btn'
import './style.scss'


export const Banner = () =>{
    return(
        <section className='container-apre'>
            <div className='ifns'>
                <div className='title'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#023E8A"><path d="M309-389q29 29 71 29t71-29l160-160q29-29 29-71t-29-71q-29-29-71-29t-71 29q-37-13-73-6t-61 32q-25 25-32 61t6 73q-29 29-29 71t29 71ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l54 213.67q4.33 15.66-5.67 28.5-10 12.83-26.66 12.83H760v133.33q0 27.5-19.58 47.09Q720.83-160 693.33-160H600v80h-66.67v-146.67h160v-200h112l-42.66-171.66q-23.67-95-102.67-155t-180-60q-122 0-207.67 84.66-85.66 84.67-85.66 206.36 0 62.95 25.71 119.6Q238.1-346.06 285.33-302l21.34 20v202H240Zm256-366.67Z"/></svg>
                    <h2>Psi. Luana Ribeiro</h2>
                </div>
                <h2>Encontre paz interior e transforma sua vida através da psicologia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit asperiores similique earum officia blanditiis eos explicabo saepe eveniet cum natus aspernatur sed, quia animi ipsa obcaecati recusandae assumenda mollitia?</p>
                <Btn colorBtn='primary'/>
            </div>
            <div className='imgContainer'>
                <img src={bannerImg} alt="Dra. Luana Ribeiro" />
                <p>Dra. Luana Ribeiro</p>
            </div>
        </section>
    )
}