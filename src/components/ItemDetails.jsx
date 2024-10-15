// import React from 'react';

// const ItemDetails = ({ selectedItem }) => {
//   if (!selectedItem) {
//     return <div className="item-details">Select an item to see the details</div>;
//   }

//   return (
//     <div className="item-details">
//       <h2>{selectedItem.name}</h2>
//       <p>{selectedItem.details}</p>
//       <p>Quantity: {selectedItem.quantity}</p>
//     </div>
//   );
// };

// export default ItemDetails;

import React from 'react';

const ItemDetails = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div className="item-details">Select an item to see the details</div>;
  }

  return (
    <div className="item-details">
      <h2>{selectedItem.name}</h2>
      <img src={selectedItem.image_url} alt={selectedItem.name} width="200" />
      <p><strong>Category:</strong> {selectedItem.category}</p>
      <p><strong>Price:</strong> ${selectedItem.price}</p>
      <p><strong>Brand:</strong> {selectedItem.brand}</p>
      <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
      <p><strong>Status:</strong> {selectedItem.status}</p>
      {selectedItem.attributes && (
        <>
          <p><strong>Type:</strong> {selectedItem.attributes.type}</p>
          <p><strong>Material:</strong> {selectedItem.attributes.material}</p>
          <p><strong>Warranty Years:</strong> {selectedItem.attributes.warranty_years}</p>
        </>
      )}
    </div>
  );
};

export default ItemDetails;

