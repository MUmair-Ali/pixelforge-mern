import { memo, useState } from "react";

const CrudTable = memo(({ title, description, data, columns, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  let i = 1;

  const handleEdit = (row) => {
    setEditingId(row._id);
    setEditFormData({ ...row });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleUpdate = async (id) => {
    try {
      await onUpdate(id, editFormData);
      setEditingId(null);
      setEditFormData({});
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <main className="admin-content">
      <div className="admin-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="users-table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>#</th>
              {columns.map((col) => (
                <th key={col.accessor}>{col.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row._id}>
                <td>{i++}</td>
                {columns.map((col) => (
                  <td key={col.accessor}>
                    {editingId === row._id ? (
                      col.type === "select" ? (
                        <select
                          name={col.accessor}
                          value={editFormData[col.accessor]}
                          onChange={handleInputChange}
                          className="edit-select"
                        >
                          {col.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={col.type}
                          name={col.accessor}
                          value={editFormData[col.accessor] || ""}
                          onChange={handleInputChange}
                          className="edit-input"
                        />
                      )
                    ) : (
                      col.accessor === 'isAdmin'
                      ? row.isAdmin ? "Admin" : "User"
                      : row[col.accessor]?.toString()
                    )}
                  </td>
                ))}
                <td>
                  <div className="btn-group">
                    {editingId === row._id ? (
                      <>
                        <button
                          className="btn btn-update"
                          onClick={() => handleUpdate(row._id)}
                        >
                          <span>Update</span>
                        </button>
                        <button className="btn btn-cancel" onClick={handleCancel}>
                          <span>Cancel</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(row)}
                        >
                          <span>Edit</span>
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => onDelete(row._id)}
                        >
                          <span>Delete</span>
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
});

export default CrudTable;
