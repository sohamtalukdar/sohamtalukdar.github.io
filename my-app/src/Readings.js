import React from 'react';

function Readings() {
  const readings = [
    {
      title: "How to Train Really Large Models on Many GPUs?",
      link: "https://lilianweng.github.io/posts/2021-09-25-train-large/",
    },
    {
      title: "What Every Programmer Should Know About Memory",
      link: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",
    },
  ];

  return (
    <main className="page-content">
      <section className="wrapper">
        <header>
          <h1>Readings</h1>
          <h4>A curated list of readings that I found helpful:</h4>
        </header>
        
        <ul>
          {readings.map((reading, index) => (
            <li key={index}>
              <a href={reading.link} target="_blank" rel="noopener noreferrer">
                {reading.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Readings;
