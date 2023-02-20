import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { drugList } from "./drugs";
import { useEffect, useState } from "react";
import { useRef } from "react";

console.log(drugList);

// Attempting to make the placeholder say searching for 'current months' drug tariff
const d = new Date();
let m = d.getMonth();
const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let todaysDate = monthNames[m];

console.log(todaysDate);

// Creating the search bar functionality
// const [searchTerm, setSearchTerm] = useState<string>("");
// {drugList
//   .filter((drug) => {
//     if (searchTerm == "") {
//       return drug;
//     } else if (
//       drug.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       return drug;
//     }
//   })
//   .map((drug, index) => (
//     <div
//       key={index}
//       className="grid grid-cols-4 even:bg-gray-100 py-1"
//     >
//       <div>{drug.name}</div>
//       <div>{drug.packSize}</div>
//       <div>{drug.category}</div>
//       <div>{drug.price}</div>
//     </div>

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Drug Tariff Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex space-x-96 py-8 text-2xl justify-center shadow-md w-screen mb-20">
        <div className="pr-96 font-bold text-blue-600">
          <h2>🔎 Drug Tariff Viewer</h2>
        </div>
        <div className="flex space-x-4 font-bold">
          <div>About</div>
          <div>Log In</div>
          <div>Placeholder</div>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the <a className="text-blue-600">Drug Tariff Viewer!</a>
        </h1>
        <p className="mt-6 text-2xl">Get started by searching for a drug!</p>

        <div
          id="searchBar"
          className="mt-6 flex w-screen items-center justify-center  "
        >
          <input
            id="search"
            className="py-1 justify-center text-center text-xl border-2 border-slate-300 rounded-md w-6/12 outline-none"
            type="search"
            placeholder="&#x1F50D; Search through {todaysDate}'s drug tariff..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </div>
        <div
          id="results"
          className=" flex flex-col mb-16  mt-16 w-8/12 h-56 border shadow-md"
        >
          <div className=" grid grid-cols-4 sticky border-b justify-center w-full shadow py-1 font-medium">
            <h4 className="border-r">Medicine</h4>
            <h4 className="border-r">Pack Size</h4>
            <h4 className="border-r">Category</h4>
            <h4>Basic Price</h4>
          </div>
          <div className="overflow-scroll w-full">
            {drugList
              .filter((drug) => {
                if (searchTerm == "") {
                  return drug;
                } else if (
                  drug.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return drug;
                }
              })
              .map((drug, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 even:bg-gray-100 py-1"
                >
                  <div>{drug.name}</div>
                  <div>{drug.packSize}</div>
                  <div>{drug.category}</div>
                  <div>{drug.price}</div>
                </div>
              ))}
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Produced by Callum Armstrong 2023 &copy;
      </footer>
    </div>
  );
};

export default Home;
