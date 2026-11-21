
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <p className="subtitle">WELCOME TO OUR WORLD</p>

        <h1>FRAME <span>&</span> FOCUS</h1>

        <p className="hero-text">
          Discover the beauty of the world through
          the art of photography.
        </p>

        <Link to="/gallery" className="explore-btn">
          EXPLORE GALLERY
        </Link>
      </section>

      <section className="featured">
        <h2>Featured Photograph</h2>

        <img
          className="featured-image"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
          alt="Snow-covered mountain peaks beneath a beautiful sky"
        />

        <h3>Mountain Serenity</h3>

        <p>
          Experience the peaceful beauty of mountains
          surrounded by clouds and nature.
        </p>

        <Link to="/gallery" className="explore-btn">
          View All Photographs
        </Link>
      </section>
    </main>
  );
}

export default Home;
