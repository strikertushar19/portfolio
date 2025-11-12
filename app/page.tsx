"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import {
    Github,
    Linkedin,
    Mail,
    Search,
    ChevronLeft,
    ChevronRight,
    Instagram,
    Menu,
    X,
    Award,
    ExternalLink,
    Bot,
    Zap,
    Brain,
    Code,
} from 'lucide-react';

// Resume Data
const resumeData = {
    name: 'Tushar Dogra',
    tagline: 'AI Agents and Software Applications Developer: Building Affordable AI Solutions for Everyone',
    contact: {
        phone: '+918491057538',
        email: 'tushardogra19@gmail.com',
        location: 'Udhampur, Jammu and Kashmir, India',
        linkedin: 'https://www.linkedin.com/in/tushar-dogra-55b687240/',
        github: 'https://github.com/strikertushar19',
        portfolio: 'https://tushardogra.com/',
        twitter: 'https://x.com/0Tushar',
        instagram: '#',
    },
    about: {
        main: "Building the Future of AI, One Agent at a Time",
        description: "I'm a BTech Information Technology graduate from NIT Srinagar with a CGPA of 7.26/10, passionate about creating intelligent AI solutions. With hands-on experience at IIT Mandi and multinational AI startups (Inspeq AI and OneScope AI), I've developed expertise in building production-ready AI agents and software applications . My mission is to democratize AI technology by making advanced AI agents accessible and affordable for everyone."
    },
    philosophy: {
        title: "Be Consistent, Inquisitive, Adapt, and Repeat. difficulty",
        description: "With an entrepreneurial mindset and extensive experience in building AI agents, I'm on a mission to democratize artificial intelligence. My vision is to create affordable AI agents that empower individuals and businesses, starting at just $1 per month. I believe that cutting-edge AI technology shouldn't be a luxury reserved for large corporations—it should be accessible to everyone, from startups to individual creators. Through innovative engineering and cost-effective solutions, I'm bridging the gap between advanced AI capabilities and everyday affordability.",
        quote: {
            text: "If you don't produce, you won't thrive. No matter how talented or skilled you are.",
            author: "CARL NEWPORT",
            source: "Deep Work"
        }
    },
    skills: {
        programming: ['C/C++', 'Python', 'Go'],
        tools: ['AWS', 'Git', 'Jupyter Notebook', 'Google Colab', 'Linux', 'Windows'],
        frameworks: ['GIN', 'LangChain', 'FastAPI', 'Flask'],
        llm: ['Langchain', 'LangGraph', 'CrewAI', 'Swarm-Openai', 'Autogen', 'Semantic-kernel', 'Pinecone'],
        web: ['HTML/CSS/JS', 'ReactJS/NextJS', 'Tailwind'],
        soft: ['Communication', 'Teamwork', 'Problem-Solving', 'Rapid Learner'],
        aiTools: ['Cursor AI', 'Github Copilot', 'Lovable', 'Emergent Labs']
    },
    services: [
        {
            title: 'AI Agent Development',
            description: "I specialize in building intelligent AI agents using cutting-edge frameworks like LangChain, LangGraph, and CrewAI. With extensive experience in production environments, I create autonomous agents that can reason, make decisions, and solve complex problems efficiently.",
            icon: Bot
        },
        {
            title: 'Full-Stack Development',
            description: "I build scalable web applications using modern technologies like Next.js, React, Go (Gin), and FastAPI. From backend APIs to responsive frontends, I deliver end-to-end solutions that perform at scale.",
            icon: Zap
        },
        {
            title: 'LLM Integration & Optimization',
            description: "I integrate and optimize Large Language Models (GPT-4, GPT-3.5) with vector databases like Pinecone, creating intelligent systems that understand context and provide meaningful insights.",
            icon: Brain
        }
    ],
    projects: [
        {
            title: 'Mistri',
            description: 'An intelligent Tech Stack analysis platform that empowers developers to understand and optimize their codebases and cloud costs with AI insights.',
            liveUrl: 'https://www.mistri.tech/',
            image: '/mistri-dashboard.png',
            tags: ['Go', 'Next.js', 'AI', 'Cloud Optimization', 'Code Analysis', 'AWS', 'GCP', 'Azure']
        },
        {
            title: 'Yoga SaaS Template',
            description: 'A modern, elegant yoga studio SaaS template featuring a serene and professional design.',
            liveUrl: 'https://yoga-saas-template.vercel.app/',
            image: '/yoga-saas-tempalte.png',
            tags: ['Next.js', 'SaaS', 'UI/UX', 'Responsive Design', 'Template']
        },
    ],
    testimonials: [
        {
            text: "Tushar took my vision for a modern portfolio website and turned it into reality! Our initial chat was a breath of fresh air – his friendly personality put me at ease, and he listened intently to all my ideas. He then helped me to designed a sleek, modern website that perfectly reflects my brand. Throughout the process, any tweaks I requested were completed quickly and seamlessly. Overall, I'm thrilled with the final product!",
            author: "Keum Hyun-Ah",
            role: "Freelancer",
            avatar: "/face2.jpeg"
        }
    ],
    experience: [
        {
            title: 'Machine Learning Intern',
            company: 'IIT Mandi (Top Indian Engineering Institute)',
            date: 'Feb 2025 - May 2025',
            location: 'IIT Mandi, India (On-site)',
            description: [
                'Worked on Dataset Partitioning and Annotation for Facial Micro-Emotion Recognition project titled "Indian Knowledge System and Mental Health Applications".',
                'Trained a model on a micro-emotion dataset and achieved 80% accuracy in predicting micro-emotions from videos and images.',
                'Implemented the Artificial Bee Colony algorithm to improve model efficiency.',
            ],
        },
        {
            title: 'Software Developer Intern',
            company: 'Inspeq AI (Startup)',
            date: 'Dec 2023 - June 2024',
            location: 'Dublin, Ireland (Remote)',
            description: [
                'Optimized microservices with Docker and Redis, boosting performance by 15%.',
                'Redesigned backend and frontend with FastAPI and React, improving efficiency by 20%.',
                'Developed Inspeq SDK/API, and deployed on-premise solution on cloud with AWS and Azure.',
                'Integrated LLM\'s like GPT-4 models to make evaluation metrics for safe reliable software development.',
                'Worked in a fast-paced environment with the ability to learn quickly.',
            ],
        },
        {
            title: 'Fullstack Developer Intern',
            company: 'OneScope AI (Startup)',
            date: 'Sep 2023 - Oct 2023',
            location: 'Dublin, Ireland (Remote)',
            description: [
                'Built an AI agent application using Flask, Langchain, and React that can interact with users.',
                'Developed functionality to process Excel files for carbon emission data and provide suggestions for emission reduction.',
                'Utilized OpenAI GPT-3.5 LLM and Pinecone vector database for intelligent analysis.',
            ],
        },
    ],
    education: [
        {
            degree: 'Bachelor of Information Technology',
            institution: 'National Institute of Technology (NIT) Srinagar',
            date: '2021-2025',
            cgpa: '7.26 CGPA out of 10',
            courses: ['DSA', 'DBMS', 'Operating System', 'Artificial Intelligence', 'Computer Networks'],
        },
        {
            degree: 'Senior Secondary',
            institution: 'JNV UDHAMPUR / CBSE Board',
            date: '2021',
            grade: '86.2%',
        },
        {
            degree: 'Secondary',
            institution: 'JNV UDHAMPUR / CBSE Board',
            date: '2019',
            grade: '93%',
        },
    ],
    certificates: [
        {
            title: 'Legacy Responsive Web Design V8',
            institution: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/certification/chiefmasterinprogramming_2023/responsive-web-design',
            image: '/responsive-web-design-freecodecamp.png',
            description: 'As part of this certification, TUSHAR DOGRA built the following projects and got all automated test suites to pass:',
            projects: [
                'Build a Survey Form',
                'Build a Tribute Page',
                'Build a Technical Documentation Page',
                'Build a Product Landing Page',
                'Build a Personal Portfolio Webpage'
            ],
            hours: '300 hours of work',
            date: 'April 9, 2023',
            skills: ['JavaScript', 'HTML', 'CSS', 'Design Thinking'],
        },
        {
            title: 'AWS Educate Machine Learning Foundations - Training Badge',
            institution: 'Amazon Web Services Training and Certification',
            url: 'https://www.credly.com/badges/e9587f8b-63a5-4ed2-bef1-aa1f7a352989/public_url',
            image: '/aws-educate-machine-learning-foundations-training-b.png',
            description: 'Earners of this badge have completed the Machine Learning Foundations training and achieved the required scores on the post-course assessment. They have demonstrated the ability to discuss the fundamental concepts of machine learning and how to apply the machine learning pipeline to solve a business problem.',
            type: 'Learning',
            skills: ['Amazon Web Services (AWS)', 'AWS Cloud', 'ML'],
            earningCriteria: 'Successfully pass the AWS Educate Machine Learning Foundations assessment.',
        },
        {
            title: 'Hack Together: AI Agents Hackathon',
            institution: 'Microsoft Americas Azure Team',
            url: 'https://www.credly.com/badges/65e62da0-deb5-4989-b2fe-8e4409b6b5c5/public_url',
            image: '/hack-together-ai-agents-hackathon (2).png',
            description: 'Badge holder successfully participated in the AI Agents Hackathon, submitting a project that utilized AI services to create an interactive user experience.',
            experience: 'Intermediate',
            duration: 'Weeks',
            cost: 'Free',
            skills: ['AI Agents', 'Azure Open AI', 'Generative AI', 'Large Language Models'],
            earningCriteria: 'The methods of instruction include live video streams. The method of assessment was a submitted code project.',
        },
        {
            title: 'Build Fest \'25 Hackathon Finalist',
            institution: 'FlutterFlow and Google Cloud (powered by Hack2skill)',
            url: 'https://certificate.hack2skill.com/user/buildfestfinalist/2025H2S04BF-F00070',
            image: '/buildfest-25-hackathon-finalist.png',
            description: 'in recognition of their achievement as a Finalist in FlutterFlow and Google Cloud presents Build Fest \'25 Hackathon powered by Hack2skill. They demonstrated noteworthy technical prowess and commitment.',
            achievement: 'Top 40 out of 3000+ developers',
            certificateId: '2025H2S04BF-F00070',
            date: 'Thu Jul 03 2025',
            skills: ['GenAI', 'Google GCP', 'FlutterFlow'],
        },
        {
            title: 'Letter of Recommendation',

            institution: ' Manish Atri ,CTO at Disseqt AI ,Former Head of Engineering at Inspeq AI',
            url: 'https://drive.google.com/file/d/1253szkhBwV1mI6Y81MY4Mo2o7OX0EY9O/view?usp=sharing',
        },
    ],
};

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-wider">
                    {resumeData.name.split(' ')[0].toUpperCase().slice(0, 6)} {" "} {resumeData.name.split(' ')[1].toUpperCase().slice(0, 6)}
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white/60 transition-colors">Home</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white/60 transition-colors">About</a>
                    <a href="#works" onClick={(e) => scrollToSection(e, 'works')} className="hover:text-white/60 transition-colors">Works</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white/60 transition-colors">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <Search className="h-5 w-5 cursor-pointer hover:text-white/60 transition-colors hidden md:block" />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            
            {mobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="container mx-auto px-6 py-4 flex flex-col gap-4 text-sm uppercase tracking-wider">
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white/60 transition-colors">Home</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white/60 transition-colors">About</a>
                        <a href="#works" onClick={(e) => scrollToSection(e, 'works')} className="hover:text-white/60 transition-colors">Works</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white/60 transition-colors">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 relative">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 opacity-50 grayscale"
                style={{
                    backgroundImage: 'url(/face2.jpeg)',
                    backgroundSize: '75%',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10"
            >
                <h1 className="text-8xl md:text-9xl font-bold mb-8 tracking-tight">
                    {resumeData.name.toUpperCase().split(' ')[0]} {" "} {resumeData.name.toUpperCase().split(' ')[1]}
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                    {resumeData.tagline}
                </p>
            </motion.div>
        </section>
    );
};

const AboutSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
        <section id="about" className="min-h-screen px-6 py-24">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Photo Section */}
    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[3/4] max-w-md">
                            <Image
                                src="/face2.jpeg"
                                alt={resumeData.name}
                                fill
                                className="object-cover grayscale"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
    </motion.div>
                    
                    {/* Text Section */}
    <motion.div 
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-4">ABOUT ME</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {resumeData.about.main}
                        </h2>
                        <p className="text-white/70 leading-relaxed text-lg">
                            {resumeData.about.description}
                        </p>
    </motion.div>
                </div>
            </div>
        </section>
    );
};

