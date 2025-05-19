import React, { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";
import { services } from "../../data/Services";

function Admin() {
  const [category, setCategory] = useState("Brand_Activations");
  const [subcategory, setSubcategory] = useState("Instore_Activation");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [uploadedImages, setUploadedImages] = useState([]);
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    imageURL: null,
  });
  const [selectedService, setSelectedService] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const showSubcategory =
    category === "Brand_Activations" || category === "Branding";

  useEffect(() => {
    fetchImages();
  }, [category, subcategory]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  useEffect(() => {
    let toastTimer;
    if (toast.show) {
      toastTimer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
    }
    return () => clearTimeout(toastTimer);
  }, [toast]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setSelectedService("");
    setServiceDescription("");

    // Set default subcategory based on category
    if (newCategory === "Brand_Activations") {
      setSubcategory("Instore_Activation");
    } else if (newCategory === "Branding") {
      setSubcategory("Instore_Branding");
    } else {
      setSubcategory("");
    }
  };

  const handleSubcategoryChange = (e) => {
    console.log("Subcategory changed to:", e.target.value);
    setSubcategory(e.target.value);
  };

  useEffect(() => {
    console.log("Current subcategory state:", subcategory);
  }, [subcategory]);

  const handleServiceChange = (e) => {
    const selectedTitle = e.target.value;
    setSelectedService(selectedTitle);
    const service = services.find((s) => s.title === selectedTitle);
    if (service) {
      setServiceDescription(service.description);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const resetForm = () => {
    const fileInput = document.getElementById("image");
    if (fileInput) fileInput.value = "";
    setImage(null);
    setSelectedService("");
    setServiceDescription("");
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://zamarsolutions.co.ke/Zamar/api/get_images.php"
      );
      let filtered = response.data.filter(
        (img) =>
          img.category === category &&
          (!showSubcategory || img.subcategory === subcategory)
      );

      if (category === "Services" && selectedService) {
        filtered = filtered.filter((img) => img.title === selectedService);
      }

      setUploadedImages(filtered);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (category === "Services") {
      fetchImages();
    }
  }, [selectedService]);

  const handleDelete = async (imageURL) => {
    setDeleteModal({ show: true, imageURL });
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        "https://zamarsolutions.co.ke/Zamar/index.php",
        {
          data: { image_URL: deleteModal.imageURL },
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        showToast("Image deleted successfully!", "success");
        fetchImages();
      }
    } catch (error) {
      console.error("Delete failed:", error);
      showToast("Error deleting image.", "error");
    } finally {
      setDeleteModal({ show: false, imageURL: null });
    }
  };

  const cancelDelete = () => {
    setDeleteModal({ show: false, imageURL: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("category", category);
      if (showSubcategory && subcategory) {
        console.log("Appending subcategory:", subcategory);
        formData.append("subcategory", subcategory);
      }
      if (image) {
        formData.append("image", image);
      }
      if (category === "Services") {
        formData.append("title", selectedService);
        formData.append("description", serviceDescription);
      }

      // Debug logging
      console.log("Category:", category);
      console.log("Subcategory:", subcategory);
      console.log("FormData contents:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post(
        "https://zamarsolutions.co.ke/Zamar/index.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload response:", response.data);
      if (response.status === 200) {
        showToast("Upload successful!", "success");
        resetForm();
        fetchImages();
      } else {
        showToast("Upload failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      showToast("Error uploading. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="upload-container">
      {deleteModal.show && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this image?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="confirm-button">
                Delete
              </button>
              <button onClick={cancelDelete} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h2>Upload an Image</h2>

      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          <div className="toast-message">{toast.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="Brand_Activations">Brand Activations</option>
            <option value="Branding">Branding</option>
            <option value="Vehicle_Branding">Vehicle Branding</option>
            <option value="Client">New Client</option>
            <option value="Services">Services</option>
            <option value="ThreeD">ThreeD</option>
          </select>
        </div>

        {category === "Brand_Activations" && (
          <div className="form-group">
            <label htmlFor="subcategory">Select Subcategory:</label>
            <select
              id="subcategory"
              value={subcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="Instore_Activation">Instore Activation</option>
              <option value="Experiential_Marketing">
                Experiential Marketing
              </option>
            </select>
          </div>
        )}
        {category === "Branding" && (
          <div className="form-group">
            <label htmlFor="subcategory">Select Subcategory:</label>
            <select
              id="subcategory"
              value={subcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="Instore_Branding">Instore Branding</option>
              <option value="Outdoor_Branding">Outdoor Branding</option>
              <option value="Free_Standing_Units">Free Standing Units</option>
            </select>
          </div>
        )}

        {category === "Services" && (
          <>
            <div className="form-group">
              <label htmlFor="service">Select Service:</label>
              <select
                id="service"
                value={selectedService}
                onChange={handleServiceChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Service Description:</label>
              <textarea
                id="description"
                disabled
                className="textarea"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                required
                rows="3"
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="image">Select Image:</label>
          <input type="file" id="image" onChange={handleImageChange} required />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
      </form>

      <h3>Uploaded Images</h3>
      <div className="image-grid">
        {uploadedImages.map((img, idx) => (
          <div key={idx} className="image-item">
            <img src={img.image_URL} alt="Uploaded" />
            <button
              onClick={() => handleDelete(img.image_URL)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("isAdmin");
          window.location.href = "/";
        }}
        className="button-logout"
      >
        Logout
      </button>
    </div>
  );
}

export default Admin;
