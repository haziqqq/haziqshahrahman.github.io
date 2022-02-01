import '../index.css'
import CardProjects from './CardProjects'

const Projects = () => {
    const projects = [
        {
            img: "project1",
            name: "Imanqu Starter Template",
        }
    ]

    return (
        <section className="py-28">
            <div className="_container">
                <h1 className="text-center text-primaryDark text-titleSmall lg:text-title">My <b>Projects</b></h1>
                <hr className="_line-primary"></hr>
                <div className="py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-12">
                    {projects.map((project) =>
                        <CardProjects img={project.img} name={project.name} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects;
