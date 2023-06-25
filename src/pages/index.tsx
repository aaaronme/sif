import type { Items } from "./api/getItems";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
      .get<Items>("http://localhost:3000/api/getItems", {})
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sunlabs Frontend Interview
          </h1>
          <div className="h-96 w-96 bg-white">
            {/* 
            
            Build Desin here

            */}
          </div>
        </div>
      </main>
    </>
  );
}
