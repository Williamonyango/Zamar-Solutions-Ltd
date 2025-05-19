import { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectPage.css";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [imagesByCategory, setImagesByCategory] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupImage, setPopupImage] = useState(null);

  const categories = [
    { name: "All", subcategories: [] },
    {
      name: "Brand_Activations",
      subcategories: ["Instore Activation", "Experiential marketing"],
    },
    {
      name: "Branding",
      subcategories: [
        "Instore Branding",
        "Outdoor Branding",
        "Free Standing units",
      ],
    },
    { name: "Vehicle_Branding", subcategories: [] },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://zamarsolutions.co.ke/Zamar/api/get_images.php"
        );
        const grouped = {};

        categories.forEach((cat) => {
          if (cat.name !== "All") {
            grouped[cat.name] = {};
            if (cat.subcategories.length > 0) {
              cat.subcategories.forEach((sub) => {
                grouped[cat.name][sub] = [];
              });
            }
            // Ensure 'main' slot exists for each category
            grouped[cat.name]["main"] = [];
          }
        });

        response.data.forEach((img) => {
          const category = img.category;
          // Standardize subcategory name for internal grouping (remove spaces, underscores, hyphens)
          const standardizedSubcategory = (img.subcategory || "main")
            .replace(/[-_\s]/g, "")
            .toLowerCase();
          const image_URL = img.image_URL;

          if (grouped[category]) {
            // Use standardized subcategory name as the key
            if (!grouped[category][standardizedSubcategory]) {
              grouped[category][standardizedSubcategory] = [];
            }
            grouped[category][standardizedSubcategory].push(image_URL);
          }
        });

        setImagesByCategory(grouped);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popupImage]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const openImagePopup = (imageUrl) => {
    setPopupImage(imageUrl);
  };

  const closeImagePopup = () => {
    setPopupImage(null);
  };

  // Helper function to get the display name for a subcategory key
  const getDisplaySubcategoryName = (key) => {
    if (key === "main") return "main";
    // Find the original subcategory name from the predefined list
    for (const category of categories) {
      const foundSubcategory = category.subcategories.find(
        (sub) => sub.replace(/[-_\s]/g, "").toLowerCase() === key.toLowerCase()
      );
      if (foundSubcategory) {
        // Return the original name with underscores replaced by spaces for display
        return foundSubcategory.replaceAll("_", " ");
      }
    }
    // Fallback: if not found in the predefined list, just return the key (underscores replaced for readability)
    return key.replaceAll("_", " ");
  };

  const renderImages = () => {
    if (selectedCategory === "All") {
      return Object.entries(imagesByCategory).map(([cat, subcats]) => (
        <div key={cat} className="product-section">
          <h2 className="product-company">{cat.replaceAll("_", " ")}</h2>
          {/* Iterate over standardized subcategory keys */}
          {Object.entries(subcats).map(([standardizedSubKey, imgs]) =>
            imgs.length > 0 ? (
              <div key={standardizedSubKey} className="subcategory-section">
                {/* Display subcategory name using the helper function */}
                {standardizedSubKey !== "main" && (
                  <h3 className="subcategory-title">
                    {getDisplaySubcategoryName(standardizedSubKey)}
                  </h3>
                )}
                <div className="product-grid">
                  {imgs.map((url, i) => (
                    <div key={i} className="product-card">
                      <img
                        src={url}
                        alt={`img-${i}`}
                        className="product-image"
                        onClick={() => openImagePopup(url)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      ));
    }

    const subcats = imagesByCategory[selectedCategory] || {};

    // Standardize selected subcategory name for lookup
    const selectedSubcategoryKey = selectedSubcategory
      ? selectedSubcategory.replace(/[-_\s]/g, "").toLowerCase()
      : null;

    if (selectedSubcategoryKey) {
      const imgs = subcats[selectedSubcategoryKey] || [];
      return (
        <div className="product-section">
          <h2 className="product-company">
            {selectedCategory.replaceAll("_", " ")}
          </h2>
          {/* Display selected subcategory name using the helper function */}
          {selectedSubcategoryKey !== "main" && (
            <h3 className="subcategory-title">
              {getDisplaySubcategoryName(selectedSubcategoryKey)}
            </h3>
          )}
          <div className="product-grid">
            {imgs.length > 0 ? (
              imgs.map((img, idx) => (
                <div key={idx} className="product-card">
                  <img
                    src={img}
                    alt={`img-${idx}`}
                    className="product-image"
                    onClick={() => openImagePopup(img)}
                  />
                </div>
              ))
            ) : (
              <p>No images in this subcategory.</p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="product-section">
        <h2 className="product-company">
          {selectedCategory.replaceAll("_", " ")}
        </h2>
        {/* Iterate over standardized subcategory keys */}
        {Object.entries(subcats).map(([standardizedSubKey, imgs]) =>
          imgs.length > 0 ? (
            <div key={standardizedSubKey} className="subcategory-section">
              {/* Display subcategory name using the helper function */}
              {standardizedSubKey !== "main" && (
                <h3 className="subcategory-title">
                  {getDisplaySubcategoryName(standardizedSubKey)}
                </h3>
              )}
              <div className="product-grid">
                {imgs.map((img, idx) => (
                  <div key={idx} className="product-card">
                    <img
                      src={img}
                      alt={`img-${idx}`}
                      className="product-image"
                      onClick={() => openImagePopup(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    );
  };

  // Helper function to get original subcategory name for display based on standardized key
  const getOriginalSubcategoryName = (standardizedName) => {
    // Iterate through the predefined categories to find the original subcategory name
    for (const category of categories) {
      const foundSubcategory = category.subcategories.find(
        (sub) =>
          sub.replace(/[-_\s]/g, "").toLowerCase() ===
          standardizedName.toLowerCase()
      );
      if (foundSubcategory) {
        return foundSubcategory.replaceAll("_", " ");
      }
    }
    // Fallback: if not found (e.g., for 'main' or unexpected data), return the standardized name (with underscores replaced for readability if it's not 'main')
    return standardizedName === "main"
      ? "main"
      : standardizedName.replaceAll("_", " ");
  };

  return (
    <div className="product-page-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Categories</h2>
        {categories.map((cat) => (
          <div key={cat.name} className="category-item">
            <button
              className={`category-button ${
                selectedCategory === cat.name && !selectedSubcategory
                  ? "active"
                  : ""
              }`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name.replaceAll("_", " ")}
              {cat.subcategories.length > 0 && (
                <span className="expand-icon">
                  {expandedCategories[cat.name] ? "−" : "+"}
                </span>
              )}
            </button>
            {expandedCategories[cat.name] &&
              cat.subcategories.map((sub) => (
                <button
                  key={sub}
                  className={`subcategory-button ${
                    selectedCategory === cat.name && selectedSubcategory === sub
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    handleSubcategoryClick(sub);
                    setExpandedCategories((prev) => ({
                      ...prev,
                      [cat.name]: true,
                    }));
                  }}
                >
                  {sub.replaceAll("_", " ")}
                </button>
              ))}
          </div>
        ))}
      </aside>

      <main className="main-content">
        <header className="header">
          <h1 className="header-title">Our Projects</h1>
          <p className="header-description">
            Explore our diverse range of projects, showcasing our expertise in
            various categories. Click on a category to view the images.
          </p>
        </header>
        {loading ? (
          <div className="spinner">
            <div className="spin"></div>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          renderImages()
        )}
      </main>

      {popupImage && (
        <div className="image-popup-overlay" onClick={closeImagePopup}>
          <div
            className="image-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-popup" onClick={closeImagePopup}>
              &times;
            </button>
            <img src={popupImage} alt="Full size" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
}
