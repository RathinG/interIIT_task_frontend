import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ItemDetails from './components/ItemDetails';
import "../src/styles/styles.css";
import React, {useState} from 'react';



function App() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="App">
       <Sidebar onSelectItem={handleSelectItem} />
       <ItemDetails selectedItem={selectedItem} />

    </div>
  );
}

export default App;
