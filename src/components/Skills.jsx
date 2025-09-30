const technologies = [
    { name: "HTML & CSS", icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Node.js", icon: "🟢" },
 
];

const Skills = () => {
    return (
        <>
            <h2 className="section-title">Lenguajes y Tecnologías</h2>
            <div className="skills-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{tech.icon}</div>
                        <p className="skill-name">{tech.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;