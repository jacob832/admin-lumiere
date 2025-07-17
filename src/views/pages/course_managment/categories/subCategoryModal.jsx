import React, { useState, useEffect } from "react";

const SubCategoriesModal = ({ categories, editingSubCategory }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parentId: "",
    thumbnailPreview: "",
    status: "Active", // Default status is "Active"
  });

  // Fill form when editingSubCategory changes
  useEffect(() => {
    if (editingSubCategory) {
      const parent = categories.find(
        (cat) => cat.category === editingSubCategory.category
      );
      setFormData({
        name: editingSubCategory.subcategory || "",
        description: editingSubCategory.description || "",
        parentId: parent?.id || "",
        thumbnailPreview: editingSubCategory.thumbnail || "",
        status: editingSubCategory.status || "Active", // Make sure the status is correctly populated
      });
    }
  }, [editingSubCategory, categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          thumbnailPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Add Subcategory Modal */}
      <div className="modal custom-modal fade" id="addsub_categories" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Sub Categories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Parent Category</label>
                  <select
                    className="form-control"
                    name="parentId"
                    value={formData.parentId}
                    onChange={handleChange}
                  >
                    <option value="">-- None (Top Level) --</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>

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
                    <div className="w-100">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <small className="text-muted">Recommended size: 200x200 pixels</small>
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
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

      {/* Edit Subcategory Modal */}
      <div className="modal custom-modal fade" id="editsub_categories" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Sub Categories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">Parent Category</label>
                  <select
                    className="form-control"
                    name="parentId"
                    value={formData.parentId}
                    onChange={handleChange}
                  >
                    <option value="">-- None (Top Level) --</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>

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
                    <div className="w-100">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <small className="text-muted">Recommended size: 200x200 pixels</small>
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
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
    </>
  );
};

export default SubCategoriesModal;
