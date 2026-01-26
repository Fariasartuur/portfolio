import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

const iconMap = {
    github: <SiGithub size={32} className="text-purple-500" />,
    linkedin: <SiLinkedin size={32} className="text-purple-500" />,
    gmail: <SiGmail size={32} className="text-purple-500" />,
    instagram: <SiInstagram size={32} className="text-purple-500" />
}

const ContactCard = ({ href, label, info, iconName }) => {
    const style = "w-full group p-6 bg-purple-900/10 border border-purple-700/30 rounded-2xl hover:border-purple-500 transition-all duration-300"
    return (
        <a href={href} className={style}>
            <div className="flex justify-between items-start mb-4">
                {iconMap[iconName]}
                <FiArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-semibold">{label}</h3>
            <p className="break-all text-slate-500 text-sm">{info}</p>
        </a>
    );
};

export default ContactCard;