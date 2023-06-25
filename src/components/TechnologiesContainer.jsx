import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJsBadge,    
    DiNodejsSmall,
    DiPostgresql,
    DiReact,
    DiGit,
    DiGithubBadge,
    DiNpm
} from 'react-icons/di';

import {
    SiTypescript,
    SiJest,
    SiRedux,
    SiExpress
} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Estruturação semântica e acessibilidade."},
    {id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilização de paginas web com layouts modernos, responsivos e visualmente atraentes."},
    {id: "sass", name: "SASS", icon: <DiSass />, description: "SASS permite escrever estilos CSS de forma mais eficiente, organizada e reutilizável."},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação essencial para a web moderna."},
    {id: "ts", name: "TypeScript", icon: <SiTypescript />, description: "Aprimora a segurança e escalabilidade dos projetos, adicionando tipagem estática e recursos avançados a base de código JavaScript."},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Cria aplicações do lado do servidor poderosas e escaláveis usando o ambiente de execução JavaScript do Node.js."},
    {id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql />, description: "O PostgreSQL gerencia bancos de dados relacionais de forma confiável e segura, garantindo a persistência de dados em suas aplicações."},
    {id: "react", name: "React", icon: <DiReact />, description: "Constrói interfaces de usuário interativas e reativas, é uma biblioteca JavaScript popular para o desenvolvimento de aplicações web modernas."},
    {id: "express", name: "Express", icon: <SiExpress />, description: "Framework que cria APIs RESTful robustas e eficientes, aproveitando a simplicidade e a flexibilidade do Node.js."},
    {id: "jest", name: "Jest", icon: <SiJest />, description: "Poderoso framework para escrita de testes automatizados confiáveis e de fácil manutenção para JavaScript e React."},
    {id: "redux", name: "Redux", icon: <SiRedux />, description: "Gerencia o estado da aplicação de forma centralizada e previsível, garantindo um fluxo de dados consistente e escalável."},
    {id: "git", name: "Git", icon: <DiGit />, description: "Sistema de controle e versionamento de código-fonte muito eficiente, colaborativo e amplamente utilizado."},
    {id: "github", name: "Github", icon: <DiGithubBadge />, description: "Colaboração e compartilhamento de projetos, uma plataforma essencial para nós desenvolvedores que permite hospedar, revisar e colaborar em projetos de código aberto."},
    {id: "npm", name: "NPM", icon: <DiNpm />, description: "O NPM (Node Package Manager) nos permite instalar e aproveitar a vasta coleção de pacotes e bibliotecas para acelerar o desenvolvimento de nossas aplicações."}
];


const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technology-info'>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    
}

export default TechnologiesContainer;