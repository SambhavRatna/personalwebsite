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
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Projects</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg p-6 border transition-shadow shadow-[rgba(0,0,0,0.15)_-5px_-5px_10px_0px] hover:shadow-[rgba(0,0,0,0.3)_-7px_-7px_15px_0px]"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <div className="flex flex-wrap mt-3 gap-2">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">
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
