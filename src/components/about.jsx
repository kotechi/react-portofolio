export default function AboutSection() {
    return(
        <section id="about" className="py-20 px-8 min-h-screen  relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-white mb-4">
                    About <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                        <div className="absolute rotate-45 -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-md blur opacity-75 animate-pulse"></div>
                        <div className="relative w-80 h-80 rounded-md overflow-hidden bg-slate-800 border-4 border-primary">
                            <img src="/aditiya.png" className="w-full rotate- object-cover" alt="Aditiya" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/55 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500/50 rounded-full animate-bounce" ></div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-5xl font-bold mb-4">
                            <span className="text-white">Hello, I'm </span><br />
                            <span className="bg-gradient-to-t md:text-center sm:text-center from-primary to-yellow-400 bg-clip-text text-transparent">Aditiya Fathurrahman</span>
                        </h3>
                        <p className="text-xl text-slate-300 mb-6">Student at SMKN 1 CIOMAS</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-primary rounded-2xl p-8" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum, fugit in corporis, atque amet quasi doloremque delectus est facilis sapiente. Ab repudiandae quo omnis corporis impedit cumque obcaecati harum nihil aspernatur rerum. In, aliquid culpa. Tenetur ex ipsum veritatis suscipit ut nobis delectus eius facilis cumque quibusdam aut, quae accusantium harum tempora molestiae vel maiores beatae fuga repellat fugiat expedita eaque architecto unde! Repellendus cumque modi labore et praesentium dignissimos vel velit corporis architecto, est nulla necessitatibus esse ducimus illo! Voluptatum quas, reiciendis sunt labore praesentium voluptate repellat dolorem possimus exercitationem eum enim ex incidunt, nisi odio. Soluta, earum.
                        </p>
                        

                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-4 py-2 flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"><i className="fa fa-laptop" aria-hidden="true"></i>Fullstack WEB DEV</span>
                            <span className="px-4 py-2 flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"><i className="fa fa-laptop" aria-hidden="true"></i>Editor</span>
                            <span className="px-4 py-2 flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"><i className="fa fa-laptop" aria-hidden="true"></i>Editor</span>
                            <span className="px-4 py-2  flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"><i className="fa fa-camera" aria-hidden="true"></i>Fotographer</span>
                            <span className="px-4 py-2  flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"><i className="fa fa-video-camera" aria-hidden="true"></i>Videographer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}