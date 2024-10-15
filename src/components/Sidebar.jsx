// import React, { useState } from 'react';

// const Sidebar = ({ onSelectItem }) => {
//   const [expanded, setExpanded] = useState({});

//   const toggleExpand = (key) => {
//     setExpanded((prevState) => ({ ...prevState, [key]: !prevState[key] }));
//   };

//   const data = {
//     godowns: [
//       {
//         name: 'Main Warehouse',
//         subLocations: [
//           {
//             name: 'Electronics Section',
//             items: [
//               { name: 'Laptop', details: 'High-performance laptop', quantity: 50 },
//               { name: 'Smartphone', details: 'Latest smartphone model', quantity: 100 },
//             ],
//           },
//           {
//             name: 'Tools Section',
//             items: [
//               { name: 'Hammer', details: 'Heavy-duty hammer', quantity: 75 },
//               { name: 'Screwdriver', details: 'Precision screwdriver', quantity: 150 },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Secondary Warehouse',
//         subLocations: [
//           {
//             name: 'Toys Section',
//             items: [
//               { name: 'Action Figure', details: 'Popular action figure', quantity: 200 },
//               { name: 'Puzzle', details: '500-piece puzzle', quantity: 150 },
//             ],
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="sidebar">
//       {data.godowns.map((godown, idx) => (
//         <div key={idx}>
//           <h3 onClick={() => toggleExpand(godown.name)}>{godown.name}</h3>
//           {expanded[godown.name] && (
//             <ul>
//               {godown.subLocations.map((subLocation, subIdx) => (
//                 <li key={subIdx}>
//                   <span onClick={() => toggleExpand(subLocation.name)}>{subLocation.name}</span>
//                   {expanded[subLocation.name] && (
//                     <ul>
//                       {subLocation.items.map((item, itemIdx) => (
//                         <li key={itemIdx} onClick={() => onSelectItem(item)}>
//                           {item.name}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useEffect, useState } from 'react';
// import godownsdata from "../data/godowns.json";
// import itemsdata from "../data/items.json";

// const Sidebar = ({ onSelectItem }) => {
//   const [godowns, setGodowns] = useState([]);
//   const [items, setItems] = useState([]);
//   const [expanded, setExpanded] = useState({});

//   useEffect(() => {
//     // Fetch godowns data
//     fetch('../data/godowns.json')
//       .then(response => response.json())
//       .then(data => setGodowns(data));

//     // Fetch items data
//     fetch('../data/items.json')
//       .then(response => response.json())
//       .then(data => setItems(data));
//   }, []);

//   const toggleExpand = (key) => {
//     setExpanded(prevState => ({ ...prevState, [key]: !prevState[key] }));
//   };

//   // Create a hierarchy based on parent-child relationships
//   const getSubLocations = (parentId) => {
//     return godowns.filter(godown => godown.parent_godown === parentId);
//   };

//   const getItemsInGodown = (godownId) => {
//     return items.filter(item => item.godown_id === godownId);
//   };

//   const renderGodowns = (parentId = null) => {
//     const subLocations = getSubLocations(parentId);
//     return subLocations.map(godown => (
//       <li key={godown.id}>
//         <span onClick={() => toggleExpand(godown.id)}>
//           {godown.name} {expanded[godown.id] ? '-' : '+'}
//         </span>
//         {expanded[godown.id] && (
//           <ul>
//             {/* Render sub-locations */}
//             {renderGodowns(godown.id)}
//             {/* Render items in the godown */}
//             {getItemsInGodown(godown.id).map(item => (
//               <li key={item.item_id} onClick={() => onSelectItem(item)}>
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ));
//   };

//   return (
//     <div className="sidebar">
//       <ul>
//         {renderGodowns()}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import godownsdata from '../data/godowns.json';
import itemsdata from '../data/items.json';

const Sidebar = ({ onSelectItem }) => {
  const [godowns, setGodowns] = useState([]);
  const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    // Set godowns and items from the imported JSON data
    setGodowns(godownsdata);
    setItems(itemsdata);
  }, []);

  const toggleExpand = (key) => {
    setExpanded(prevState => ({ ...prevState, [key]: !prevState[key] }));
  };

  // Create a hierarchy based on parent-child relationships
  const getSubLocations = (parentId) => {
    return godowns.filter(godown => godown.parent_godown === parentId);
  };

  const getItemsInGodown = (godownId) => {
    return items.filter(item => item.godown_id === godownId);
  };

  const renderGodowns = (parentId = null) => {
    const subLocations = getSubLocations(parentId);
    return subLocations.map(godown => (
      <li key={godown.id}>
        <span onClick={() => toggleExpand(godown.id)}>
          {godown.name} {expanded[godown.id] ? '-' : '+'}
        </span>
        {expanded[godown.id] && (
          <ul>
            {/* Render sub-locations */}
            {renderGodowns(godown.id)}
            {/* Render items in the godown */}
            {getItemsInGodown(godown.id).map(item => (
              <li key={item.item_id} onClick={() => onSelectItem(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="sidebar">
      <ul>
        {renderGodowns()}
      </ul>
    </div>
  );
};

export default Sidebar;
