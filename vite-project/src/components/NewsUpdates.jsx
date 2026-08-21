import React from "react";


const newsItems = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    category: "Tech Blog",
    date: "Aug 4, 2026",
    title: "Migrating 10 million monthly queries: How Bolt moved…",
    description:
      "This article was written by Mangesh Kharinar, Senior Software Engineer at Bolt.",
    featured: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=300&q=80",
    date: "Jul 29, 2026",
    title: "Bolt launches ride-hailing integration into ChatGPT",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=300&q=80",
    date: "Jul 21, 2026",
    title: "Meet Bolt Send: your fast package delivery service",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=300&q=80",
    date: "Jul 9, 2026",
    title: "Funding the planet’s future: Climate projects receive…",
  },
];

export default function NewsUpdates() {
  const featured = newsItems[0];
  const sideNews = newsItems.slice(1);

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2>News and updates</h2>

          <button className="view-all">
            <span>View all</span>
            <span className="arrow">↗</span>
          </button>
        </div>

        <div className="news-grid">
         
          <article className="featured-card">
            <img
              className="featured-image"
              src={featured.image}
              alt=""
            />

            <div className="featured-content">
              <div className="article-meta">
                <span className="category">{featured.category}</span>
                <span className="date">{featured.date}</span>
              </div>

              <h3>{featured.title}</h3>

              <p>{featured.description}</p>
            </div>
          </article>
          <div className="side-news">
            {sideNews.map((item, index) => (
              <article className="small-card" key={index}>
                <img src={item.image} alt="" />

                <div className="small-content">
                  <h4>{item.title}</h4>
                  <span className="date">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
