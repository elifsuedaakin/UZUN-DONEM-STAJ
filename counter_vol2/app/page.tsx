"use client"

import { useState } from "react"
import { useCounterStore } from "@/store/useCounterStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useTheme } from "next-themes"
import { Moon, Sun, RotateCcw, Plus, Minus } from "lucide-react" //ikonları hazır bir kütüphaneden içe aktarıyoruz 

export default function Home() {
  const { count, isHydrated, increase, decrease, reset, setCount } = useCounterStore() //zustand store bağlantısı 
  const { setTheme, theme } = useTheme() //dark/light tema kontrolü için 

  const [inputValue, setInputValue] = useState<number>(0)

  const handleUpdate = () => { //inputa yazılan değeri sayaca aktarıyoruz 
    setCount(inputValue)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-background transition-colors duration-300">

      {/* Theme butonu   */}
      <div className="absolute top-5 right-5">
        <Button
          variant="outline" //aynı componentin farklı görünümüünü seçmek için shadndan variant =outline kullanıyoruz 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>

      <h1 className="text-4xl font-bold tracking-tight" >Counter Vol 2</h1>
   
      {/* Sayaç */}
      <div className="text-9xl font-black">
        {isHydrated ? count : <Skeleton className="h-24 w-32" />}
      </div>

      {/* Butonlar */}
      <div className="flex gap-4">
        <Button variant="outline" size="lg" onClick={decrease}>
          <Minus />
        </Button>

        <Button
          variant="destructive"
          size="lg"
          onClick={() => {
            reset()
            setInputValue(0)
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>

        <Button size="lg" onClick={increase}>
          <Plus />
        </Button>
      </div>

      {/* Input alanı  */}
      <div className="flex flex-col items-center gap-3 p-6 bg-secondary/20 rounded-xl border border-border">
        <p className="text-sm font-medium opacity-70">SET COUNT</p>

        <div className="flex gap-2">
          <Input
            type="number"
            className="w-32 text-center text-lg font-bold"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />

          <Button onClick={handleUpdate} variant="secondary">
            SET
          </Button>
        </div>
      </div>
    </main>
  )
}