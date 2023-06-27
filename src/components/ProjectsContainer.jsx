import { useState } from 'react';

import '../styles/components/projectscontainer.sass'

const projects = [
    {id: "github.gif", name: "Busca de Usuários Github", app: "https://braynnerm.github.io/projeto-mundo-real-com-fetch-e-github/", repositorie: "https://github.com/BraynnerM/projeto-mundo-real-com-fetch-e-github", description: "Projeto feito utilizando HTML, CSS e JavaScript, neste projeto é utilizado o metodo fetch para busca em uma api, ao pesquisar um usuário é possivel vermos sua foto, nome de usuário, bio cadastrada, seguidores, dados internos de cada repositorio e alêm disso uma lista com os commits mais recentes."},
    {id: "pokemon.gif", name: "Pokemon Guide", app: "https://desafio-react-avancado.vercel.app/", repositorie: "https://github.com/BraynnerM/desafio-react-avancado", description: "Teste técnico utilizando conceitos do React, (react router DOM, styled components, context API) este projeto faz um fetch na api de pokemons e os lista, filtra por tipo e é possivel ver as informações com detalhes de cada pokemon."},
    {id: "movieflix.webp", name: "API Movieflix", app: "https://github.com/BraynnerM/movieflix-api", repositorie: "https://github.com/BraynnerM/movieflix-api", description: "Projeto de backend utilizando Express (Nodejs) e postgresql, criação de uma api para armazenar e gerenciar dados de filmes."},
    {id: "mario.gif", name: "Super Mario Bros", app: "https://braynnerm.github.io/Projeto-Mario/", repositorie: "https://github.com/BraynnerM/Projeto-Mario", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e JavaScript."},
    {id: "conselhos.gif", name: "App gerador de conselhos", app: "https://braynnerm.github.io/app-gerador-de-conselhos/", repositorie: "https://github.com/BraynnerM/app-gerador-de-conselhos", description: "App simples que faz um fetch em uma api cada vez que  o botão é clicado apresentando um novo conselho diferente ao usuário."},
    {id: "nft.gif", name: "Cartão NFT", app: "https://braynnerm.github.io/Cartao-NFT/", repositorie: "https://github.com/BraynnerM/Cartao-NFT", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade."},
    {id: "perfil.jpg", name: "Cartão de perfil", app: "https://braynnerm.github.io/Cartao-de-perfil/", repositorie: "https://github.com/BraynnerM/Cartao-de-perfil", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade."},
    {id: "huddle.gif", name: "Huddle Landing page", app: "https://braynnerm.github.io/huddle-landing-page/", repositorie: "https://github.com/BraynnerM/huddle-landing-page", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade."},
    {id: "summary.gif", name: "Sumário de resultado", app: "https://braynnerm.github.io/results-summary-component/", repositorie: "https://github.com/BraynnerM/results-summary-component", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade."},
    {id: "product.gif", name: "Cartão de oferta de produto", app: "https://braynnerm.github.io/product-preview-card-component/", repositorie: "https://github.com/BraynnerM/product-preview-card-component", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
    {id: "rating.gif", name: "Cartão de pontuação interativo", app: "https://braynnerm.github.io/interactive-rating-component-main/", repositorie: "https://github.com/BraynnerM/interactive-rating-component-main", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
    {id: "order.gif", name: "Sumário de pedido", app: "https://braynnerm.github.io/order-summary-component-main/", repositorie: "https://github.com/BraynnerM/order-summary-component-main", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
    {id: "cars.gif", name: "Cartão de prévia de carros", app: "https://braynnerm.github.io/3-column-preview-card-component-main/", repositorie: "https://github.com/BraynnerM/3-column-preview-card-component-main", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
    {id: "status.gif", name: "Cartão de status prévios", app: "https://braynnerm.github.io/stats-preview-card-component-main/", repositorie: "https://github.com/BraynnerM/stats-preview-card-component-main", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
    {id: "qrcode.png", name: "Componente de QR-Code", app: "https://braynnerm.github.io/qr-code-component-main/", repositorie: "https://github.com/BraynnerM/qr-code-component-main", description: "Pequeno projeto para fins educacionais, utilizando conceitos basicos de HTML, CSS e responsividade"},
]

const ProjectsContainer = () => {    

    const [showMoreProjects, setShowMoreProjects] = useState(4);    
    
    const handleShowMoreProjects = () => {
        event.preventDefault();
        setShowMoreProjects(prevMoreProjects => prevMoreProjects + 4);
    }

    return <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
            {projects.slice(0, showMoreProjects).map((project) => (
                <div className="project-card" id={project.id} key={project.id}>
                <div className="project-main">
                    <div className="project-image-wrapper">
                        <a href={project.app} target="_blank" rel="noopener noreferrer">
                            <img className="project-image" src={`./assets/projects-img/${project.id}`} alt="project-screenshot" />
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
        {projects.length > showMoreProjects && (
        <a className="btn" onClick={handleShowMoreProjects}>
          Ver Mais Projetos
        </a>
      )}
    </section>
}

export default ProjectsContainer;