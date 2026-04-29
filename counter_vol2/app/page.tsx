"use client"

import { useState } from "react"
import { useCounterStore } from "@/store/useCounterStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Moon, Sun, RotateCcw, Plus, Minus } from "lucide-react"

export default function Home() {
  const { count, increase, decrease, reset, setCount } = useCounterStore()//zustanddan sayı bilgisi ve fonksiyonalrı çekiyoruz
  const { setTheme, theme } = useTheme()//mevcut temamızı ve değiştirme fonksiyonunu alıyoruz
  
  //Beyindeki (Zustand) güncel sayı neyse, kutu onunla başlar
  const [inputValue, setInputValue] = useState<number | "">(count)

  //  Odak kaybolunca boşsa 0'a çekmek için 
  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(0)
    }
  }

  // 3. SET butonu tıklandığında hem store'u hem yerel state'i güncellemek için
  const handleUpdate = () => {
    if (inputValue !== "") {
      setCount(inputValue)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-background transition-colors duration-300">
      { }
      <div className="absolute top-5 right-5">
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      <h1 className="text-4xl font-bold tracking-tight">Counter Vol 2</h1> 
      <div className="text-9xl font-black">{count}</div>

      {/* Kontrol Butonları */}
      <div className="flex gap-4">
        <Button variant="outline" size="lg" onClick={decrease}><Minus /></Button>
        <Button variant="destructive" size="lg" onClick={() => {
            reset(); // Zustand'ı sıfırla
            setInputValue(0); // Yerel inputu sıfırla (resetlenince her ıkı alanda sıfırlansın diye)
          }}>
          <RotateCcw className="mr-2 h-4 w-4" /> Reset
        </Button>
        <Button size="lg" onClick={increase}><Plus /></Button>
      </div>

      {/* input Alanı */}
      <div className="flex flex-col items-center gap-3 p-6 bg-secondary/20 rounded-xl border border-border">
        <p className="text-sm font-medium opacity-70">SET COUNT</p>
        <div className="flex gap-2">
          <Input 
            type="number"
            className="w-32 text-center text-lg font-bold"
            // useEffect yerine doğrudan inputValue'yu bağlıyoruz
            value={inputValue} 
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val === "" ? "" : Number(val));
            }}
            onBlur={handleBlur}
          />
          <Button onClick={handleUpdate} variant="secondary">SET</Button>
        </div>
      </div>
    </main>
  )
}