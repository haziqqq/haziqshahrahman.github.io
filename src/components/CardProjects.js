import '../index.css'

const CardProjects = (props) => {
    return (
        <div className="col-span-4 relative _card _img-card-gradient">
            <img src={require('../assets/img/projects/' + props.img + '.png')} className="rounded-xl"></img>
            <div className="_card-footer transition-all duration-300 translate-y-0 lg:translate-y-16 opacity-100 lg:opacity-0 px-14 absolute bottom-4 lg:bottom-8 left-0 right-5">
                <h2 className="text-white text-center text-subtitleSmall lg:text-subtitle font-semibold">{props.name}</h2>
            </div>
        </div>
    )
}

export default CardProjects;
