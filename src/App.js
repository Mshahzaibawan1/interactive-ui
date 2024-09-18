import React, { useState } from 'react';
import './App.css';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleModal = () => setShowModal(!showModal);
  const handleSliderChange = (e) => setSliderValue(e.target.value);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="App">
      <h1>Interactive UI Components</h1>

      { }
      <div>
        <h2>Slider Component</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          aria-label="slider"
        />
        <p>Slider Value: {sliderValue}</p>
      </div>

      { }
      <div>
        <h2>Modal Component</h2>
        <button onClick={toggleModal} aria-haspopup="dialog">
          {showModal ? "Close Modal" : "Open Modal"}
        </button>
        {showModal && (
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-content">
              <h3>Modal Content</h3>
              <p>This is a simple modal window.</p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}
      </div>

      { }
      <div>
        <h2>Accordion Component</h2>
        {["Item 1", "Item 2", "Item 3"].map((item, index) => (
          <div key={index}>
            <button
              aria-expanded={activeAccordion === index}
              onClick={() => toggleAccordion(index)}
            >
              {item}
            </button>
            {activeAccordion === index && (
              <div className="accordion-content">
                <p>This is the content for {item}.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;