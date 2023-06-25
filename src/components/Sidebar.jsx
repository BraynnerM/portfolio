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
            <a href="" className="btn">
                Download currículo
            </a>
        </div>
    </aside>
    )
};

export default Sidebar;