const WhoAmISection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
        <section className="min-h-screen px-6 py-24">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
            ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-sm uppercase tracking-wider text-white/50">WHO AM I</p>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                            {resumeData.philosophy.title}
        </h2>
                        
                        <div className="pt-6 space-y-4">
                            <p className="italic text-white/70 text-lg">
                                "{resumeData.philosophy.quote.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                                    <span className="text-xs font-bold">DW</span>
    </div>
        <div>
                                    <p className="font-semibold">{resumeData.philosophy.quote.author}</p>
                                    <p className="text-sm text-white/50">{resumeData.philosophy.quote.source}</p>
            </div>
                            </div>
        </div>
    </motion.div>
                    
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-white/70 leading-relaxed text-lg">
                            {resumeData.philosophy.description}
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Programming and Query Languages <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.programming.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
            </div>
    </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Tools & OS <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.tools.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Libraries/Frameworks <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.frameworks.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">LLM & Agentic AI Frameworks <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.llm.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Web Skills <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.web.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Soft Skills <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.soft.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-2">AI Coding Tools <span className="text-white/50 font-normal">Skills</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.aiTools.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
        </motion.div>
                </div>
            </div>
        </section>
    );
};

const WhatICanOfferSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    const nextService = () => {
        setCurrentIndex((prev) => (prev + 1) % resumeData.services.length);
    };
    
    const prevService = () => {
        setCurrentIndex((prev) => (prev - 1 + resumeData.services.length) % resumeData.services.length);
    };
    
    return (
        <section className="min-h-screen px-6 py-24 bg-black">
            <div className="container mx-auto">
        <motion.div 
            ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-white/50 mb-4">WHAT I CAN OFFER</p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Fresh eyes, designing for the future.
                            </h2>
            </div>
                        <div>
                            <p className="text-white/70 leading-relaxed text-lg">
                                With an entrepreneurial mindset and extensive experience in building AI agents, I specialize in creating intelligent, cost-effective solutions. My mission is to democratize AI technology, making advanced capabilities accessible to everyone starting at just $1 per month.
                            </p>
            </div>
                    </div>
                    
                    <div className="relative">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prevService}
                                className="text-white/50 hover:text-white transition-colors p-2"
                                aria-label="Previous service"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            
                            <div className="flex-1 grid md:grid-cols-2 gap-6">
                                {resumeData.services.slice(currentIndex, currentIndex + 2).map((service, index) => (
    <motion.div 
                                        key={currentIndex + index}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className=" backdrop-blur-md rounded-lg p-8 border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all"
                                    >
                                        <div className="mb-4">
                                            {React.createElement(service.icon, { className: "h-12 w-12 text-white" })}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                        <p className="text-white/80 leading-relaxed">{service.description}</p>
    </motion.div>
                                ))}
                            </div>
                            
                            <button
                                onClick={nextService}
                                className="text-white/50 hover:text-white transition-colors p-2"
                                aria-label="Next service"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
        </div>
                        
                        <div className="flex justify-center gap-2 mt-8">
                            {resumeData.services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        Math.floor(currentIndex / 2) === Math.floor(index / 2)
                                            ? 'bg-white w-3'
                                            : 'bg-white/20'
                                    }`}
                                    aria-label={`Go to service ${index + 1}`}
                                />
                    ))}
                </div>
            </div>
        </motion.div>
            </div>
        </section>
    );
};

const MyWorkSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    const projectColors = [
        { heading: 'text-cyan-400', accent: 'border-cyan-400/50' },
        { heading: 'text-emerald-400', accent: 'border-emerald-400/50' },
        { heading: 'text-amber-400', accent: 'border-amber-400/50' },
    ];
    
    return (
        <section id="works" className="min-h-screen px-6 py-24">
            <div className="container mx-auto">
        <motion.div 
            ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div>
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-4">MY WORK</p>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            The projects I've been working on.
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.projects.map((project, index) => {
                            const colors = projectColors[index % projectColors.length];
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <div className="mb-3">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <div className="bg-black/20 rounded-lg overflow-hidden mb-3 relative w-full aspect-video">
                                            <Image
                                                src={project.image || '/face2.jpeg'}
                                                alt={project.title}
                                                fill
                                                className="object-contain"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h4 className="text-lg font-semibold mb-2 text-white">
                                                Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(project as any).tags && (project as any).tags.map((tag: string, idx: number) => (
                                                    <span
                                                        key={idx}
                                                        className={`px-2 py-1 rounded-full text-xs border ${colors.accent} text-white/80`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4 pt-3">
                                        {(project as any).liveUrl && (
                                            <a
                                                href={(project as any).liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`px-3 py-1.5 rounded border text-sm ${colors.accent} text-white/80 hover:text-white transition-colors`}
                                            >
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % resumeData.testimonials.length);
    };
    
    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + resumeData.testimonials.length) % resumeData.testimonials.length);
    };
    
    const testimonial = resumeData.testimonials[currentTestimonial];

    return (
        <section className="min-h-screen px-6 py-24 flex items-center">
            <div className="container mx-auto">
    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex justify-center gap-2 mb-8">
                        {resumeData.testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    currentTestimonial === index ? 'bg-white w-3' : 'bg-white/20'
                                }`}
                            />
                        ))}
                    </div>
                    
                    <p className="text-sm uppercase tracking-wider text-white/50 text-center mb-4">TESTIMONIALS</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        Colleague / Client Feedback
                    </h2>
                    
                    <div className="relative">
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full text-white hover:text-white/60 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        
                        <div className="space-y-8">
                            <p className="text-lg md:text-xl italic text-white/70 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">{testimonial.author}</p>
                                    <p className="text-sm text-white/50">{testimonial.role}</p>
        </div>
                </div>
            </div>
                        
                                    <button 
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-white hover:text-white/60 transition-colors"
                            aria-label="Next testimonial"
                                    >
                            <ChevronRight className="h-8 w-8" />
                                    </button>
                        
                        <div className="absolute bottom-0 right-0 text-9xl font-bold text-white/5">
                            99
                        </div>
                        </div>
    </motion.div>
            </div>
                </section>
    );
};

const EducationSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="education" className="min-h-screen px-6 py-24 bg-black">
            <div className="container mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-4">EDUCATION</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Academic Background
                        </h2>
                    </div>
                    
                    <div className="space-y-6">
                        {resumeData.education.map((edu, index) => (
                    <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className=" backdrop-blur-md rounded-lg p-6  hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                                        <p className="text-lg text-white/80">{edu.institution}</p>
                    </div>
                                    <p className="text-white/60 font-medium mt-2 md:mt-0">{edu.date}</p>
                                </div>
                                {(edu.cgpa || edu.grade) && (
                                    <p className="text-white/60 mb-3">
                                        {edu.cgpa || edu.grade}
                                    </p>
                                )}
                                {edu.courses && (
                                    <div className="mt-4">
                                        <p className="text-sm text-white/60 mb-2">Relevant Coursework:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.courses.map((course, courseIndex) => (
                                                <span
                                                    key={courseIndex}
                                                    className="px-3 py-1  rounded-full text-sm text-white/80"
                                                >
                                                    {course}
                                                </span>
                        ))}
                    </div>
                                    </div>
                                )}
                </motion.div>
                                        ))}
                    </div>
                </motion.div>
                                </div>
                </section>
    );
};

const WorkExperienceSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
        <section id="experience" className="min-h-screen px-6 py-24">
            <div className="container mx-auto">
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-4">WORK EXPERIENCE</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Professional Journey
                        </h2>
                                    </div>

                    <div className="space-y-8">
                        {resumeData.experience.map((exp, index) => (
                    <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className=" backdrop-blur-md rounded-lg p-8   hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                                        <p className="text-xl text-white/80 mb-1">{exp.company}</p>
                                        <p className="text-sm text-white/60">{exp.location}</p>
                                    </div>
                                    <p className="text-white/60 font-medium mt-2 md:mt-0">{exp.date}</p>
                                </div>
                                <ul className="space-y-3 mt-6">
                                    {exp.description.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-white/80">
                                            <span className="leading-relaxed">{item}</span>
                                </li>
                                    ))}
                            </ul>
                        </motion.div>
                        ))}
                            </div>
                    </motion.div>
            </div>
                </section>
    );
};

const CertificatesSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
        <section id="certificates" className="min-h-screen px-6 py-24 bg-black">
            <div className="container mx-auto">
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                                    <div>
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-4">CERTIFICATES & ACHIEVEMENTS</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Recognition and Achievements
                        </h2>
                        </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.certificates.filter((cert) => cert.title !== 'Letter of Recommendation').map((cert, index) => {
                            // Check if this certificate has an image
                            if ((cert as any).image) {
                                return (
                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className=" backdrop-blur-md rounded-lg p-6   hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all"
                                    >
                                        <div className="flex flex-col items-center mb-6">
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cursor-pointer mb-4 relative block w-full max-w-[300px] aspect-[4/3]"
                                            >
                                                <Image
                                                    src={(cert as any).image}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-contain hover:opacity-80 transition-opacity"
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, 300px"
                                                />
                                            </a>
                                    </div>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                                                <p className="text-white/60 mb-4">{cert.institution}</p>
                                                {(cert as any).description && (
                                                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                                                        {(cert as any).description}
                                                    </p>
                                                )}
                                </div>
                                            
                                            <div className="grid grid-cols-2 gap-3 text-sm">
                                                {(cert as any).type && (
                                                    <div>
                                                        <span className="text-white/60">Type:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).type}</span>
                                    </div>
                                                )}
                                                {(cert as any).experience && (
                                                    <div>
                                                        <span className="text-white/60">Experience:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).experience}</span>
                                </div>
                                                )}
                                                {(cert as any).duration && (
                                                    <div>
                                                        <span className="text-white/60">Duration:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).duration}</span>
                                    </div>
                                                )}
                                                {(cert as any).cost && (
                                                    <div>
                                                        <span className="text-white/60">Cost:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).cost}</span>
                                </div>
                                                )}
                                            </div>
                                            
                                            {(cert as any).skills && Array.isArray((cert as any).skills) && (cert as any).skills.length > 0 && (
                                                <div>
                                                    <p className="text-white/60 text-sm mb-2">Skills:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {(cert as any).skills.map((skill: string, skillIndex: number) => (
                                                            <span
                                                                key={skillIndex}
                                                                className="px-2 py-1  rounded text-xs text-white/80"
                                                            >
                                                                {skill}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                                            )}
                                            
                                            {(cert as any).projects && Array.isArray((cert as any).projects) && (cert as any).projects.length > 0 && (
                                                <div>
                                                    <p className="text-white/60 text-sm mb-2">Projects:</p>
                                                    <ul className="space-y-1">
                                                        {(cert as any).projects.map((project: string, projectIndex: number) => (
                                                            <li key={projectIndex} className="text-white/80 text-sm flex items-start gap-2">
                                                                <span className="text-white mt-1">•</span>
                                                                <span>{project}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                    </div>
                                            )}
                                            
                                            {(cert as any).achievement && (
                                                <div>
                                                    <p className="text-white/60 text-sm mb-2">Achievement:</p>
                                                    <p className="text-white/80 text-sm font-semibold">
                                                        {(cert as any).achievement}
                                                    </p>
                                </div>
                                            )}
                                            
                                            <div className="grid grid-cols-2 gap-3 text-sm">
                                                {(cert as any).hours && (
                                <div>
                                                        <span className="text-white/60">Hours:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).hours}</span>
                                    </div>
                                                )}
                                                {(cert as any).date && (
                                                    <div>
                                                        <span className="text-white/60">Date:</span>
                                                        <span className="text-white/80 ml-2">{(cert as any).date}</span>
                                </div>
                                                )}
                                                {(cert as any).certificateId && (
                                                    <div>
                                                        <span className="text-white/60">Certificate ID:</span>
                                                        <span className="text-white/80 ml-2 text-xs">{(cert as any).certificateId}</span>
                            </div>
                                                )}
                                            </div>
                                            
                                            {(cert as any).earningCriteria && (
                                                <div>
                                                    <p className="text-white/60 text-sm mb-2">Earning Criteria:</p>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        {(cert as any).earningCriteria}
                                                    </p>
                                                </div>
                                            )}
                                            
                                            {cert.url && (
                                                <a
                                                    href={cert.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors border border-white/50 px-4 py-2 rounded hover:border-white/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                                >
                                                    View Link
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                        </div>
                    </motion.div>
                                );
                            }

                            // Regular certificate card
                            return (
                    <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className=" backdrop-blur-md rounded-lg p-6 border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                            <Award className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                                            <p className="text-white/60 mb-4">{cert.institution}</p>
                                            {cert.url && (
                                                <a
                                                    href={cert.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                                                >
                                                    View Certificate
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                        </motion.div>
                            );
                        })}
                        </div>

                        {/* Letter of Recommendation - Separate smaller card */}
                        {resumeData.certificates.filter((cert) => cert.title === 'Letter of Recommendation').map((cert, index) => (
                    <motion.div
                                key={`letter-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-6"
                            >
                                <div className=" backdrop-blur-md rounded-lg p-6 border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all group max-w-md mx-auto">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                            <Award className="h-6 w-6 text-amber-400" />
                                    </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                                            <p className="text-white/60 mb-4">{cert.institution}</p>
                                            {cert.url && (
                                                <a
                                                    href={cert.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                                                >
                                                    View Certificate
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                    </div>
                                    </div>
                        </div>
                    </motion.div>
                        ))}
                    </motion.div>
            </div>
                </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="px-6 py-16 border-t border-white/10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center space-y-8">
                    <h2 className="text-5xl font-bold tracking-wider">
                        {resumeData.name.toUpperCase()}
                    </h2>
                    
                    <div className="flex items-center gap-8 text-sm uppercase tracking-wider">
                        <a href="#home" className="hover:text-white/60 transition-colors">Home</a>
                        <div className="flex gap-4">
                            <a
                                href={resumeData.contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={resumeData.contact.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.f6s.com/member/tushar-dogra?follow=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
                                aria-label="Follow on F6S"
                                title="Follow Tushar Dogra on F6S"
                                >
                                <span className="text-xs font-bold">F6S</span>
                                </a>
                        </div>
                        <a href="#works" className="hover:text-white/60 transition-colors">Works</a>
                        <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
                    </div>
                    
                    <div className="w-full border-t border-white/10 pt-8 text-center">
                        <p className="text-sm text-white/50">
                            Copyright © 2025 All Rights Reserved. Powered By Nerdzilla Tech
                        </p>
                    </div>
                    </div>
                </div>
            </footer>
    );
};

const App = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <WhoAmISection />
            <EducationSection />
            <WhatICanOfferSection />
            <MyWorkSection />
            <WorkExperienceSection />
            {/* <TestimonialsSection /> */}
            <CertificatesSection />
            <Footer />
        </div>
    );
};

export default App;
