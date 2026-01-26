import { HiDownload } from "react-icons/hi";

const iconMap = {
        download: <HiDownload className="ml-2 inline-block group-hover:animate-bounce" />
    }

const Button = ({ href, download, label, iconName }) => {
    const style = "px-8 py-4 bg-purple-600 hover:bg-white rounded-xl text-white hover:text-purple-600 border border-purple-600 font-bold shadow-lg shadow-purple-700/30 transition-all duration-300 flex items-center justify-center group w-full sm:w-fit"

    return (
        <a href={href} download={download} className={style}>
            {label}
            {iconMap[iconName]}
        </a>
    );
};

export default Button;