import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header" role="banner">
        <div className="wrapper">
          <a className="site-title" href="/">Soham Talukdar</a>
        </div>
      </header>

      <main className="page-content" aria-label="Content">
        <div className="wrapper">
          <article className="post">
            <header className="post-header">
              <h1 className="post-title"></h1>
            </header>
            <div className="post-content">
              <img alt="Soham Talukdar" src="IMG-20220529-WA0025.jpg" />
              <p>Hi! I am Soham Talukdar and I am technologist primarily like to work in Computer vision.</p>
              <p>As a versatile technologist, I adapt to various tech stacks based on project requirements and continually embrace new technologies to expand my skill set. With a distinguished postgraduate degree in Machine Learning from the esteemed University of Nottingham, I am eagerly seeking opportunities in related fields. Previously, I served as a data engineer at Accenture, where I honed my expertise in handling data pipelines and advanced analytics.</p>
              <p>My notable research thesis centered around renal segmentation, leveraging the powerful UNet architecture. This deep learning framework is widely acclaimed for its efficacy in image segmentation tasks, and my hands-on experience applying it to solve complex problems has further solidified my understanding of cutting-edge machine learning techniques.</p>
              <p>Continuing my professional growth, I am currently engrossed in mastering JAX and JavaScript. These pursuits demonstrate my commitment to staying abreast of emerging technologies and further refining my skill set. By embracing these frameworks, I aim to unlock new avenues for innovation and contribute to the dynamic landscape of technology.</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
