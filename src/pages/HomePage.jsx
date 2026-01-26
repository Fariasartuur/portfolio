import { useState, useEffect } from 'react';

import Badge from "../components/Badge";
import NavButton from "../components/NavButton";
import profileImg from '../assets/profile.jpg';
import projectPlaceholder from '../assets/placeholder.png';
import ProjectCard from "../components/ProjectCard";
import { HiDownload } from "react-icons/hi";
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

const HomePage = () => {
    const [repoCount, setRepoCount] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/users/Fariasartuur')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.public_repos) {
                    setRepoCount(data.public_repos);
                }
            })
            .catch(error => console.error('Erro ao buscar dados do GitHub:', error));
    }, []);



    return (
        <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center">
            <nav className="fixed top-5 z-50 flex flex-row justify-center bg-purple-950/30 backdrop-blur-md w-[90%] max-w-md p-4 rounded-full border border-purple-700/50 shadow-[0_0_20px_rgba(126,34,206,0.2)]">
                <NavButton label="Home" href="#home" />
                <NavButton label="About" href="#about" />
                <NavButton label="Projects" href="#projects" />
                <NavButton label="Contact" href="#contact" />
            </nav>

            <main className="mt-32 w-full max-w-4xl px-6">
                <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

                    {/* Manchas de luz de fundo (Blurry Blobs) - dão profundidade ao site */}
                    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] -z-10"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        {/* Lado Esquerdo: Textos e Ações */}
                        <div className="flex flex-col space-y-6 animate-fade-in">
                            <div className="space-y-2">
                                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                                    Olá, eu sou <br />
                                    <span className="bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                                        Artur!
                                    </span>
                                </h1>
                            </div>

                            <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                                Estudante de Engenharia de Computação focado em criar
                                soluções robustas com <span className="text-white">Java</span> e
                                interfaces modernas com <span className="text-white">React</span>.
                            </p>

                            {/* Redes Sociais e Botão de CV */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <a
                                    href="/curriculo-artur.pdf"
                                    download="Curriculo_Artur_Eng_Computacao.pdf"
                                    className="px-8 py-4 bg-purple-600 hover:bg-white rounded-xl text-white 
                               hover:text-purple-600 border border-purple-600 font-bold shadow-lg 
                               shadow-purple-700/30 transition-all duration-300 flex items-center justify-center group w-full sm:w-fit"
                                >
                                    Download CV
                                    <HiDownload className="ml-2 size-5 group-hover:bounce" />
                                </a>

                                <div className="flex items-center gap-4">
                                    <a href="https://github.com/Fariasartuur" target="_blank"
                                        className="p-3 bg-slate-900 border border-purple-700/30 rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all shadow-xl">
                                        <SiGithub size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/fariasartuur/" target="_blank"
                                        className="p-3 bg-slate-900 border border-purple-700/30 rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all shadow-xl">
                                        <SiLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center group">
                            <img src={profileImg} alt="Foto de Artur" className="rounded-lg size-82 border border-purple-700/50 shadow-[0_0_20px_rgba(126,34,206,0.2)] " />
                        </div>
                    </div>
                </section>

                <section id="about" className="min-h-screen py-24 border-t border-purple-900/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold italic border-l-4 border-purple-500 pl-4">Minha História</h2>
                            <p className="text-slate-400 text-lg">
                                Atualmente no 7º semestre de Engenharia de Computação, venho aprimorando minhas habilidades em arquitetura de software e análise de dados.
                            </p>
                            <p className="text-slate-400 text-lg">
                                Além do desenvolvimento, tive uma experiência marcante no projeto de inclusão digital da UNASP, onde ensinei tecnologia para idosos, o que moldou minha forma de ver o impacto social da engenharia.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-purple-900/10 border border-purple-700/20 rounded-xl text-center">
                                <span className="text-purple-400 font-bold text-2xl">7º</span>
                                <p className="text-xs text-slate-500 uppercase">Semestre</p>
                            </div>
                            <div className="p-4 bg-purple-900/10 border border-purple-700/20 rounded-xl text-center">
                                <span className="text-purple-400 font-bold text-2xl">{repoCount}+</span>
                                <p className="text-xs text-slate-500 uppercase">Repositórios</p>
                            </div>
                            {/* Adicione mais cards de fatos aqui */}
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap gap-3 mt-8 bg-purple-900/10 border border-purple-700/30 p-8 rounded-2xl backdrop-blur-sm justify-center">
                        <Badge text="HTML5" iconName="html" />
                        <Badge text="CSS3" iconName="css" />
                        <Badge text="JavaScript" iconName="javascript" />
                        <Badge text="React" iconName="react" />
                        <Badge text="Tailwind CSS" iconName="tailwind" />
                        <Badge text="Java" iconName="java" />
                        <Badge text="Spring Boot" iconName="spring" />
                        <Badge text="SQL" iconName="sql" />
                        <Badge text="Docker" iconName="docker" />
                        <Badge text="Python" iconName="python" />
                    </div>
                </section>

                <section id="projects" className="min-h-screen py-24 border-t border-purple-900/20">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-semibold mb-4">Projetos</h2>
                        <p className="text-slate-400 leading-relaxed text-center max-w-3xl mb-5">
                            Aqui estão alguns dos meus projetos recentes. Clique nos links para ver o código-fonte ou acessar o deploy.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <ProjectCard
                            title="Gerenciamento de Banco de Dados"
                            description="Este projeto, desenvolvido na disciplina Gerenciamento de Banco de Dados, tem como objetivo aplicar um ciclo completo de engenharia e análise de dados utilizando exclusivamente T-SQL."
                            tags={["T-SQL"]}
                            repoUrl="https://github.com/Fariasartuur/projeto-db"
                            image={projectPlaceholder}
                        />
                        <ProjectCard
                            title="ToDo List API"
                            description="Este projeto é uma API REST para gerenciamento de tarefas (To-Do List), desenvolvida em Java com Spring Boot. Ela permite criar, listar, atualizar e excluir tarefas, armazenando os dados em um banco relacional."
                            tags={["Java", "Spring Boot", "SQLite"]}
                            repoUrl="https://github.com/Fariasartuur/projeto-db"
                            image={projectPlaceholder}
                        />

                    </div>
                </section>

                <section id="contact" className="min-h-screen py-24 border-t border-purple-900/20 flex flex-col items-center justify-center">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent inline-block">
                            Meus Contatos
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-center max-w-xl mx-auto">
                            Minhas redes sociais e formas de contato. Sinta-se à vontade para me enviar uma mensagem!
                        </p>
                    </div>

                    {/* Grid de Contatos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl m-0 p-0">

                        {/* Card de Email */}
                        <a href="mailto:arturfarias49@gmail.com" className="w-full group p-6 bg-purple-900/10 border border-purple-700/30 rounded-2xl hover:border-purple-500 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <SiGmail size={32} className="text-purple-500" />
                                <FiArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-white font-semibold">Email</h3>
                            <p className="break-all text-slate-500 text-sm">arturfarias49@gmail.com</p>
                        </a>

                        {/* Card de LinkedIn */}
                        <a href="https://linkedin.com/in/fariasartuur" target="_blank" className="w-full group p-6 bg-purple-900/10 border border-purple-700/30 rounded-2xl hover:border-purple-500 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <SiLinkedin size={32} className="text-purple-500" />
                                <FiArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-white font-semibold">LinkedIn</h3>
                            <p className="text-slate-500 text-sm">in/fariasartuur</p>
                        </a>

                        {/* Card de GitHub */}
                        <a href="https://github.com/Fariasartuur" target="_blank" className="w-full group p-6 bg-purple-900/10 border border-purple-700/30 rounded-2xl hover:border-purple-500 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <SiGithub size={32} className="text-purple-500" />
                                <FiArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-white font-semibold">GitHub</h3>
                            <p className="text-slate-500 text-sm">@Fariasartuur</p>
                        </a>

                        {/* Card do Instagram */}
                        <a href="https://instagram.com/fariasartuur" target="_blank" className="w-full group p-6 bg-purple-900/10 border border-purple-700/30 rounded-2xl hover:border-purple-500 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <SiInstagram size={32} className="text-purple-500" />
                                <FiArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-white font-semibold">Instagram</h3>
                            <p className="text-slate-500 text-sm">@fariasartuur</p>
                        </a>
                    </div>

                    {/* Rodapé Simples */}
                    <footer className="mt-32 text-slate-600 text-sm">
                        <p>© 2026 Artur. Desenvolvido com React & Tailwind.</p>
                    </footer>
                </section>

            </main>

        </div>
    );
};

export default HomePage;