"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Github,
    Linkedin,
    Mail,
    User,
    Briefcase,
    GraduationCap,
    Code,
    FileText,
    Download,
    Twitter,
    ExternalLink,
    MapPin,
    Phone,
} from 'lucide-react';

// Resume Data (based on the provided PDF)
const resumeData = {
    name: 'Tushar Dogra',
    tagline: 'Software Developer',
    contact: {
        phone: '+918491057538',
        email: 'tushardogra19@gmail.com',
        location: 'Chandigarh,India',
        linkedin: 'https://www.linkedin.com/in/tushar-dogra-55b687240/',
        github: 'https://github.com/strikertushar19',
        twitter: 'https://x.com/0Tushar'
    },
    education: [
        {
            degree: 'Bachelor of Information Technology',
            institution: 'National Institute of Technology Srinagar',
            date: 'Expected 2025',
            cgpa: 'CGPA: 7.053 / 10',
            courses: ['DSA', 'DBMS', 'Operating System', 'AI', 'Computer Networks'],
        },
        {
            degree: 'Senior Secondary',
            institution: 'JNV UDHAMPUR/CBSE Board',
            date: '2021',
            grade: 'Grade: 86.2%',
        },
        {
            degree: 'Secondary',
            institution: 'JNV UDHAMPUR/CBSE Board',
            date: '2019',
            grade: 'Grade: 93%',
        },
    ],
    skills: {
        languages: ['GO','C/C++', 'Python', 'JavaScript', 'Java', 'SQL'],
        tools: ['AWS', 'Git', 'Jupyter Notebook', 'Google Colab', 'Linux', 'Windows'],
        libraries: ['Pandas', 'Numpy', 'Matplotlib', 'LangChain', 'FastAPI', 'Flask'],
        llm: ['Langchain', 'LangGraph', 'CrewAI', 'Swarm-Openai', 'Autogen', 'Semantic-kernel', 'Pinecone'],
        web: ['HTML/CSS/JS', 'ReactJS/NextJS', 'GIN-GO','Django', 'Nodejs', 'Express', 'Tailwind', 'FastAPI', 'Flask'],
        softSkills: ['Communication', 'Teamwork', 'Problem-Solving', 'Rapid Learner'],
    },
    experience: [
        {
            title: 'Software Developer Intern',
            company: 'Inspeq AI (Startup)',
            date: 'Dec 2023 - June 2024',
            location: 'Dublin, Ireland (Remote)',
            description: [
                'Optimized microservices with Docker and Redis, boosting performance by 15%.',
                'Redesigned backend and frontend with FastAPI and React, improving efficiency by 20%.',
                'Developed Inspeq SDK/API, and deployed on-premise solution on cloud with AWS and Azure.',
                "Integrated LLM's like GPT-4 models, to make evaluation metrics for safe reliable software development.",
                'Worked in a fast-paced environment with the ability to learn quickly.',
            ],
        },
        {
            title: 'Fullstack Developer Intern',
            company: 'OneScope AI (Startup)',
            date: 'Sep 2023 - Oct 2023',
            location: 'Ireland (Remote)',
            description: [
                'Built an AI agent application using Flask, Langchain, and React.',
                'Developed functionality to interact with users, process Excel data for carbon emission charts, and provide suggestions for emission reduction.',
                'Utilized OpenAI GPT-3.5 LLM and Pinecone vector database.',
            ],
        },
    ],
    projects: [
        {
            title: 'Python SDK',
            description:
                'Developed a Python SDK for Inspeq AI, enabling customers to integrate library functions into their projects.',
            pypiLink: 'https://pypi.org/project/inspeqai/',
        },
        {
            title: 'Emotions AI',
            description:
                'Developed a single-page application for emotion detection from text prompts using a sentiment analysis ML model from Hugging Face.',
            liveUrl: 'https://sentiment-analysis-frontend-zeta.vercel.app/',
        },
        {
            title: 'Find Loop',
            description:
                'Automated PDF searching and fetching from Google using an LLM model, saving 90% of the time spent clicking on links and downloading them. I also integrated LLM models using agentic frameworks like langchain and CrewAI to read PDFs and generate summaries, reducing the time spent reading PDFs by 80%.',
            githubUrl: 'https://github.com/strikertushar19/FindLoop',
        },
    ],
    certificates: [
        {
            title: 'Letter of Recommendation',
            institution: 'Inspeq AI',
            url: 'https://drive.google.com/file/d/1253szkhBwV1mI6Y81MY4Mo2o7OX0EY9O/view',
        },
        {
            title: 'Web Development',
            institution: 'FreecodeCamp',
            url: 'https://www.freecodecamp.org/certification/chiefmasterinprogramming_2023/responsive-web-design',
        },
    ],
    resumeUrl: 'https://drive.google.com/file/d/10D1NdCmuH2Vh6EpP7B8BkkP2gWXrp21k/view?usp=sharing',
};

