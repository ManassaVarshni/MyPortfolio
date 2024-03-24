import self from "../img/Manassa.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
    position: "a Cloud Software Developer",
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
            text: 'Based from INDIA'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at TCS - IBM Cloud"
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Manassa. I am a System Engineer at TCS, working as a contractor in IBM as a Cloud Storage Software Developer. I hold a Master's in Data Science from CIT, Coimbatore. ",
    
    job1: "Systems Engineer",
    job1desc1: "Cloud Storage Software Developer - IBM",
    job1datapoint1: "Software Development using Go Programming Language based on Linux Operating System.",
    job1datapoint2: "Hands-on experience working on a Cloud Platform Provider (IBM Cloud).",
    job1datapoint3: "Experience  deploying  applications  to  Kubernetes  Clusters  and  ensuring Code Quality.",
    job1datapoint4: "Developed Razee templates for Continuous Delivery.",
    job1datapoint5: "Used Git for Version Control and participated in Code Reviews in Github.",
    job1datapoint6: "Worked on tickets tracked via Jira with high velocity while ensuring code quality.",
    job1desc2: "Cloud Storage Automation Engineer - IBM",
    job1data1: "Developed  and  implemented  various  test  cases  in  Python  for  different projects to ensure backward compatability.",
    job1data2: "Updated the library code to comply with the needs of new projects.",
    job1data3: "Identified,  reported  and  tracked  several  bugs  and  defects,  and  provided feedback and suggestions for improvement.",
    job1data4: "Modified  the  library  modules  and  optimized  the  code  to  reuse  the resources.",

    job2: "Data Analyst",
    job2datapoint1: "Developed and trained the required models for Corrosion Modeling using Machine Learning in R Programming language.", 
    job2datapoint2: "Integrated the models in a Web Application using R Shiny and hosted in Azure Cloud.",
    job2datapoint3: "Did  Regression  Testing  for  Connected  Planning  before  it  came  into production in their internal platform.",
     
    job3: "Data Analyst",
    job3datapoint1: "Designed  and  developed  Chatbots  for  various  Ophthalmic  Departments using Dialogflow and Rasa.",

    skills:
        {
            proficientWith: ['Python', 'Go', 'R', 'Git', 'Docker', 'Kubernetes', 'Linux', 'Insomnia', 'Travis CI', 'Jira', 'SQL', 'IBM Cloud', 'VS Code', 'Excel', 'Dialogflow - GCP', 'R Shiny'],
            exposedTo: ['Ansible', 'Terraform', 'AWS']
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    certifications: [
        {
            label: 'IBM Cloud Advocate V2 | IBM',
            emoji: '🔖'
        },
        {
            label: "Go - Complete Developer's Guide | Udemy",
            emoji: '🔖'
        },
        {
            label: 'Kubernetes for Absolute Beginners | Udemy ',
            emoji: '🔖'
        },
        {
            label: 'Docker for Absolute Beginners | Udemy',
            emoji: '🔖'
        },
        {
            label: 'Python Basics | Hackerrank',
            emoji: '🔖'
        },
        {
            label: 'Machine Learning and AI | IIT, Chennai',
            emoji: '🔖'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
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