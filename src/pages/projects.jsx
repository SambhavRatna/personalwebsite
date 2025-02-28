const Projects = () => {
    const projectList = [
        {
            title: "AI-powered Library",
            description: "A digital library enhanced with AI for semantic search, book summaries, and interactive reading.",
            tags: ["AI", "Machine Learning", "Books"]
        },
        {
            title: "TTS Research Engine",
            description: "Developing a next-gen text-to-speech model with high-quality voice synthesis.",
            tags: ["Text-to-Speech", "Deep Learning", "Research"]
        },
        {
            title: "Paper Summary App",
            description: "An app that converts research papers into short, digestible summaries in text and audio.",
            tags: ["Summarization", "NLP", "Research Papers"]
        },
        {
            title: "AI Content Creator",
            description: "An AI-powered engine that automates content creation from text to video.",
            tags: ["AI", "Automation", "Content Generation"]
        }
    ];

    return (
        <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">Projects</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl p-6 border border-gray-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-2"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap mt-3 gap-2">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