// Animation hook for scrolling sections
function useScrollAnimation() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return { ref, controls, variants: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, 
                staggerChildren: 0.1
            }
        }
    }};
}

// Animation for children items
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Helper function to generate social links
interface Contact {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
    twitter: string;
}

const getSocialLinks = (contact: Contact) => [
    {
        icon: <Github className="h-5 w-5" />,
        label: 'GitHub',
        url: contact.github,
    },
    {
        icon: <Linkedin className="h-5 w-5" />,
        label: 'LinkedIn',
        url: contact.linkedin,
    },
    {
        icon: <Mail className="h-5 w-5" />,
        label: 'Email',
        url: `mailto:${contact.email}`,
    },
    {
        icon: <Twitter className="h-5 w-5" />,
        label: 'Twitter',
        url: contact.twitter,
    },
];

interface ContactItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    url?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, url }) => (
    <motion.div 
        variants={itemVariants} 
        className="flex items-center mb-4"
    >
        <span className="mr-3 text-indigo-600 bg-indigo-50 p-2 rounded-lg">
            {icon}
        </span>
        <div>
            <div className="text-xs text-gray-500">{label}</div>
            {url ? (
                <a href={url} className="text-gray-800 hover:text-indigo-600 transition-colors">
                    {value}
                </a>
            ) : (
                <div className="text-gray-800">{value}</div>
            )}
        </div>
    </motion.div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium mr-2 mb-2 shadow-sm border border-indigo-100 hover:shadow-md transition-all duration-300">
        {skill}
    </span>
);

const SectionTitle: React.FC<{ title: string; icon?: React.ReactNode }> = ({ title, icon }) => (
    <div className="flex items-center mb-8">
        {icon && (
            <div className="mr-4 bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg text-white shadow-lg">
                {icon}
            </div>
        )}
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-indigo-100 pb-2">
            {title}
        </h2>
    </div>
);

interface Experience {
    title: string;
    company: string;
    date: string;
    location: string;
    description: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
    const { ref, controls, variants } = useScrollAnimation();
    
