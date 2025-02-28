import myImage from "../assets/img.png";
import { MapPin, Globe, Twitter, Linkedin, Briefcase, BookOpen } from "lucide-react"; // Importing Icons

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen p-1 border-[10px] border-gray-900 border-t-0 bg-gray-50">
            {/* Placeholder for Slideshow - 200px Height */}
            <div 
                className="h-[200px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            ></div>

            {/* Main Content - Two Columns */}
            <div className="flex flex-1 mt-2">
                {/* Left Sidebar */}
                <div className="w-1/5 p-4 pl-8 bg-gray-100 text-gray-800 rounded-lg shadow-md flex flex-col gap-4 overflow-hidden">
                    {/* Profile Image */}
                    <img 
                        src={myImage} 
                        alt="Sidebar Image" 
                        className="w-full max-w-[200px] h-auto rounded-lg shadow-md" 
                    />

                    {/* Information Section */}
                    <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase size={20} className="text-blue-500" />
                        <span>Ojas Softech Pvt. Ltd.</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={20} className="text-blue-500" />
                        <span>Noida, India</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Globe size={20} className="text-blue-500" />
                        <a 
                            href="https://github.com/Ratna-Sambhav" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Twitter size={20} className="text-blue-500" />
                        <a 
                            href="https://www.kaggle.com/sambhavratna" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition"
                        >
                            Kaggle
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Linkedin size={20} className="text-blue-500" />
                        <a 
                            href="https://www.linkedin.com/in/ratna-sambhav156/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <BookOpen size={20} className="text-blue-500" />
                        <a 
                            href="https://huggingface.co/ratnaonline1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition"
                        >
                            Hugging Face
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-4/5 p-5 text-left bg-white rounded-lg shadow-md">
                    <h2 className="mt-0 pt-2 text-xl font-bold text-gray-900">About Me</h2>
                    <p className="mt-2 text-gray-700">
                        I’m Ratna, an ML Engineer with 3.5 years of experience in AI/ML. Passionate about text-to-speech, AI-driven content creation, and system design. Currently working at Liquid AI and exploring advanced architectures in deep learning.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Fusce suscipit diam vel libero pharetra, sit amet tincidunt ipsum scelerisque.
                        Integer ullamcorper nunc eget dolor eleifend, eget lacinia erat imperdiet.
                        Vestibulum non tortor nec risus vestibulum egestas.
                    </p>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Discover more</h3>
                    <p className="mt-2 text-gray-700">
                        Ratna is an experienced Machine Learning Engineer with 3.5 years of expertise in ML/AI, currently working at Onas Softech with a salary of 7 LPA. With a bachelor’s degree from BIT Mesra (Tier 1 Indian University) and a 7.7 GPA, Ratna has a strong academic background and an IELTS score of 8.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Professionally, Ratna has worked on diverse AI applications, including text-to-speech (TTS), pre-training models for domain adaptation, and content generation engines. Ratna is also skilled in Azure, with experience in server management, authentication, resource provisioning, and monitoring user activity. Currently, Ratna is expanding expertise in Kafka and Terraform while developing an AI-powered digital library, a research paper summarization app, and an automated content creation engine. With a strong interest in TTS research, Ratna is considering pursuing a PhD in the field, aiming to develop innovative architectures that push the boundaries of AI-generated speech.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
