// src/Table.js
import React from 'react';
import './View.css';

const View = ({ data, selectedColumns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {selectedColumns
            .filter(column => !column.hidden) // Exclude hidden columns
            .map(column => (
              <th key={column.attribute}>
                {column.attribute.replace(/_/g, ' ').toUpperCase()} {/* Format column names */}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {selectedColumns
              .filter(column => !column.hidden) // Exclude hidden columns
              .map(column => {
                const value = row[attribute];
                const attribute = column.attribute.replace(/_/g, ''); // Adjust attribute key
                return (
                  <td key={column.attribute}>
                    {attribute === 'status' ? (
                      <span className={`status ${value.toLowerCase()}`}>{value}</span>
                    ) : attribute === 'owner' ? (
                      <div className="owner">
                        <img src={row.ownerLogo} alt="Owner" />
                        <span>{value}</span>
                      </div>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default View;
