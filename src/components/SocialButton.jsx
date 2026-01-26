import { SiGithub, SiLinkedin } from 'react-icons/si';

const iconMap = {
        github: <SiGithub size={24} />,
        linkedin: <SiLinkedin size={24} />
}

const SocialButton = ({ href, iconName }) => {
    const style = "p-3 bg-slate-900 border border-purple-700/30 rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all shadow-xl"
    
    return (
        <a href={href} target="_blank"
            className={style}>
            {iconMap[iconName]}
        </a>
    );
};

export default SocialButton;