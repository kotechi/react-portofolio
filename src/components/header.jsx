
export default function HeaderSection() {
    return (
        <section id="home" className="bg-gray-950 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-20 left-10 floating">
                <div className="w-12 h-12 border-2 border-primary rounded-full"></div>
            </div>
            <div className="absolute top-32 right-16 floating" >
                <div className="w-8 h-8 bg-secondary rotate-45"></div>
            </div>
            <div className="absolute  bottom-32 left-20 floating" >
                <div className="w-16 h-16 border-2 border-primary rounded-lg rotate-12"></div>
            </div>
            <div className="absolute bottom-20 right-12 floating">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
            </div>

            {/* link section desktop*/}
            <div className="hover:scale-105 transition-all ml-7 hidden md:flex absolute left-0 flex-col items-center justify-center space-y-4 mb-8 border-2 border-primary/40 rounded-4xl p-2">
                <a href="https://www.instagram.com/ezraairelll/" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300
">
                    <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="https://www.youtube.com/@EzraAirell" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300
">
                    <i className="fab fa-youtube text-white"></i>
                </a>
                <a to="https://www.tiktok.com/@ezraairell_11?is_from_webapp=1&sender_device=pc" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300">
                    <i className="fab fa-tiktok text-white"></i>
                </a>
            </div>
            
            <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary p-1 mb-6"  data-aos="flip-right" data-aos-delay="100">
                        <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                            <img src="/logonobg.png" alt="Aditiya" className="rounded-full w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
                        Hello, I'm <span className="bg-primary bg-clip-text text-transparent"><br /> Aditiya Fathurrahman</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8" data-aos="fade-down" data-aos-delay="200">Editor</p>
            
                    {/* link section mobile*/}
                    <div className="transition-all flex md:hidden items-center justify-center space-x-4 mb-8 border-2 border-primary/40 rounded-4xl p-2">
                        <a href="https://www.instagram.com/ezraairelll/" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300
        ">
                            <i className="fab fa-instagram text-white"></i>
                        </a>
                        <a href="https://www.youtube.com/@EzraAirell" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300
        ">
                            <i className="fab fa-youtube text-white"></i>
                        </a>
                        <a to="https://www.tiktok.com/@ezraairell_11?is_from_webapp=1&sender_device=pc" className="w-13 h-13 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition hover:bg-purple-600 hover:scale-110 transition duration-300">
                            <i className="fab fa-tiktok text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
                <div className="animate-bounce">
                    <i className="fas fa-chevron-down text-2xl"></i>
                </div>
            </div>
        </section>
    )
}