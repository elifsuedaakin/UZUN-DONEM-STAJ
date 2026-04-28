"use client";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number | "">(0); // Başlangıç artık 0

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  // Resetlendiğinde hem sayacı hem inputu 0 yapıyoruz 
  const reset = () => {
    setCount(0);
    setInputValue(0);
  };

  const handleSetCount = () => {
    if (inputValue !== "") {
      setCount(inputValue);
      // Set ettikten sonra inputu temizlemek için 
    }
  };

  
  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(0); // Boş bırakıp çıkarsa 0 geri gelir
    }
  };

  return (
    <main className="container">
      <h1 className="title">Counter Project</h1>
      <div className="count-display">{count}</div>
      <div className="input-card">
        <p>bir sayı girin ve butona basın : </p>
        <div className="input-area">
          <input
            type="number"
            value={inputValue}
            // Artık placeholder'a gerek yok çünkü hep bir değer olacak
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val === "" ? "" : Number(val));
            }}
            onBlur={handleBlur} // Odak kaybolduğunda çalışır
            className="number-input"
          />
          <button type="button" onClick={handleSetCount} className="set-btn">
            SET COUNT
          </button>
        </div>
      </div>
      
      <div className="action-group">
        <button type="button" onClick={decrement} className="action-btn">Azalt(-)</button>
        <button type="button" onClick={reset} className="action-btn">Resetle</button>
        <button type="button" onClick={increment} className="action-btn">Arttır(+)</button>
      </div>
    </main>
  );
}
//test