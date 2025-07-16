import "../css/skill.css"


const hardSkills = [
    {
        judul: "Adobe Photoshop",
        icon: "adobeptsh.svg",
        iconType: "svg",
        deskripsi: "Photoshop adalah tempat pasti saya untuk membuat design poster, thumbnail, social media promotion, logo, iklan, dan lain sebagainya."
    },
]
const softSkills = [
    {
        judul: "Kerja Sama",
        icon: "fas fa-handshake",
    },
]


export default function SkillSection() {
    function SoftSkillsList() {
        return softSkills.map(skill => (
                <div className="skill-item">
                    <div className="skill-header">
                        <div className="skill-info">
                            <div className="skill-icon">
                                <i className="skill.icon"></i>
                            </div>
                            <span className="skill-name">{skill.judul}</span>
                        </div>
                    </div>
                </div>
            ))
        };
    function HardSkillsList() {
        return hardSkills.map(skill=> (
        <div className="skill-item">

            <div className="skill-header">
                <div className="skill-info">
                    <div className="skill-icon"> 
                    <img src="/${skill.icon}" />
                    </div>
                    <span className="skill-name">{skill.judul}</span>
                </div>
            </div>
            <p className="skill-description">{skill.deskripsi}</p>
        </div>
    ))
    }
    return(
    <section id="skills" className="p-9 overflow-hidden skills-section hero-gradient">
        <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
        </div>
        
        <div className="text-center">
            <div className="">
                <h1 className="h-11 font-bold text-5xl bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent mb-2">My Skills</h1>
                <p className="text-2xl text-[#94a3b8]">Tools, technologies and abilities I work with</p>
            </div>
            
            <div className="skill-grid ">
                <div className="skill-category">
                    <div className="category-header">
                        <div className="category-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div>
                            <h3 className="category-title">Hard Skills</h3>
                            <p className="category-subtitle">Technical expertise & tools</p>
                        </div>
                    </div>
                    
                    <div id="hard-skills-list" className="skills-list">
                        <HardSkillsList />
                    </div>
                </div>
                
                <div className="skill-category">
                    <div className="category-header">
                        <div className="category-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div>
                            <h3 className="category-title">Soft Skills</h3>
                            <p className="category-subtitle">Personal & interpersonal abilities</p>
                        </div>
                    </div>
                    
                    <div id="softSkillsList" className="skills-list">
                        <SoftSkillsList />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}