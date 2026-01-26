import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Badge from "../components/Badge";
import NavButton from "../components/NavButton";
import profileImg from '../assets/profile.jpg';
import projectPlaceholder from '../assets/placeholder.png';
import ProjectCard from "../components/ProjectCard";
import SocialButton from '../components/SocialButton';
import Display from '../components/Display';
import ContactCard from '../components/ContactCard';

const HomePage = () => {
    const [repoCount, setRepoCount] = useState(0);

    useEffect(() => {
        if (!window.location.hash) {
        window.location.hash = "#home";
        }
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/Fariasartuur')
            .then(response => response.json())
            .then(data => {
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

                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                        <div className="flex flex-col space-y-6 animate-fade-in">
                            <header className="space-y-2">
                                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                                    Olá, eu sou <br />
                                    <span className="bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                                        Artur!
                                    </span>
                                </h1>
                            </header>

                            <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                                Estudante de Engenharia de Computação focado em criar
                                soluções robustas com <span className="text-white">Java</span> e
                                interfaces modernas com <span className="text-white">React</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <Button href="/Curriculo_Artur_Eng_Computacao.pdf" download="Curriculo_Artur_Eng_Computacao.pdf" label="Download CV" iconName="download"/>

                                <div className="flex items-center gap-4">
                                    <SocialButton href="https://github.com/Fariasartuur" iconName="github" />
                                    <SocialButton href="https://www.linkedin.com/in/fariasartuur/" iconName="linkedin" />
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
                            <Display number="7" label="Semestres" />
                            <Display number={repoCount+"+"} label="Repositórios" />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl m-0 p-0">
                        <ContactCard href="mailto:arturfarias49@gmail.com" label="Email" info="arturfarias49@gmail.com" iconName="gmail" />
                        <ContactCard href="https://www.linkedin.com/in/fariasartuur/" label="LinkedIn" info="/in/fariasartuur/" iconName="linkedin" />
                        <ContactCard href="https://github.com/Fariasartuur" label="GitHub" info="@Fariasartuur" iconName="github" />
                        <ContactCard href="https://instagram.com/fariasartuur" label="Instagram" info="@fariasartuur" iconName="instagram" />
                    </div>

                    <footer className="mt-32 text-slate-600 text-sm">
                        <p>© 2026 Artur. Desenvolvido com React & Tailwind.</p>
                    </footer>
                </section>

            </main>
        </div>
    );
};

export default HomePage;