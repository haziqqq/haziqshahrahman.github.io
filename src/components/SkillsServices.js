import '../index.css'
import CardSkills from './CardSkills'

const SkillsServices = () => {
    const skills = [
        {
            img: "skill1",
            name: "Figma",
            type: "Design Tools"
        },

        {
            img: "skill2",
            name: "SASS",
            type: "CSS Preprocessor"
        },

        {
            img: "skill3",
            name: "Bootstrap",
            type: "CSS Framework"
        },

        {
            img: "skill4",
            name: "Tailwind",
            type: "CSS Framework"
        },

        {
            img: "skill5",
            name: "Premiere Pro",
            type: "Video Editing Software"
        },
    ]

    return (
        <section className="py-10 lg:pt-28 lg:pb-40 bg-secondary">
            <div className="_container">
                <h1 className="text-center text-primaryDark text-titleSmall lg:text-title">Skills & <b>Services</b></h1>
                <hr className="_line-primary"></hr>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-7 lg:mt-14 gap-3.5 lg:gap-10">
                    {skills.map((skill) =>
                        <CardSkills img={skill.img} name={skill.name} type={skill.type} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default SkillsServices;
