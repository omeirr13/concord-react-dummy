// src/components/ColumnSettings/ColumnSettings.js
import React from 'react';

const ColumnSettings = ({ availableColumns, selectedColumns, setSelectedColumns, onColumnChange }) => {
  const handleColumnToggle = (attribute) => {
    const columnExists = selectedColumns.some((col) => col.attribute === attribute);

    if (columnExists) {
      // Remove column if already selected
      const updatedColumns = selectedColumns.filter((col) => col.attribute !== attribute);
      setSelectedColumns(updatedColumns);
      onColumnChange(updatedColumns);
    } else {
      // Add column if not selected
      const columnDetails = availableColumns.find((col) => col.attribute === attribute);
      if (columnDetails) {
        const updatedColumns = [...selectedColumns, columnDetails];
        setSelectedColumns(updatedColumns);
        onColumnChange(updatedColumns);
      }
    }
  };

  return (
    <div className="column-settings">
      <h3>Columns</h3>
      {availableColumns.map((column) => (
        <label key={column.attribute}>
          <input
            type="checkbox"
            checked={selectedColumns.some((col) => col.attribute === column.attribute)}
            onChange={() => handleColumnToggle(column.attribute)}
          />
          {column.attribute.replace(/_/g, ' ')} {/* Display the attribute name in a readable format */}
        </label>
      ))}
    </div>
  );
};

export default ColumnSettings;
