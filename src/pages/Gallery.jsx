
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const photos = [
  {
    title: "Mountain Serenity",
    category: "Nature",
    date: "10 November 2026",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    description: "Beautiful mountains surrounded by clouds."
  },
  {
    title: "Forest Dreams",
    category: "Nature",
    date: "09 November 2026",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
    description: "A peaceful green forest."
  },
  {
    title: "City Exploration",
    category: "Travel",
    date: "08 November 2026",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
    description: "A beautiful city skyline."
  },
  {
    title: "Coastal Journey",
    category: "Travel",
    date: "07 November 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    description: "A relaxing beach destination."
  },
  {
    title: "Modern Architecture",
    category: "Architecture",
    date: "06 November 2026",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
    description: "Modern architectural design."
  },
  {
    title: "Urban Structure",
    category: "Architecture",
    date: "05 November 2026",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
    description: "An impressive architectural structure."
  }
];

function Gallery() {
  const [searchParams] = useSearchParams();

const initialCategory = searchParams.get("category");

const [category, setCategory] = useState(
  ["Nature", "Travel", "Architecture"].includes(initialCategory)
    ? initialCategory
    : "All"
);
  const [selected, setSelected] = useState(null);

  const filteredPhotos = photos.filter(
    (photo) => category === "All" || photo.category === category
  );

  function movePhoto(direction) {
    const index = filteredPhotos.findIndex(
      (photo) => photo.title === selected.title
    );

    const nextIndex =
      (index + direction + filteredPhotos.length) % filteredPhotos.length;

    setSelected(filteredPhotos[nextIndex]);
  }

  return (
    <main className="gallery-page">
      <h1>Our Gallery</h1>
      <p>Explore moments captured through our lens.</p>

      <div className="filter-buttons">
        {["All", "Nature", "Travel", "Architecture"].map((item) => (
          <button
            key={item}
            className={category === item ? "active-filter" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p>
        Total Photos: {filteredPhotos.length} |
        Nature: {photos.filter(p => p.category === "Nature").length} |
        Travel: {photos.filter(p => p.category === "Travel").length} |
        Architecture: {photos.filter(p => p.category === "Architecture").length}
      </p>

      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div className="photo-card" key={photo.title}>
            <img src={photo.image} alt={photo.description} />
            <div className="photo-info">
              <h2>{photo.title}</h2>
              <p>{photo.category} | {photo.date}</p>
              <p>{photo.description}</p>
              <button onClick={() => setSelected(photo)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="recent-photos">
        <h2>Recently Added Photos</h2>
        <p>{photos.slice(0, 3).map(p => p.title).join(" • ")}</p>
      </section>

      {selected && (
        <div className="photo-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelected(null)}>
              ×
            </button>

            <img src={selected.image} alt={selected.description} />
            <h2>{selected.title}</h2>
            <p>{selected.category} | {selected.date}</p>
            <p>{selected.description}</p>

            <div className="modal-navigation">
              <button onClick={() => movePhoto(-1)}>Previous</button>
              <button onClick={() => movePhoto(1)}>Next</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
