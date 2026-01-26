import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tags, repoUrl, liveUrl, image }) => {
  return (
    <div className="group relative bg-purple-900/5 border border-purple-700/20 p-6 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
      {/* Efeito de brilho de fundo no hover */}
      <div className="absolute -inset-px bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagem do Projeto */}
        <div className="w-full md:w-72 h-44 shrink-0 rounded-xl overflow-hidden border border-purple-700/30">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 mt-3 leading-relaxed">
              {description}
            </p>
            
            {/* Tags de Tech */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-purple-300 bg-purple-900/30 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            <a href={repoUrl} target="_blank" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <FiGithub /> Código
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <FiExternalLink /> Deploy
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;