"use client";
import React from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { cn } from "../app/lib/utils/cn";

// Resume Data (based on the provided PDF)
const resumeData = {
    name: 'Tushar Dogra',
    tagline: 'Software Developer',
    contact: {
        phone: '+918491057538',
        email: 'tushardogra19@gmail.com',
        location: 'Udhampur, Jammu and Kashmir, India',
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
        languages: ['C/C++', 'Python', 'JavaScript', 'Java', 'SQL'],
        tools: ['AWS', 'Git', 'Jupyter Notebook', 'Google Colab', 'Linux', 'Windows'],
        libraries: ['Pandas', 'Numpy', 'Matplotlib', 'LangChain', 'FastAPI', 'Flask'],
        llm: ['Langchain', 'LangGraph', 'CrewAI', 'Swarm-Openai', 'Autogen', 'Semantic-kernel', 'Pinecone'],
        web: ['HTML/CSS/JS', 'ReactJS/NextJS', 'Django', 'Nodejs', 'Express', 'Tailwind'],
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
    resumeUrl: '/TusharDogra.pdf',
};

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

// Helper function to generate social links
const getSocialLinks = (contact: typeof resumeData.contact) => [
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

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 shadow-sm border border-gray-200">
        {skill}
    </span>
);

const SectionTitle = ({ title, icon: Icon }: { title: string; icon?: React.ReactNode }) => (
    <div className="flex items-center mb-6">
        {Icon && <span className="mr-3 text-gray-700">{Icon}</span>}
        <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-gray-200 pb-2">
            {title}
        </h2>
    </div>
);

const ExperienceCard = ({ experience }: { experience: typeof resumeData.experience[0] }) => (
    <motion.div variants={itemVariants} className="mb-8 p-6 rounded-xl bg-white shadow-lg border border-gray-100 transition-shadow hover:shadow-xl">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
            <p className="text-gray-600 text-sm">{experience.date}</p>
        </div>
        <p className="text-gray-700 text-sm mb-3">{experience.company} - {experience.location}</p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
            {experience.description.map((item, index) => (
                <li key={index} className="text-gray-700">
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const ProjectCard = ({ project }: { project: typeof resumeData.projects[0] }) => (
    <motion.div variants={itemVariants} className="mb-8 p-6 rounded-xl bg-white shadow-lg border border-gray-100 transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
        {project.githubUrl && (
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
            >
                GitHub
            </a>
        )}
        {project.liveUrl && (
            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 ml-4 inline-block"
            >
                Live Demo
            </a>
        )}
         {project.pypiLink && (
            <a
                href={project.pypiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 ml-4 inline-block"
            >
                PyPI
            </a>
        )}
    </motion.div>
);

const CertificateCard = ({ certificate }: { certificate: typeof resumeData.certificates[0] }) => (
    <motion.div variants={itemVariants} className="mb-4 p-4 rounded-lg bg-white shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{certificate.title}</h3>
        <p className="text-gray-600 text-sm">{certificate.institution}</p>
         {certificate.url && (
            <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
            >
                View Certificate
            </a>
        )}
    </motion.div>
);

const EducationCard = ({ education }: { education: typeof resumeData.education[0] }) => (
    <motion.div variants={itemVariants} className="mb-8 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{education.degree}</h3>
            <p className="text-gray-600 text-sm">{education.date}</p>
        </div>
        <p className="text-gray-700 text-sm">{education.institution}</p>
        {education.cgpa && <p className="text-gray-700 text-sm">{education.cgpa}</p>}
        {education.courses && (
            <>
                <p className="text-gray-700 text-sm mt-3 font-medium">Relevant Coursework:</p>
                <div className="flex flex-wrap mt-2">
                    {education.courses.map((course) => (
                        <SkillBadge key={course} skill={course} />
                    ))}
                </div>
            </>
        )}
        {education.grade && <p className="text-gray-700 text-sm">{education.grade}</p>}
    </motion.div>
);

const App: React.FC = () => {
    const socialLinks = getSocialLinks(resumeData.contact);

    // Added this section for contributions
    const contributionsSection = (
        <section className="mb-16">
            <SectionTitle title="Contributions" icon={<Github className="h-7 w-7" />} />
            <motion.div variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
                <p>
                    For a detailed overview of my contributions, please visit my  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">GitHub profile</a>.
                    Here, you can find a comprehensive record of my code, projects, and collaborations.
                </p>
                <br />
                <p>
                    My GitHub activity includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>  <span className="font-semibold">Code Repositories:</span>  You can view the source code of my projects.</li>
                    <li>  <span className="font-semibold">Project Contributions:</span> See my involvement in various projects.</li>
                    <li> <span className="font-semibold">Collaborations:</span>  Details on my work with other developers.</li>
                </ul>
            </motion.div>
        </section>
    );


    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            <header className="py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center gap-6"
                >
                    <User className="h-20 w-20 text-gray-900" />
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">{resumeData.name}</h1>
                        <p className="text-gray-700 text-2xl mt-2">{resumeData.tagline}</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 flex justify-center gap-8"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex justify-center"
                >
                 <a
  href="https://drive.google.com/file/d/10D1NdCmuH2Vh6EpP7B8BkkP2gWXrp21k/view?usp=sharing"
  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center gap-3 font-medium"
  target="_blank"
  rel="noopener noreferrer"
>
  <Download className="h-6 w-6" />
  View Resume
</a>

                </motion.div>
            </header>

            <main className="container mx-auto px-6 py-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <section className="mb-16">
                        <SectionTitle title="About Me" icon={<User className="h-7 w-7" />} />
                        <motion.div variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
                            <p>
                                Hello! I&apos;m <span className="font-semibold">{resumeData.name}</span>, a passionate software developer based in <span className="font-semibold">{resumeData.contact.location}</span>.
                                I have a strong foundation in various programming languages and technologies, as you can see in my <span className="font-medium">skills</span> section.
                            </p>
                            <br />
                            <p>
                                I am currently pursuing my Bachelor of Information Technology degree from the <span className="font-medium">National Institute of Technology Srinagar</span>, with an expected graduation in 2025.
                            </p>
                            <br />
                            <p>
                                I&apos;ve had the opportunity to work on exciting projects and internships, where I&apos;ve honed my skills in full-stack development, LLM integration, and optimization. I am a rapid learner, and I thrive in fast-paced environments where I can contribute to innovative solutions.
                            </p>
                            <br />
                            <p>
                                I am always eager to learn new things and take on new challenges. Feel free to reach out to me via the links above!
                            </p>
                        </motion.div>
                    </section>

                    {contributionsSection}

                    <section className="mb-16">
                        <SectionTitle title="Education" icon={<GraduationCap className="h-7 w-7" />} />
                        {resumeData.education.map((edu, index) => (
                            <EducationCard key={index} education={edu} />
                        ))}
                    </section>

                    <section className="mb-16">
                        <SectionTitle title="Skills" icon={<Code className="h-7 w-7" />} />
                        <motion.div variants={itemVariants}>
                            <div className="mb-8">
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Programming Languages</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.languages.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tools & OS</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.tools.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                             <div className="mb-8">
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Libraries & Frameworks</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.libraries.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">LLM & Agentic AI Frameworks</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.llm.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Web Skills</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.web.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-gray-800 mb-3">Soft Skills</h4>
                                <div className="flex flex-wrap">
                                    {resumeData.skills.softSkills.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    <section className="mb-16">
                        <SectionTitle title="Work Experience" icon={<Briefcase className="h-7 w-7" />} />
                        {resumeData.experience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </section>

                    <section className="mb-16">
                        <SectionTitle title="Projects" icon={<Code className="h-7 w-7" />} />
                        {resumeData.projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </section>

                    <section className="mb-16">
                        <SectionTitle title="Certificates" icon={<FileText className="h-7 w-7" />} />
                        {resumeData.certificates.map((cert, index) => (
                            <CertificateCard key={index} certificate={cert} />
                        ))}
                    </section>
                </motion.div>
            </main>

            <footer className="py-8 text-center text-gray-600 border-t border-gray-200 mt-12">
                <p>&copy; {new Date().getFullYear()} Tushar Dogra. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;

