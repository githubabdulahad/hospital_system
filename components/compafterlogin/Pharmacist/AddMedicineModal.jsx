import { FaSave , FaPlus , FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function AddMedicineModal  ({ isOpen, onClose, onSubmit })  {
  const [form, setForm] = useState({
    name: "",
    medicalCategory: "",
    description: "",
    price: "",
    totalQuantity: "",
    soldQuantity: "0",
    manufacturingCompany: "",
    state: "Available",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.medicalCategory.trim() ||
      !form.price ||
      !form.totalQuantity
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const newMedicine = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
      totalQuantity: parseInt(form.totalQuantity),
      soldQuantity: parseInt(form.soldQuantity),
    };

    onSubmit(newMedicine);
    setForm({
      name: "",
      medicalCategory: "",
      description: "",
      price: "",
      totalQuantity: "",
      soldQuantity: "0",
      manufacturingCompany: "",
      state: "Available",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FaPlus className="w-5 h-5 text-blue-500" />
            Add New Medicine
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medicine Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter medicine name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={form.medicalCategory}
                onChange={(e) =>
                  setForm({ ...form, medicalCategory: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select category</option>
                <option value="Antibiotics">Antibiotics</option>
                <option value="Pain Relief">Pain Relief</option>
                <option value="Cardiovascular">Cardiovascular</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Gastrointestinal">Gastrointestinal</option>
                <option value="Respiratory">Respiratory</option>
                <option value="Vitamins">Vitamins</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price *
              </label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter price"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Quantity *
              </label>
              <input
                type="number"
                value={form.totalQuantity}
                onChange={(e) =>
                  setForm({ ...form, totalQuantity: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter total quantity"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sold Quantity
              </label>
              <input
                type="number"
                value={form.soldQuantity}
                onChange={(e) =>
                  setForm({ ...form, soldQuantity: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter sold quantity"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Manufacturing Company
              </label>
              <input
                type="text"
                value={form.manufacturingCompany}
                onChange={(e) =>
                  setForm({ ...form, manufacturingCompany: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter company name"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter medicine description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Available">Available</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0B2443] text-white hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaSave className="w-4 h-4" />
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};