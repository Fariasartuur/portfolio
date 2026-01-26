import { SiReact, SiSpringboot, SiPostgresql, SiTailwindcss, SiDocker, SiPython, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { TbSql } from "react-icons/tb";
import { DiJava } from 'react-icons/di';


// Objeto de mapeamento
const iconMap = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  react: <SiReact />,
  sql: <TbSql />,
  spring: <SiSpringboot />,
  tailwind: <SiTailwindcss />,
  docker: <SiDocker />,
  java: <DiJava />,
  python: <SiPython />
};

const Badge = ({ text, iconName }) => {
  return (
    <span className="flex items-center gap-2 px-3 py-1 w-fit whitespace-nowrap bg-purple-500/10 border border-purple-500/50 text-purple-300 text-sm rounded-lg hover:bg-purple-500/20 transition-all">
      {iconMap[iconName]}
      {text}
    </span>
  );
};

export default Badge;