
import Fullstackweb from '../assets/images/courses/full-stack-web-development.jpg';
import ISODev from '../assets/images/courses/complete_iOS_developer.jpg';
import Cybersecurity from '../assets/images/courses/cybersecurity.jpg';
import PythonTraining from '../assets/images/courses/python-training.png';
import MachinTraining from '../assets/images/courses/machine_learning_fundamentals.jpg';
import DataScience from '../assets/images/courses/Data-Science.png';
import ColudComputing from '../assets/images/courses/Cloud-Computing.jpg';
import AngularCourse from '../assets/images/courses/angular-training-courses-online.jpg';

export const courses = [
    { 
        name: 'Complete iOS 16 Developer',
        description: 'This comprehensive course covers all aspects of iOS app development using Swift programming language. It includes topics such as UI design, networking, data persistence, and deployment to the App Store.',
        lessons: 58,
        price: 50,
        actualPrice: 150,
        image: ISODev,
        topics: [
            {
                name: 'Introduction to iOS Development',
                description: 'An overview of iOS development ecosystem, Xcode IDE, and basics of Swift programming language.',
                lessons: 4
            },
            {
                name: 'User Interface Design',
                description: 'Learn to design visually appealing and user-friendly interfaces using UIKit framework.',
                lessons: 8
            },
            {
                name: 'Networking and Web Services',
                description: 'Understand how to integrate networking functionality into iOS apps and consume web services.',
                lessons: 6
            },
            {
                name: 'Data Persistence',
                description: 'Explore various techniques for storing and retrieving data locally on iOS devices using Core Data and UserDefaults.',
                lessons: 7
            },
            {
                name: 'Advanced Topics in iOS Development',
                description: 'Cover advanced topics such as animations, custom transitions, and integrating third-party libraries.',
                lessons: 10
            },
            {
                name: 'Testing and Debugging',
                description: 'Learn best practices for testing and debugging iOS applications to ensure reliability and performance.',
                lessons: 5
            },
            {
                name: 'App Deployment and App Store Submission',
                description: 'Understand the process of preparing an iOS app for deployment, submitting to the App Store, and managing app updates.',
                lessons: 5
            }
        ]
    },
    {
        name: 'Full Stack Web Development with React and Node.js',
        description: 'This course teaches full-stack web development using React.js for frontend and Node.js for backend. Students will learn to build dynamic web applications with modern tools and technologies.',
        lessons: 64,
        price: 60,
        actualPrice: 200,
        image: Fullstackweb,
        topics: [
            {
                name: 'Introduction to React.js',
                description: 'Learn the basics of React.js library and its core concepts such as components, props, and state management.',
                lessons: 6
            },
            {
                name: 'Building RESTful APIs with Node.js',
                description: 'Understand how to create RESTful APIs using Node.js and Express framework for building scalable backend services.',
                lessons: 10
            },
            {
                name: 'Database Design and Management',
                description: 'Explore database design principles and learn to work with databases like MongoDB for storing and managing data.',
                lessons: 8
            },
            {
                name: 'Authentication and Authorization',
                description: 'Implement user authentication and authorization mechanisms using JWT (JSON Web Tokens) and bcrypt for securing web applications.',
                lessons: 7
            },
            {
                name: 'State Management with Redux',
                description: 'Master Redux library for managing application state in complex React.js applications with predictable state changes.',
                lessons: 9
            },
            {
                name: 'Responsive Web Design',
                description: 'Learn techniques for creating responsive web designs that adapt to various screen sizes and devices using CSS media queries and flexbox.',
                lessons: 6
            },
            {
                name: 'Deployment and DevOps Practices',
                description: 'Understand deployment strategies and DevOps practices for deploying and maintaining web applications in production environments.',
                lessons: 7
            }
        ]
    },
    {
        name: 'Machine Learning Fundamentals',
        description: 'This course provides a solid foundation in machine learning concepts and techniques. Topics covered include supervised learning, unsupervised learning, model evaluation, and feature engineering.',
        lessons: 50,
        price: 70,
        actualPrice: 180,
        image: MachinTraining,
        topics: [
            {
                name: 'Introduction to Machine Learning',
                description: 'An overview of machine learning, its applications, and various types of machine learning algorithms.',
                lessons: 6
            },
            {
                name: 'Supervised Learning',
                description: 'Understand supervised learning algorithms such as linear regression, logistic regression, decision trees, and support vector machines.',
                lessons: 8
            },
            {
                name: 'Unsupervised Learning',
                description: 'Explore unsupervised learning techniques including clustering algorithms such as K-means and hierarchical clustering.',
                lessons: 7
            },
            {
                name: 'Model Evaluation and Validation',
                description: 'Learn techniques for evaluating and validating machine learning models to ensure their performance and generalization.',
                lessons: 6
            },
            {
                name: 'Feature Engineering',
                description: 'Understand the process of feature selection and feature extraction to improve model performance and reduce overfitting.',
                lessons: 7
            },
            {
                name: 'Deep Learning Basics',
                description: 'An introduction to deep learning concepts, neural networks, activation functions, and training neural networks with backpropagation.',
                lessons: 8
            },
            {
                name: 'Natural Language Processing (NLP)',
                description: 'Introduction to NLP techniques such as tokenization, stemming, sentiment analysis, and text classification using machine learning.',
                lessons: 6
            }
        ]
    },
    {
        name: 'Cybersecurity Fundamentals',
        description: 'This course covers the fundamentals of cybersecurity, including network security, cryptography, threat detection, and incident response.',
        lessons: 40,
        price: 80,
        actualPrice: 200,
        image: Cybersecurity,
        topics: [
            {
                name: 'Introduction to Cybersecurity',
                description: 'An overview of cybersecurity principles, common threats, and the importance of cybersecurity in today\'s digital world.',
                lessons: 5
            },
            {
                name: 'Network Security',
                description: 'Learn about network security concepts, protocols, and techniques to secure computer networks against unauthorized access and attacks.',
                lessons: 7
            },
            {
                name: 'Cryptography Fundamentals',
                description: 'Understand the basics of cryptography, encryption algorithms, digital signatures, and cryptographic protocols for secure communication.',
                lessons: 6
            },
            {
                name: 'Threat Detection and Prevention',
                description: 'Explore techniques for detecting and preventing cybersecurity threats such as malware, phishing, and insider threats.',
                lessons: 5
            },
            {
                name: 'Incident Response and Recovery',
                description: 'Learn best practices for incident response, handling security incidents, and recovering from security breaches.',
                lessons: 6
            },
            {
                name: 'Security Compliance and Regulations',
                description: 'Understand security compliance requirements, industry standards, and regulations such as GDPR and HIPAA.',
                lessons: 6
            },
            {
                name: 'Ethical Hacking and Penetration Testing',
                description: 'Introduction to ethical hacking techniques, penetration testing methodologies, and tools for assessing and improving security posture.',
                lessons: 5
            }
        ]
    },
    {
        name: 'Python Programming for Data Science',
        description: 'This course focuses on Python programming for data science and machine learning. Topics include data manipulation, data visualization, statistical analysis, and machine learning algorithms.',
        lessons: 45,
        price: 55,
        actualPrice: 150,
        image: PythonTraining,
        topics: [
            {
                name: 'Introduction to Python',
                description: 'An introduction to Python programming language, including basic syntax, data types, and control structures.',
                lessons: 4
            },
            {
                name: 'Data Manipulation with Pandas',
                description: 'Learn to manipulate and analyze tabular data using Pandas library, including data cleaning, transformation, and aggregation.',
                lessons: 8
            },
            {
                name: 'Data Visualization with Matplotlib and Seaborn',
                description: 'Understand how to create informative and visually appealing plots and charts using Matplotlib and Seaborn libraries.',
                lessons: 7
            },
            {
                name: 'Statistical Analysis with NumPy and SciPy',
                description: 'Explore statistical analysis techniques using NumPy and SciPy libraries, including hypothesis testing and regression analysis.',
                lessons: 6
            },
            {
                name: 'Machine Learning with Scikit-Learn',
                description: 'Introduction to machine learning algorithms and techniques using Scikit-Learn library, including supervised and unsupervised learning.',
                lessons: 8
            },
            {
                name: 'Deep Learning with TensorFlow and Keras',
                description: 'An overview of deep learning concepts and techniques using TensorFlow and Keras libraries for building neural networks.',
                lessons: 6
            },
            {
                name: 'Data Science Projects',
                description: 'Apply Python programming and data science skills to real-world projects, including data analysis, visualization, and machine learning.',
                lessons: 6
            }
        ]
    },
    {
        name: 'Cloud Computing Fundamentals',
        description: 'This course covers the fundamentals of cloud computing, including cloud architecture, deployment models, virtualization, and cloud services.',
        lessons: 35,
        price: 75,
        actualPrice: 180,
        image: ColudComputing,
        topics: [
            {
                name: 'Introduction to Cloud Computing',
                description: 'An overview of cloud computing concepts, benefits, and characteristics, including service models and deployment models.',
                lessons: 5
            },
            {
                name: 'Cloud Service Providers',
                description: 'Learn about major cloud service providers such as AWS, Azure, and Google Cloud Platform, and their core services.',
                lessons: 6
            },
            {
                name: 'Virtualization Technologies',
                description: 'Understand virtualization technologies such as hypervisors, containers, and virtual machines (VMs) in the context of cloud computing.',
                lessons: 5
            },
            {
                name: 'Cloud Storage and Databases',
                description: 'Explore cloud storage solutions and databases offered by cloud providers, including object storage, relational databases, and NoSQL databases.',
                lessons: 6
            },
            {
                name: 'Networking in the Cloud',
                description: 'Learn about cloud networking concepts, virtual networks, load balancing, and security groups for securing cloud environments.',
                lessons: 5
            },
            {
                name: 'Serverless Computing',
                description: 'Introduction to serverless computing concepts and platforms such as AWS Lambda and Azure Functions for building and deploying serverless applications.',
                lessons: 5
            },
            {
                name: 'Cloud Security and Compliance',
                description: 'Understand cloud security best practices, identity and access management (IAM), encryption, and compliance requirements in the cloud.',
                lessons: 4
            }
        ]
    },
    {
        name: 'Python for Data Science',
        description: 'This course focuses on Python programming language for data science applications. Topics include data manipulation, visualization, machine learning, and data analysis libraries.',
        lessons: 45,
        price: 55,
        actualPrice: 150,
        image: DataScience,
        topics: [
            {
                name: 'Introduction to Python for Data Science',
                description: 'An overview of Python programming language and its applications in data science.',
                lessons: 4
            },
            {
                name: 'Data Manipulation with Pandas',
                description: 'Learn to manipulate and analyze structured data using Pandas library in Python.',
                lessons: 7
            },
            {
                name: 'Data Visualization with Matplotlib and Seaborn',
                description: 'Explore data visualization techniques using Matplotlib and Seaborn libraries for creating insightful plots and charts.',
                lessons: 6
            },
            {
                name: 'Machine Learning with Scikit-Learn',
                description: 'Introduction to machine learning algorithms and techniques using Scikit-Learn library in Python.',
                lessons: 8
            },
            {
                name: 'Deep Learning with TensorFlow',
                description: 'An introduction to deep learning concepts and TensorFlow library for building and training neural networks.',
                lessons: 7
            },
            {
                name: 'Data Analysis with NumPy',
                description: 'Learn to perform numerical computations and data analysis using NumPy library in Python.',
                lessons: 6
            },
            {
                name: 'Big Data Analytics with PySpark',
                description: 'Introduction to big data analytics using PySpark, a Python API for Apache Spark framework.',
                lessons: 7
            }
        ]
    },
    {
        name: 'Angular Web Development',
        description: 'This course covers Angular framework for building modern web applications. You will learn concepts such as components, services, routing, forms, and HTTP communication.',
        lessons: 45,
        price: 55,
        actualPrice: 150,
        image: AngularCourse,
        topics: [
            {
                name: 'Introduction to Angular',
                description: 'An overview of Angular framework, its features, architecture, and advantages for web development.',
                lessons: 5
            },
            {
                name: 'Components and Directives',
                description: 'Understand Angular components, directives, data binding, and component communication techniques.',
                lessons: 7
            },
            {
                name: 'Services and Dependency Injection',
                description: 'Learn to create and use Angular services for encapsulating reusable business logic and data sharing across components.',
                lessons: 6
            },
            {
                name: 'Routing and Navigation',
                description: 'Explore Angular router module for implementing navigation between different views and routing in single-page applications.',
                lessons: 6
            },
            {
                name: 'Forms and Validation',
                description: 'Master Angular forms module for building forms, handling user input, and implementing form validation techniques.',
                lessons: 7
            },
            {
                name: 'HTTP Communication',
                description: 'Understand how to make HTTP requests and handle responses using Angular HttpClient module to interact with backend APIs.',
                lessons: 6
            },
            {
                name: 'Angular CLI and Project Setup',
                description: 'Learn to use Angular CLI (Command Line Interface) for scaffolding and managing Angular projects efficiently.',
                lessons: 5
            }
        ]
    }
];
