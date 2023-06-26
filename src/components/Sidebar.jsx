import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../assets/main-img/braynner-foto.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
    <aside id="sidebar">
        <div className="sticky">
            <img src={Avatar} alt="Braynner Marques" />
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/18X8OOV1OC3sWw7pTVpsDZxoUWrFJxh7M/view?usp=sharing" target="_blank" className="btn" rel="noopener noreferrer">
                Download currículo
            </a>
        </div>
    </aside>
    )
};

export default Sidebar;