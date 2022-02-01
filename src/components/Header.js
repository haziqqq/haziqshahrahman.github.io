import '../index.css'
import profile from '../assets/img/profile.png'
import illustration from '../assets/img/illustration.png'
import ButtonPrimary from './ButtonPrimary.js'

const Header = (props) => {
    return (
        <section className='pt-16 pb-24 lg:pt-64 lg:pb-40 xl:pt-16 xl:pb-44'>
            <div className='_container'>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-between lg:gap-x-16 xl:gap-x-0'>
                    <div className='flex relative -mt-10 lg:mt-0'>
                        <img src={profile} className='w-48 lg:w-56 xl:w-profile absolute left-16 lg:left-20 xl:left-32 bottom-0'></img>
                        <img src={illustration} className='w-80 lg:w-big'></img>
                    </div>
                    <div className='mt-8 lg:mt-0'>
                        <h1 className='text-primary text-headerSmall lg:text-4xl xl:text-header font-bold lg:leading-relaxed'>Hi! I'm <br></br><span className='text-secondary'>{props.name}</span></h1>
                        <p className="text-primaryDark text-paragraphSmall lg:text-base xl:text-paragraph mt-4 leading-loose lg:leading-loose">I' m User Interface Designer. I like to design something like a website <br className="paragraph__header"></br> and mobile apps interface. I also have some knowledge in Front End Engineering.</p>
                        <ButtonPrimary />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header