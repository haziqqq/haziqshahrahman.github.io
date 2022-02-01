import '../index.css'
import about from '../assets/img/about.png'
import ButtonOutline from './ButtonOutline'

const About = () => {
    return (
        <section className="bg-primary py-8 lg:pt-28 pb-40">
            <div className="_container">
                <h1 className="text-center text-white text-titleSmall lg:text-title">About <b>Me</b></h1>
                <hr className="_line-secondary"></hr>
                <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-x-28">
                    <div className="col-span-1 lg:col-span-2 flex justify-center mt-7 lg:mt-0">
                        <img src={about} className="w-about lg:w-about-lg"></img>
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <p className="text-white text-paragraphSmall lg:text-base xl:text-paragraph text-center lg:text-left font-normal leading-loose lg:leading-loose mt-6 lg:mt-10">My fullname is Muhammad Haziq Shahrahman and i'm from Padang, Indonesia. I'm <b>User Interface Designer</b> and also <b>Web Designer.</b> I'm passionate to make some design and slice it into a fresh website. I started learning <b>UI & Web Design</b> since 2021.</p>
                        <div className="flex justify-center lg:justify-start">
                            <ButtonOutline />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
