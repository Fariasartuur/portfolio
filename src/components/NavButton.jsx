const NavButton = ({ label, href }) => {
    return (
        <a href={href} className="text-sm font-medium cursor-pointer mx-4 hover:text-purple-400 transition duration-300">{label}</a>
    );
};

export default NavButton;