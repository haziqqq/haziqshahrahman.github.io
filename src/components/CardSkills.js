import '../index.css'

const CardSkills = (props) => {
    return (
        <div className="flex col-span-4 items-center gap-x-2.5 lg:gap-x-4 p-2.5 lg:p-5 bg-primary rounded-xl hover:rotate-1 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-out">
            <div>
                <img src={require('../assets/img/skills/' + props.img + '.png')} className="w-skill lg:w-skill-lg"></img>
            </div>
            <div>
                <h1 className="text-subtitleSmall lg:text-subtitle text-white font-bold">{props.name}</h1>
                <p className="text-paragraphSmall lg:text-paragraph text-white mt-1">{props.type}</p>
            </div>
        </div>
    )
}

export default CardSkills;
