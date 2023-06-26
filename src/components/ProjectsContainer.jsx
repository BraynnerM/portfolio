import '../styles/components/projectscontainer.sass'


const projects = [
    {id: "github.gif", name: "Busca de Usuários Github", app:"https://braynnerm.github.io/projeto-mundo-real-com-fetch-e-github/", repositorie:"https://github.com/BraynnerM/projeto-mundo-real-com-fetch-e-github", description: "Projeto feito utilizando html, css e javascript, neste projeto é utilizado o metodo fetch para busca em uma api, ao pesquisar um usuário é possivel vermos sua foto, nome de usuário, bio cadastrada, seguidores, dados internos de cada repositorio e alêm disso uma lista com os commits mais recentes."}
]

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project-card" id={project.id} key={project.id}>
                    <div className="project-main">
                        <div>
                            <a href={project.app} target="_blank" rel="noopener noreferrer">
                                <img src={`./assets/projects-img/${project.id}`} alt="project-screenshot" />
                            </a>
                        </div>
                        <div className='project-info'>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>                        
                        </div>
                    </div>
                    <div>
                        <p>Clique na imagem para ver o APP ou <a href={project.repositorie} target="_blank" rel="noopener noreferrer">clique Aqui</a> para ver o repositório</p>
                    </div>                     
                </div>                
            ))}
        </div>
        <a href="#" className="btn">
            Ver Mais Projetos
        </a>
    </section>
}

export default ProjectsContainer;