const projectsData = [
    {
        name: "Proyecto final modulo Css: Página Web Responsiva",
        description: "Desarrollé una página web de temática libre aplicando CSS avanzado, con menú adaptable, galería de imágenes con transiciones, footer responsivo y diseño coherente ajustado a distintos tamaños de pantalla mediante Flexbox, Grid y media queries.",
        technologies: ["HTML ", "CSS",],
        imageUrl: "https://cdn.palbincdn.com/images/blog/gallery/que-es-el-diseno-web-responsive-y-cuales-son-sus-ventajas.png",
        githubUrl: "https://github.com/Yercko12/examenfinalcss.git",
        demoUrl: "https://examenfinalcss.netlify.app/"
    },
    {
        name: "Proyecto final modulo Javascript: Conversor de Monedas con Fetch y API",
        description: "Desarrollé un conversor de monedas desde pesos chilenos, utilizando el método fetch para obtener indicadores económicos desde la API de mindicador.cl",
        technologies: ["HTML ", "CSS ", "Javascript"],
        imageUrl: "https://libertex.org/sites/default/files/styles/blog_detail_hero/public/2024-08/currency-conversion-main.jpg?itok=x0Wi4wm4",
        githubUrl: "https://github.com/Yercko12/ConversorDeMoneda.git",
        demoUrl: "https://admirable-twilight-90e29a.netlify.app/"
    },
    {
        name: "Blackjack",
        description: "Desarrollé una versión del juego Blackjack como parte del curso de JavaScript de Fernando Herrera. El proyecto me permitió practicar conceptos clave como manipulación del DOM, funciones, arreglos y lógica de control.",
        technologies: ["HTML ", "CSS ", "Javascript"],
        imageUrl: "https://images.prismic.io/desplaines-rushstreetgaming/1c8e0aa3-6b2d-4f01-a49e-15b556dc0882_03253_March-Blackjack-Blowout-Email_Image_1200x650_v1_210223.jpg?auto=compress,format",
        githubUrl: "https://github.com/Yercko12/blackjack.git",
        demoUrl: "https://blackjackcursofernandoherrera.netlify.app/"
    },
    {
        name: "Contact form",
        description: "Desarrollé una versión del juego Blackjack como parte del curso de JavaScript de Fernando Herrera. El proyecto me permitió practicar conceptos clave como manipulación del DOM, funciones, arreglos y lógica de control.",
        technologies: ["HTML ", "CSS ", "Javascript"],
        imageUrl: "https://res.cloudinary.com/dz209s6jk/image/upload/v1715865266/Challenges/dmfvghaamqjt9lrx43ql.jpg",
        githubUrl: "https://github.com/Yercko12/Formulario.git",
        demoUrl: "https://formulariocontactoo.netlify.app/"
    },
    {
        name: "Landing Page de Marketing",
        description: "Página de aterrizaje (landing page) moderna y responsive, diseñada para campañas de marketing digital con animaciones CSS y optimización SEO.",
        technologies: ["HTML", "CSS ", "JavaScript"],
        imageUrl: "/images/landing-page.png", 
        githubUrl: "https://github.com/tu-usuario/marketing-landing-page",
        demoUrl: "https://lp.tudominio.com"
    },
    {
        name: "Proyecto final de bootcamp: Un hogar más",
        description: "Página de aterrizaje (landing page) moderna y responsive, diseñada para campañas de marketing digital con animaciones CSS y optimización SEO.",
        technologies: ["HTML ", "CSS ","JavaScript ","React ","PostgreSQL ", "Node.js"],
        imageUrl: "https://cruzialseo.com/wp-content/uploads/2024/05/25-Ideas-creativas-para-crear-una-pagina-web.jpg", 
        githubUrl: null,
        demoUrl: "https://warm-taiyaki-b0692b.netlify.app/"
    },
];

const Projects = () => {
    return (
        <>
            <h2 className="section-title">Mis Proyectos </h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <a
                        key={index}
                        href={project.demoUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-with-image"
                    >
                        <div className="project-image-container">
                            <img src={project.imageUrl} alt={project.name} />
                        </div>
                        <div className="project-info">
                            <h3 className="project-card-title">{project.name}</h3>
                            <p className="project-card-description">{project.description}</p>

                            <div className="project-tech-tags">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className={`project-card-links ${!project.demoUrl && 'single-link'}`}>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-link-button"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-link-button"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Ver Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Projects;