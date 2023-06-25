import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/braynner-foto.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
    <aside id="sidebar">
        <div className="sticky">
            <img src={Avatar} alt="Braynner Marques" />
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1O7wGuPn2Avq9n7IUq7uAT1TV8tGE_n4z/view?usp=sharing" target="_blank" className="btn" rel="noopener noreferrer">
                Download currículo
            </a>
        </div>
    </aside>
    )
};

export default Sidebar;