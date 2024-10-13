"use client";
import Image from "next/image";
import { useState } from "react";
import MarkdownRenderer from './components/MarkdownRenderer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'How can I help you learn more about Anik and his Resume?'
    }
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  // const submitForm = async (e) => {
  //   e.preventDefault();
  
  //   // Add the user's input to the message history
  //   let newMessages = [...messages, { role: 'user', content: messageInput }];
  //   setMessages(newMessages);
  //   setMessageInput(''); // Clear input field
  
  //   try {
  //     // Make the API request
  //     const response = await fetch('/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ messages: newMessages }),
  //     });
  
  //     // Check if the response is successful
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     // Parse the JSON response from the server
  //     const apiMessage = await response.json();
  
  //     // Update messages with the assistant's response
  //     setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     // Optionally, you can set an error message in the UI here
  //   }
  // };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
            <a href="#" className="logo-holder">
                <div className="logo">A</div>
                <div className="logo-text">Anik's Portfolio Website</div>
            </a>
            <nav>
                <ul id="menu" className={menuOpen ? "active" : ""}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="mailto:anikde475@gmail.com" className="button">Contact Me</a> 
                    </li>
                </ul>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
                    </svg>
                </a>
            </nav>
        </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <h1>
              <small>Hello, I'm</small>
              Anik De
              <small>An Engineer crafting AI-driven solutions</small>
            </h1>
            <p>
              Data Science Master's student at the University of Rochester, specializing in AI, deep learning, and natural language processing.
              <span>
              I am passionate about building scalable architectures from scratch, integrating Retrieval-Augmented Generation (RAG) pipelines, and leveraging advanced LLMs like GPT-4 and Google Gemini to solve real-world problems
              </span>{" "}
              I have a strong background in healthcare AI and geospatial analysis, and I love applying cutting-edge technologies to impact industries.            
              </p>
            <div className="call-to-action">
              <a href="./onePageFinalsummer.pdf" className="button black">View Resume</a>
              <a href="mailto:anikde475@gmail.com" className="button white">Contact Me</a>
            </div>
            <div className="Social-Links">
              <a href="https://github.com/anik475">
                <img src="./images/github.png" alt="Github" width="48px" />
              </a>
              <a href="https://www.linkedin.com/in/anikde/">
                <img src="./images/linkedIn.png" alt="LinkedIn" width="30px" />
              </a>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./images/anik.jpeg" alt="Anik De" width="150%" />
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Data Analysis</h3>
              <ul>
                <li>Data Cleaning</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Predictive Modeling</li>
              </ul>
              <h3>Machine Learning and Deep Learning</h3>
              <ul>
                <li>Supervised Learning</li>
                <li>Unsupervised Learning</li>
                <li>Neural Networks</li>
                <li>Convolutional Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Large Language Models</li>
                <li>Transformers</li>
                <li>Image Segmentation Models</li>
                <li>Image Classification Models</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                A dedicated Machine Learning Engineer currently pursuing Master's degree in Data Science from the University of Rochester who is always looking for innovative ideas related to tech.
                My journey in technology is driven by a passion for solving complex problems with data-driven insights. With a strong foundation in AI,
                machine learning, and deep learning, I specialize in developing scalable architectures and innovative algorithms. My experience spans
                multiple domains, including healthcare and geospatial analysis, where I've successfully applied my technical expertise to real-world
                challenges. Notably, I've worked on enhancing AI-driven healthcare solutions and implementing sophisticated Retrieval-Augmented
                Generation (RAG) systems, consistently delivering impactful results.
              </p>
              <p>
                Beyond my technical skills, I am a passionate guy who loves everything about technology—whether it is coding or creating something from scratch. 
                I am constantly thinking of innovative solutions to problems. Outside of tech, I enjoy building intricate Lego sets, playing guitar, soccer, and listening to music. 
                I am fascinated by scientific discoveries, especially about outer space, and I love watching sci-fi movies. 
                I am also a big fan of AC/DC, and their music fuels my creativity and passion.
              </p>
            </div>
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./images/python.png" alt="Python" width="128" />
              <img src="./images/c__.png" alt="C++" width="128" />
              <img src="./images/R.jpg" alt="R" width="128" />
              <img src="./images/tensorflow.png" alt="TensorFlow" width="128" />
              <img src="./images/pyTorch.png" alt="PyTorch" width="128" />
              <img src="./images/huggingface.png" alt="Hugging Face" width="128" />
              <img src="./images/gemeni.jpg" alt="Google Gemini" width="128" />
              <img src="./images/Transformer.png" alt="Transformers" width="128" />
              <img src="./images/firebase.png" alt="Firebase" width="128" />
              <img src="./images/openAI.png" alt="OpenAI" width="128" />
              <img src="./images/openCV.png" alt="OpenCV" width="128" />
              <img src="./images/download.jpg" alt="Langchain" width="128" />
              <img src="./images/pyspark.png" alt="PySpark" width="128" />
              <img src="./images/pandas.png" alt="Pandas" width="128" />
              <img src="./images/matplotlib.png" alt="Matplotlib" width="128" />
              <img src="./images/numPY.png" alt="NumPy" width="128" />
              <img src="./images/scikitlearn.png" alt="Scikit-learn" width="128" />
              <img src="./images/anaconda.png" alt="Anaconda" width="128" />
              <img src="./images/aws_cloud.png" alt="Amazon AWS Cloud" width="128" />
              <img src="./images/databricks.png" alt="Databricks" width="128" />
              <img src="./images/flask.png" alt="Flask" width="128" />
              <img src="./images/qgis.jpg" alt="QGIS" width="128" />
            </div>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>Talk To Me</small>
            Let's Chat
          </h2>
          <p className="chat-disclaimer">
            Disclaimer: Please note that this chatbot is hosted on a free hosting service, which may result in occasional interruptions or the inability to process certain requests. Response times and availability may vary, and some features might not function due to hosting limitations. We appreciate your understanding and patience.
         </p>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, work experience, and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what I've done.
              </p>
              <p>
                You can also download my resume here if you want to take a look at it. I'm currently looking for new opportunities so if you have a
                project you think I'd be a good fit for, please get in touch!
              </p>
              <a href="./onePageFinalsummer.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">
                        {/* Render Markdown content */}
                        <MarkdownRenderer content={message.content} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Anik, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./images/GrantAIde.jpg" alt="GrantAIde" width="100%" />
                  <figcaption>GrantAIde</figcaption>
                </div>
              </figure>
              <h3>AI/Machine Learning Scientist</h3>
              <div>Jun 2024 - Aug 2024</div>
              <p>
                • Designed and developed AI models focusing on Natural Language Processing (NLP) for prompt-based learning and generation.
                <br />
                • Parameter-Efficient Fine-Tuning (PEFT) techniques to optimize AI model performance.
                <br />
                • Developed an end-to-end multi-tenancy Retrieval-Augmented Generation (RAG) pipeline to enhance information retrieval and text
                generation using Langchain, FAISS vector database, Google Cloud Storage, and Google Cloud Functions.
                <br />
                • Implemented Google Analytics Tags using Google Tag Manager, Custom Events, and Triggers.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/urmc.png" alt="University of Rochester Medical Center" width="100%" />
                  <figcaption>University of Rochester Medical Center</figcaption>
                </div>
              </figure>
              <h3>Research Assistant</h3>
              <div>Mar 2024- Present</div>
              <p>
                • Working with NIH data for N3C datasets with PySpark on characterization of Long Covid.
                <br />
                • Working with NIH datasets for N3C on Mental Health characterization of Long Covid.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/siemens.jpg" alt="Siemens Healthineers" width="100%" />
                  <figcaption>Siemens Healthineers</figcaption>
                </div>
              </figure>
              <h3>Research and Software Developer I</h3>
              <div>Jan 2022 - Jul 2023</div>
              <p>
                • Enhanced AI-driven healthcare solutions by 20% through collaboration with diverse teams, resulting in improved patient care.
                <br />
                • Improved build analysis, reducing failed builds by 30% and preventing dead tests, boosting cardiovascular team productivity.
                <br />
                • Improved CI/CD processes, resulting in a 20% reduction in staging build failures, ensuring a more stable development environment
                within 4 months.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://github.com/marv950819/BrainAge3DCNN" className="bento-item">
              <img src="./images/bio1.png" alt="Prediction of Biological Age" width="100%" />
              <figcaption>Prediction of Biological Age</figcaption>
            </a>
            <a href="https://github.com/anik475/Website_NextJs_reactJs" className="bento-item">
              <img src="./images/web.png" alt="Portfolio Website using NextJs" width="100%" />
              <figcaption>Portfolio Website using NextJs</figcaption>
            </a>
            <a href="https://github.com/anik475/Statistics-Project-Study-Of-Applicants-Applying-for-master-s-and-PhD-Program-at-U-of-R" className="bento-item">
              <img src="./images/uofr2.png" alt="Study Of Applicants Applying for master's and PhD Program at University of Rochester" width="100%" />
              <figcaption>Study Of Applicants Applying for master's and PhD Program at University of Rochester</figcaption>
            </a>
            <a href="https://github.com/anik475/Realtime_Tweet_Sentiment_Analysis" className="bento-item">
              <img src="./images/chip.png" alt="Realtime Top 10 Positive and Negative Tweet Mentions using Sentiment Analysis" width="100%" />
              <figcaption>Positive and Negative Tweet Mentions using Sentiment Analysis</figcaption>
            </a>
            <a href="https://github.com/anik475/Covid-19-CT-Lungs-Segmentation-Using-Attention-U-Net" className="bento-item">
              <img src="./images/lung.png" alt="Covid-19 CT Lungs Segmentation Using Attention UNet" width="100%" />
              <figcaption>Covid-19 CT Lungs Segmentation Using Attention UNet</figcaption>
            </a>
            <a href="https://github.com/anik475/Vission-Transformer-for-Image-Segemntion-using-UNET-R" className="bento-item">
              <img src="./images/lung2.png" alt="Image Segmentation Using UNET-R" width="100%" />
              <figcaption>Image Segmentation Using UNET-R</figcaption>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}