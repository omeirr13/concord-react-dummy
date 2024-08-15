// src/App.js
import React, { useState } from 'react';
import View from './components/View/View';
import ColumnSettings from './components/ColumnSettings/ColumnSettings';
import ViewsHead from './components/ViewsHead/ViewsHead';

const availableColumns = [{ attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }]

const allViewsObj = {
  "All Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }
  ],
  "My Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }
  ],
  "My Recently Assigned Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }
  ],
  "Deals Created This Month": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false }
  ],
  "Won Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }
  ],
  "Lost Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false },
    { attribute: "status", order: 5, hidden: false },
    { attribute: "owner", order: 6, hidden: false }
  ],
  "Open Deals": [
    { attribute: "deal_name", order: 1, hidden: false },
    { attribute: "stage", order: 2, hidden: false },
    { attribute: "amount", order: 3, hidden: false },
    { attribute: "expected_close_date", order: 4, hidden: false }
  ]
};



const data = [
  {
    deal_name: "Heaney, Bartoletti and Stokes",
    stage: "Proposal Made",
    amount: "$4,457.00",
    expected_close_date: "September 13, 2024",
    status: "Open",
    owner: "Stacey Rath",
    ownerLogo: "https://via.placeholder.com/20",
    dummy: "dummy1"
  },
  {
    deal_name: "Cassin-Gottlieb",
    stage: "Presentation Scheduled",
    amount: "$5,418.00",
    expected_close_date: "October 8, 2024",
    status: "Open",
    owner: "Stacey Rath",
    ownerLogo: "https://via.placeholder.com/20",
    dummy: "dummy2"
  },
];

function App() {
  const [allViews, setAllViews] = useState(allViewsObj);
  const [selectedView, setSelectedView] = useState(Object.keys(allViews)[0])
  const [selectedColumns, setSelectedColumns] = useState(allViews[selectedView]);

  const handleViewChange = (viewName) => {
    setSelectedView(viewName);
    setSelectedColumns(allViews[viewName]);
  };

  const handleColumnChange = (newColumns) => {
    // Adjust the order of newColumns to ensure it starts from 1 and is sequential
    const orderedColumns = newColumns.map((col, index) => ({
      ...col,
      order: index + 1
    }));

    setAllViews(prevViews => ({
      ...prevViews,
      [selectedView]: orderedColumns
    }));
  };

  return (
    <div className="App">
      <ViewsHead
        allViews={allViews}
        setView={handleViewChange}
        selectedView={selectedView}
      />
      <ColumnSettings
        selectedView={selectedView}
        availableColumns={availableColumns}
        selectedColumns={selectedColumns}
        setSelectedColumns={setSelectedColumns}
        onColumnChange={handleColumnChange}
      />
      <View data={data} selectedColumns={selectedColumns} />
      {/* <View data={data} selectedColumns={selectedColumns.map((col)=>col.attribute)} /> */}
    </div>
  );
}

export default App;
