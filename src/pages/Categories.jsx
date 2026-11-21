
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Nature", count: 2, description: "Discover the beauty of nature." },
    { name: "Travel", count: 2, description: "Explore beautiful destinations." },
    { name: "Architecture", count: 2, description: "Discover impressive structures." }
  ];

  return (
    <main className="categories-page">
      <h1>Explore Categories</h1>
      <p>Discover photography from different worlds.</p>

      <div className="category-grid">
        {categories.map((item) => (
          <Link
            to={`/gallery?category=${item.name}`}
            className="category-card"
            key={item.name}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.count} Photographs</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Categories;
