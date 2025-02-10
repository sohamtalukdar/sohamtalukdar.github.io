// MainContent.js
import React from 'react';

function MainContent() {
  return (
    <main className="page-content" aria-label="Content">
      <section className="wrapper">
        <article className="post">
          <div className="post-content">
            <img alt="Soham Talukdar working on a computer" src="/image.jpg" />
            <p>Hi! I am Soham Talukdar and I am a technologist primarily focused on Computer Vision.</p>
            <p>
              As a versatile technologist, I adapt to various tech stacks based on project requirements and continually embrace new technologies to expand my skill set. With a distinguished postgraduate degree in Machine Learning from the esteemed University of Nottingham, I am eagerly seeking opportunities in related fields. Previously, I served as a data engineer at Accenture, where I honed my expertise in handling data pipelines and advanced analytics. My notable research thesis centered around renal segmentation, leveraging the powerful UNet architecture. This deep learning framework is widely acclaimed for its efficacy in image segmentation tasks, and my hands-on experience applying it to solve complex problems has further solidified my understanding of cutting-edge machine learning techniques.
            </p>
            <p>
              Continuing my professional growth, I am currently engrossed in mastering JAX and JavaScript. These pursuits demonstrate my commitment to staying abreast of emerging technologies and further refining my skill set. By embracing these frameworks, I aim to unlock new avenues for innovation and contribute to the dynamic landscape of technology.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default MainContent;