    return (
        <motion.div 
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="mb-8 p-6 rounded-xl bg-white shadow-lg border-l-4 border-indigo-400 transition-all duration-300 hover:shadow-xl hover:border-indigo-600"
        >
            <div className="flex justify-between items-start flex-wrap mb-3">
                <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                <p className="text-indigo-600 font-medium">{experience.date}</p>
            </div>
            <div className="flex items-center mb-4">
                <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                <p className="text-gray-700 font-medium">{experience.company}</p>
                <span className="mx-2 text-gray-400">•</span>
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <p className="text-gray-700">{experience.location}</p>
            </div>
            <ul className="space-y-2">
                {experience.description.map((item, index) => (
                    <motion.li 
                        key={index} 
                        variants={itemVariants}
                        className="flex text-gray-700"
                    >
                        <span className="text-indigo-500 mr-2">•</span>
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

interface Project {
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    pypiLink?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { ref, controls, variants } = useScrollAnimation();
    
    return (
        <motion.div 
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="mb-8 p-6 rounded-xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
        >
            <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </a>
                )}
                {project.pypiLink && (
                    <a
                        href={project.pypiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        <ExternalLink className="h-4 w-4" />
                        PyPI
                    </a>
                )}
            </div>
        </motion.div>
    );
};

interface Certificate {
    title: string;
    institution: string;
    url?: string;
}

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => (
    <motion.div 
        variants={itemVariants} 
        className="mb-4 p-4 rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
    >
        <h3 className="text-lg font-semibold text-gray-800">{certificate.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{certificate.institution}</p>
        {certificate.url && (
            <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 text-sm"
            >
                <FileText className="h-3 w-3" />
                View Certificate
            </a>
        )}
    </motion.div>
);

interface Education {
    degree: string;
    institution: string;
    date: string;
    cgpa?: string;
    grade?: string;
    courses?: string[];
}

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <motion.div 
        variants={itemVariants} 
        className="mb-8 p-6 rounded-xl bg-white shadow-lg border-l-4 border-indigo-400 transition-all duration-300 hover:shadow-xl hover:border-indigo-600"
    >
        <div className="flex justify-between items-start flex-wrap mb-3">
            <h3 className="text-xl font-bold text-gray-800">{education.degree}</h3>
            <p className="text-indigo-600 font-medium">{education.date}</p>
        </div>
        <p className="text-gray-700">{education.institution}</p>
        {education.cgpa && <p className="text-gray-700 mt-1">{education.cgpa}</p>}
        {education.grade && <p className="text-gray-700 mt-1">{education.grade}</p>}
        {education.courses && (
            <div className="mt-4">
                <p className="text-gray-700 font-medium mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap">
                    {education.courses.map((course) => (
                        <SkillBadge key={course} skill={course} />
                    ))}
                </div>
            </div>
        )}
    </motion.div>
);

const App = () => {
    const socialLinks = getSocialLinks(resumeData.contact);
    const { ref: aboutRef, controls: aboutControls, variants: aboutVariants } = useScrollAnimation();
    const { ref: contributionsRef, controls: contributionsControls, variants: contributionsVariants } = useScrollAnimation();
    const { ref: educationRef, controls: educationControls, variants: educationVariants } = useScrollAnimation();
    const { ref: skillsRef, controls: skillsControls, variants: skillsVariants } = useScrollAnimation();
    const { ref: experienceRef, controls: experienceControls, variants: experienceVariants } = useScrollAnimation();
    const { ref: projectsRef, controls: projectsControls, variants: projectsVariants } = useScrollAnimation();
    const { ref: certificatesRef, controls: certificatesControls, variants: certificatesVariants } = useScrollAnimation();
    const { ref: contactRef, controls: contactControls, variants: contactVariants } = useScrollAnimation();

    return (
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 text-gray-900 min-h-screen">
            {/* Hero Section with your image */}
            <header className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left max-w-xl mb-12 md:mb-0"
                >
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Software Developer
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tushar Dogra</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Passionate software developer specializing in full-stack development, LLM integration, and building innovative solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href={resumeData.resumeUrl}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="h-5 w-5" />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="bg-white text-indigo-700 border border-indigo-200 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="mt-8 flex gap-6 justify-center md:justify-start">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 flex justify-center items-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="/face2.jpeg"
                                alt="Tushar Dogra"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </header>

            <main className="container mx-auto px-6 py-16">
                {/* About Section */}
                <section id="about" className="mb-24">
                    <motion.div
                        ref={aboutRef}
                        variants={aboutVariants}
                        initial="hidden"
                        animate={aboutControls}
                    >
                        <SectionTitle title="About Me" icon={<User className="h-6 w-6" />} />
                        <motion.div variants={itemVariants} className="text-gray-700 leading-relaxed text-lg bg-white p-8 rounded-xl shadow-lg">
                            <p className="mb-4">
                                Hello! I'm <span className="font-semibold">{resumeData.name}</span>, a passionate software developer based in <span className="font-semibold">{resumeData.contact.location}</span>.
                                I have a strong foundation in various programming languages and technologies, with expertise in full-stack development and AI integration.
                            </p>
                            <p className="mb-4">
                                I am currently pursuing my Bachelor of Information Technology degree from the <span className="font-medium">National Institute of Technology Srinagar</span>, with an expected graduation in 2025.
                            </p>
                            <p className="mb-4">
                                I've had the opportunity to work on exciting projects and internships, where I've honed my skills in full-stack development, LLM integration, and optimization. I am a rapid learner, and I thrive in fast-paced environments where I can contribute to innovative solutions.
                            </p>
                            <p>
                                I am always eager to learn new things and take on new challenges. Feel free to reach out to me via the contact section below!
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contributions Section */}
                <section id="contributions" className="mb-24">
                    <motion.div
                        ref={contributionsRef}
                        variants={contributionsVariants}
                        initial="hidden"
                        animate={contributionsControls}
                    >
                        <SectionTitle title="Contributions" icon={<Github className="h-6 w-6" />} />
                        <motion.div variants={itemVariants} className="text-gray-700 leading-relaxed text-lg bg-white p-8 rounded-xl shadow-lg">
                            <p className="mb-4">
                                For a detailed overview of my contributions, please visit my <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:underline">GitHub profile</a>.
                                Here, you can find a comprehensive record of my code, projects, and collaborations.
                            </p>
                            <p className="mb-4">
                                My GitHub activity includes:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    <span className="font-semibold mr-2">Code Repositories:</span> You can view the source code of my projects.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    <span className="font-semibold mr-2">Project Contributions:</span> See my involvement in various projects.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    <span className="font-semibold mr-2">Collaborations:</span> Details on my work with other developers.
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Education Section */}
                <section id="education" className="mb-24">
                    <motion.div
                        ref={educationRef}
                        variants={educationVariants}
                        initial="hidden"
                        animate={educationControls}
                    >
                        <SectionTitle title="Education" icon={<GraduationCap className="h-6 w-6" />} />
                        {resumeData.education.map((edu, index) => (
                            <EducationCard key={index} education={edu} />
                        ))}
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-24">
                    <motion.div
                        ref={skillsRef}
                        variants={skillsVariants}
                        initial="hidden"
                        animate={skillsControls}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <SectionTitle title="Skills" icon={<Code className="h-6 w-6" />} />
                        <motion.div variants={itemVariants}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="mb-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <Code className="h-4 w-4" />
                                        </span>
                                        Programming Languages
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.languages.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <Code className="h-4 w-4" />
                                        </span>
                                        Tools & OS
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.tools.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <Code className="h-4 w-4" />
                                        </span>
                                        Libraries & Frameworks
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.libraries.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <Code className="h-4 w-4" />
                                        </span>
                                        LLM & Agentic AI Frameworks
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.llm.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <Code className="h-4 w-4" />
                                        </span>
                                        Web Skills
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.web.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-md mr-2">
                                            <User className="h-4 w-4" />
                                        </span>
                                        Soft Skills
                                    </h4>
                                    <div className="flex flex-wrap">
                                        {resumeData.skills.softSkills.map((skill) => (
                                            <SkillBadge key={skill} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="mb-24">
                    <motion.div
                        ref={experienceRef}
                        variants={experienceVariants}
                        initial="hidden"
                        animate={experienceControls}
                    >
                        <SectionTitle title="Work Experience" icon={<Briefcase className="h-6 w-6" />} />
                        {resumeData.experience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-24">
                    <motion.div
                        ref={projectsRef}
                        variants={projectsVariants}
                        initial="hidden"
                        animate={projectsControls}
                    >
                        <SectionTitle title="Projects" icon={<Code className="h-6 w-6" />} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resumeData.projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Certificates Section */}
                <section id="certificates" className="mb-24">
                    <motion.div
                        ref={certificatesRef}
                        variants={certificatesVariants}
                        initial="hidden"
                        animate={certificatesControls}
                    >
                        <SectionTitle title="Certificates" icon={<FileText className="h-6 w-6" />} />
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {resumeData.certificates.map((cert, index) => (
                                <CertificateCard key={index} certificate={cert} />
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-24">
                    <motion.div
                        ref={contactRef}
                        variants={contactVariants}
                        initial="hidden"
                        animate={contactControls}
                    >
                        <SectionTitle title="Contact Me" icon={<Mail className="h-6 w-6" />} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                                <ContactItem 
                                    icon={<Mail className="h-5 w-5" />} 
                                    label="Email" 
                                    value={resumeData.contact.email} 
                                    url={`mailto:${resumeData.contact.email}`} 
                                />
                                <ContactItem 
                                    icon={<Phone className="h-5 w-5" />} 
                                    label="Phone" 
                                    value={resumeData.contact.phone} 
                                    url={`tel:${resumeData.contact.phone}`} 
                                />
                                <ContactItem 
                                    icon={<MapPin className="h-5 w-5" />} 
                                    label="Location" 
                                    value={resumeData.contact.location} 
                                />
                                <ContactItem 
                                    icon={<Linkedin className="h-5 w-5" />} 
                                    label="LinkedIn" 
                                    value="Tushar Dogra" 
                                    url={resumeData.contact.linkedin} 
                                />
                                <ContactItem 
                                    icon={<Github className="h-5 w-5" />} 
                                    label="GitHub" 
                                    value="strikertushar19" 
                                    url={resumeData.contact.github} 
                                />
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                            placeholder="Your Name" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                            placeholder="Your Email" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea 
                                            id="message" 
                                            rows={4} 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">{resumeData.name}</h2>
                            <p className="text-gray-400">{resumeData.tagline}</p>
                        </div>
                        <div className="flex gap-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;