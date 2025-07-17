import React, { useState, useEffect } from "react";
import { useCreateCategoryMutation } from "./categoriesApi"; 
const CategoriesModal = ({ categories = [], selectedCategory }) => {
  const [formData, setFormData] = useState({
    name: "",
    parentId: "",
    description: "",
    tags: "",
    thumbnail: null,
    thumbnailPreview: "",
    status: "Active",
  });
  const [createCategory, { isLoading, isError, error }] = useCreateCategoryMutation();

  const [errors, setErrors] = useState({});
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  console.log(selectedCategory)
  useEffect(() => {
    // If selectedCategory is provided, populate the form for editing
    if (selectedCategory) {
      setFormData({
        name: selectedCategory.category
 || "",
        parentId: selectedCategory.parentId || "",
        description: selectedCategory.description || "",
        tags: selectedCategory.tags || "",
        thumbnail: null, // Thumbnail is not re-set from URL, handled by new file selection
        thumbnailPreview: selectedCategory.thumbnailUrl || "",
        status: selectedCategory.status || "Active",
      });

      // Populate tags array for the tag input component
      if (selectedCategory.tags) {
        setTags(selectedCategory.tags.split(",").map(tag => tag.trim()));
      } else {
        setTags([]); // Ensure tags are empty if no tags exist
      }
    } else {
      // If no selectedCategory (for "Add Categories"), reset the form
      setFormData({
        name: "", // Ensure name is empty for new category
        parentId: "",
        description: "",
        tags: "",
        thumbnail: null,
        thumbnailPreview: "",
        status: "Active",
      });
      setTags([]); // Clear tags for new category
    }
  }, [selectedCategory]); 
  useEffect(() => {
    const addModalElement = document.getElementById('add_categories');

    // دالة إعادة تعيين النموذج
    const resetFormForAdd = () => {
      setFormData({
        name: "",
        parentId: "",
        description: "",
        tags: "",
        thumbnail: null,
        thumbnailPreview: "",
        status: "Active",
      });
      setTags([]);
      setErrors({}); // مسح الأخطاء أيضًا
      setIsDuplicate(false); // مسح حالة التكرار
      setTagInput(""); // مسح مدخل العلامة المؤقت
    };

    if (addModalElement) {
      // إضافة مستمع الحدث لـ `show.bs.modal`
      // هذا الحدث يتم إطلاقه قبل أن يظهر المودال
      addModalElement.addEventListener('show.bs.modal', resetFormForAdd);
    }

    // تنظيف المستمع عند إلغاء تحميل المكون
    return () => {
      if (addModalElement) {
        addModalElement.removeEventListener('show.bs.modal', resetFormForAdd);
      }
    };
  }, []); // [] تعني أن هذا التأثير يتم تشغيله مرة واحدة فقط 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          thumbnail: file,
          thumbnailPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };
  
  const handleTagKeyDown = (e) => {
    if (['Enter', ' ', ','].includes(e.key)) {  // Add ' ' (space) as a valid trigger
      e.preventDefault();
      addTag();
    } else if (e.key === 'Backspace' && !tagInput) {  // If Backspace and input is empty
      e.preventDefault();
      removeLastTag();
    }
  };
  
  const addTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags((prevTags) => {
        const updatedTags = [...prevTags, newTag];
        setFormData(prev => ({
          ...prev,
          tags: updatedTags.join(', ')
        }));
        return updatedTags;
      });
    }
    setTagInput(""); // Clear input after adding tag
  };
  
  const removeTag = (index) => {
    setTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags.splice(index, 1);
      setFormData(prev => ({
        ...prev,
        tags: updatedTags.join(', ')
      }));
      return updatedTags;
    });
  };
  
  const removeLastTag = () => {
    setTags((prevTags) => {
      const updatedTags = prevTags.slice(0, -1);  // Remove the last tag
      setFormData(prev => ({
        ...prev,
        tags: updatedTags.join(', ')
      }));
      return updatedTags;
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Category name is required";
    } else if (isDuplicate) {
      newErrors.name = "Category name already exists";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      // if (formData.thumbnail) formDataToSend.append("category_image", formData.thumbnail);
      // if (formData.tags) formDataToSend.append("tags", formData.tags); // already a comma-separated string
      formDataToSend.append("status", formData.status);

      const result = await createCategory(formDataToSend).unwrap();
  
      console.log("Created:", result);
      // Optionally: close modal, reset form, etc.
    } catch (err) {
      console.error("Creation failed:", err);
    }
  };
  

  return (
    <>
      {/* Add Categories Modal */}
      <div className="modal custom-modal fade" id="add_categories" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Categories</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Category Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Category Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                  {isDuplicate && !errors.name && (
                    <div className="text-warning">Category name already exists</div>
                  )}
                </div>

                {/* Description */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                {/* Tags/Keywords */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Tags/Keywords</label>
                  <div className="tags-input-container">
                    {tags.map((tag, index) => (
                      <div key={index} className="tag-item">
                        <span>{tag}</span>
                        <button 
                          type="button"
                          className="tag-remove"
                          onClick={() => removeTag(index)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                    <input
                      className="form-control"
                      type="text"
                      value={tagInput}
                      onChange={handleTagInputChange}
                      onKeyDown={handleTagKeyDown}
                      placeholder="Type and press Enter to add tags"
                    />
                  </div>
                  <small className="text-muted">Press Enter or Tab to add tags</small>
                </div>

                {/* Thumbnail/Icon - Now with consistent width */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Thumbnail/Icon</label>
                  <div className="d-flex align-items-center">
                    {formData.thumbnailPreview && (
                      <div className="me-3">
                        <img 
                          src={formData.thumbnailPreview} 
                          alt="Thumbnail preview" 
                          className="img-thumbnail" 
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                    )}
                    <div className="w-100"> {/* Added w-100 to match other inputs */}
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ width: "100%" }} // Ensure full width
                      />
                      <small className="text-muted">Recommended size: 200x200 pixels</small>
                    </div>
                  </div>
                </div>
                {/* Status Field */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Categories Modal */}
      <div className="modal custom-modal fade" id="edit_categories" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Categories</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Category Name */}
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Category Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    type="text"
                    name="name"
                    defaultValue={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Parent Category */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Parent Category</label>
                  <select
                    className="form-control"
                    name="parentId"
                    defaultValue=""
                    onChange={handleChange}
                  >
                    <option value="">-- None (Top Level) --</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    defaultValue="Computer hardware components and accessories"
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                {/* Tags/Keywords */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Tags/Keywords</label>
                  <input
                    className="form-control"
                    type="text"
                    name="tags"
                    defaultValue="hardware components computer parts"
                    onChange={handleChange}
                  />
                </div>

                {/* Thumbnail/Icon - Now with consistent width */}
                <div className="input-block mb-3">
                  <label className="col-form-label">Thumbnail/Icon</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ width: "100%" }} // Ensure full width
                  />
                </div>

                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default CategoriesModal;