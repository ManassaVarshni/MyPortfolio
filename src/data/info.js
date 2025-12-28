import self from "../assets/Manassa.jpg"
import mock1 from "../assets/mock1.webp"
import mock2 from "../assets/mock2.webp"
import mock3 from "../assets/mock3.webp"
import mock4 from "../assets/mock4.webp"
import mock5 from "../assets/mock5.webp"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(166,104,255)", "rgb(0,255,164)"]; 
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Manassa",
    lastName: " Varshni S",
    initials: "mv", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Developer at IBM",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Bengaluru, India'
        },
        {
            emoji: "☁️",
            text: "Software Developer at IBM Cloud"
        },
        {
            emoji: "📧",
            text: "manassa1899@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://medium.com/@imanassa",
            icon: 'fa fa-medium',
            label: 'medium'
        },
        {
            link: "https://github.com/ManassaVarshni",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/manassavarshnis/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hi! I am Manassa. I hold a Master’s in Data Science from CIT, Coimbatore, and I have delved deep into the world of data and analytical skills. I started my professional journey at TCS as a Systems Engineer, adapting to the ever-evolving tech landscape. I am currently contributing as a Software Developer at IBM Cloud, focusing on constructing VPC Snapshots for Block Storage offerings. My technical toolkit includes proficiency in Go and Python, with expertise in Docker and Kubernetes. I am passionate about innovation, thrive in challenging environments, and am dedicated to continuous learning.",
    
    experience: [
        {
            title: "Software Developer",
            company: "IBM",
            period: "Dec 2024 - Present",
            location: "Bengaluru, Karnataka, India",
            details: [
                "Constructing VPC Snapshots for Block Storage offerings.",
                "Utilizing Go and Python for backend development.",
                "Working with Docker and Kubernetes containers in a cloud environment."
            ]
        },
        {
            title: "Cloud Storage Software Developer",
            company: "Tata Consultancy Services (Contracted to IBM)",
            period: "Feb 2023 - Dec 2024",
            location: "Bengaluru, Karnataka, India",
            details: [
                "Software developer for the VPC Storage Snapshots Team in IBM Cloud.",
                "Developed highly available and scalable microservice systems using Golang, Docker, and Kubernetes.",
                "Collaborated in multifaceted and cross-functional teams to deliver key features prior to general availability.",
                "Implemented unit tests and integration tests to ensure software reliability and performance.",
                "Built and maintained documentation for 24/7 support operations of critical production systems."
            ]
        },
        {
            title: "Cloud Storage Automation Engineer",
            company: "Tata Consultancy Services (Contracted to IBM)",
            period: "Nov 2022 - Jan 2023",
            location: "Bengaluru, Karnataka, India",
            details: [
                "Developed and implemented various test cases in Python for different projects to ensure backward compatibility.",
                "Updated library code to comply with the needs of new projects.",
                "Identified, reported, and tracked bugs and defects, providing feedback for improvement."
            ]
        },
        {
            title: "System Engineer",
            company: "Tata Consultancy Services",
            period: "July 2022 - Oct 2022",
            location: "Bengaluru, Karnataka, India",
            details: [
                "Adapted to the corporate environment and trained in core engineering practices.",
                "Collaborated with teams to understand system requirements."
            ]
        },
        {
            title: "Data Analyst Intern",
            company: "Buckman",
            period: "Dec 2021 - June 2022",
            location: "Chennai, Tamil Nadu, India",
            details: [
                "Developed and trained models for Corrosion Modeling using Machine Learning in R.",
                "Integrated models in a Web Application using R Shiny and hosted in Azure Cloud.",
                "Performed Regression Testing for Connected Planning before production deployment."
            ]
        },
        {
            title: "Data Science Intern",
            company: "Aravind Eye Care System",
            period: "June 2020 - Nov 2020",
            location: "Madurai, Tamil Nadu, India",
            details: [
                "Designed and developed chatbots for various Ophthalmic departments using Dialogflow and Rasa."
            ]
        }
    ],

    education: [
        {
            degree: "Master of Science, Data Science",
            institution: "Coimbatore Institute of Technology",
            period: "2017 - 2022",
            location: "Coimbatore, India"
        },
        {
            degree: "High School",
            institution: "Mahatma Montessori CBSE School",
            period: "Apr 2016 - Mar 2017",
            location: "India"
        }
    ],

    skills:
        {
            proficientWith: ['Go (Golang)', 'Python', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'SQL', 'Git', 'IBM Cloud', 'R', 'Jira', 'R Shiny'],
            exposedTo: ['Ansible', 'Terraform', 'React', 'JavaScript', 'Azure']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'baking',
            emoji: '🍰'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'gardening',
            emoji: '🪴'
        },
        {
            label: 'travelling',
            emoji: '🚗'
        }
    ],
    certifications: [
        {
            label: 'IBM Certified Advocate - Cloud v2',
            emoji: '☁️'
        },
        {
            label: 'Cloud Computing / CompTIA Cloud+',
            emoji: '📜'
        },
        {
            label: 'Introduction to AWS',
            emoji: '☁️'
        },
        {
            label: "Go - Complete Developer's Guide | Udemy",
            emoji: '💻'
        },
        {
            label: 'Kubernetes for Absolute Beginners | Udemy ',
            emoji: '⚓'
        },
        {
            label: 'Docker for Absolute Beginners | Udemy',
            emoji: '🐳'
        },
        {
            label: 'Python Basics | Hackerrank',
            emoji: '🐍'
        },
        {
            label: 'Machine Learning and AI | IIT, Chennai',
            emoji: '🤖'
        },
        {
            label: 'Excel Essential Training',
            emoji: '📊'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Personality Traits Classifier",
            description1: "Built a web application that classifies the personality of people using Machine Learning Techniques in python.",
            description2: "Tools and Technologies Used: Python, Flask, Heroku",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ManassaVarshni/Personality_Classification", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Analysis of Data Science Survey",
            description1: "Analysis of 2020 Kaggle Machine Learning and Data Science Survey in python.",
            description2: "Tools and Technologies Used: Plotly, Matplotlib, Jupyter Notebook",
            live: "",
            source: "https://github.com/ManassaVarshni/DS_Survey_Visualization",
            image: mock2
        },
        {
            title: "Movie Recommendor System",
            description1: "Built a movie recommender system using item based and user-based collaborative filtering in R.",
            description2: "Tools and Technologies Used: Jupyter Notebook.",
            live: "",
            source: "https://github.com/ManassaVarshni/Movie-Recommender-System",
            image: mock3
        },
        {
            title: "Data Science Salary Scraper",
            description1: "Built a web scraper for scraping information about data science jobs and its salaries from Indeeed in Python",
            description2: "Tools and Technologies Used: Selenium, Python, Pandas",
            live: "",
            source: "https://github.com/ManassaVarshni/ds_job_scraper",
            image: mock4
        },
        {
            title: "Personal Portfolio",
            description1: "Built a personal portfolio",
            description2: "Tools and Technologies Used: React, Java Script",
            live: "",
            source: "https://github.com/ManassaVarshni",
            image: mock5
        }
    ]
}