import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

function App() {
  return (
    <div className="App">
      <header className="site-header" role="banner">
        <div className="wrapper">
          <div className="header-content"> 
            <a className="site-title" href="/">Soham Talukdar</a>
            <div className="contact-info"> 
              <div className="social-icons">
                <a href="https://github.com/sohamtalukdar" target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
                <a href="https://www.linkedin.com/in/soham-talukdar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:sohamt09@gmail.com"><FaEnvelope /></a> 
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page-content" aria-label="Content">
        <section className="wrapper">
          <article className="post">
            <div className="post-content">
              <img alt="Soham Talukdar working on a computer" src="/image.jpg" />
              <p>Hi! I am Soham Talukdar and I am technologist primarily like to work in Computer vision.</p>
              <p> As a versatile technologist, I adapt to various tech stacks based on project requirements and continually embrace new technologies to expand my skill set. With a distinguished postgraduate degree in Machine Learning from the esteemed University of Nottingham, I am eagerly seeking opportunities in related fields. Previously, I served as a data engineer at Accenture, where I honed my expertise in handling data pipelines and advanced analytics.My notable research thesis centered around renal segmentation, leveraging the powerful UNet architecture. This deep learning framework is widely acclaimed for its efficacy in image segmentation tasks, and my hands-on experience applying it to solve complex problems has further solidified my understanding of cutting-edge machine learning techniques.</p>
            
              <p>Continuing my professional growth, I am currently engrossed in mastering JAX and JavaScript. These pursuits demonstrate my commitment to staying abreast of emerging technologies and further refining my skill set. By embracing these frameworks, I aim to unlock new avenues for innovation and contribute to the dynamic landscape of technology.
              </p>
            </div>
          </article>
        </section>
      </main>

      {/* Removed the timeline footer */}
    </div>
  );
}

export default App;