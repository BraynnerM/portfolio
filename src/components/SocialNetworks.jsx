import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/braynner-marques-ribeiro-de-oliveira-88142b256/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/BraynnerM"},
    {name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/braynner.m/"}
]

const SocialNetworks = () => {
    return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
                {network.icon}
            </a>
        ))}
    </section>
    )
};

export default SocialNetworks;