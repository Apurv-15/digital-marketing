import React from 'react';
import './details.css'; // Import the CSS file

function Details() {
  const statsData = [
    { title: '50% Growth', description: 'Increase in Sales and Revenue through Effective Marketing Campaigns' },
    { title: '50%', description: 'Conversion Rate' },
    { title: 'Higher ROI and Customer Engagement', description: 'with Targeted Marketing Strategies' },
  ];

  return (
    <div className="container">
     =
        <h1 className='head'>Discover the Power of Digital Marketing with Impressive Results</h1>
      
      <section className="stats">
        {statsData.map((stat, index) => (
          <div key={index} className="stat">
            <h2>{stat.title}</h2>
            <p>{stat.description}</p>
          </div>
        ))}
      </section>
      <section className="testimonial">
        <div className="quote">
          <q>
            "Your digital marketing strategies have helped us achieve our goals and boost our online presence. Thank you!"
          </q>
          <cite>- John Doe, Acme Corp.</cite>
        </div>
      </section>
      <section className="call-to-action">
        <h2>Ready to boost your online presence?</h2>
        <button className="cta-button">Get in touch</button>
      </section>
    </div>
  );
}

export default Details;
