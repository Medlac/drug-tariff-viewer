import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Drug } from "./api/drugs";
import { DRUGS } from "./api/drugs";
import { drugs } from "./api/PartVIIIAMar23.json";

const MONTHS: string[] = [
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

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Creating a drug list variable and setting it to DRUGS.
  // If you ever wanted to change druglist youd use the setDruglist method
  const [drugList, setDruglist] = useState<Drug[]>(DRUGS);

  // Date
  // This is a horrible way to get date stuff. Dates in javascript are known to be
  // a pain in the arse. Typically you would use a date package in your project to help
  // make using dates easier e.g. https://date-fns.org/
  // New Date() returns a new Date object - of todays date
  const todaysDate = new Date();
  // getMonth() returns the month 0-11 of the current date
  // MONTHS is an array of months 0-11 MONTHS[] displays the month via getMONTH of the current date.
  let monthName = MONTHS[todaysDate.getMonth()];

  /**
   * Ive created this method. What this is doing is calling your `drugs` api
   * endpoint. Whenever the input is changed it calls this getDrugs method.
   * If you look in the google console you will see the drugs being outputted out everytime.
   *
   * Be good to try and remove the hardcode drugs variable in this file and just try and use
   * the api route. Be tricky though because you might get some weird loading state whilst
   * the front end (client) is waiting for a response from the backend (api).
   */
  const getDrugs = async () => {
    const response = await fetch("/api/drugs").then((res) => res.json());
    console.log(response);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Drug Tariff Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This isnt right. Broken on mobile */}
      {/* <nav className="flex space-x-96 py-8 text-2xl justify-center shadow-md w-screen ">
        <div className="pr-96 font-bold text-blue-600">
          <h2>🔎 Drug Tariff Viewer</h2>
        </div>
        <div className="flex space-x-4 font-bold">
          <div>DT Specials</div>
          <div>Blacklist</div>
          <div>Watchlist</div>
        </div>
      </nav> */}

      <main className="flex w-full flex-1 flex-col items-center justify-center  text-center mt-20">
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
            // You need to use the special character in a string to ourput a variable ` ${variable} `
            placeholder={`Search through ${monthName}'s drug tariff...`}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // Get drugs calling the api every time this input is changed.
              // getDrugs();
            }}
          ></input>
        </div>
        <div
          id="results"
          className=" flex flex-col mb-16  mt-8 w-8/12 h-96 border shadow-md"
        >
          <div className=" grid grid-cols-5 sticky border-b justify-center w-full shadow py-1 font-medium">
            <h4 className="border-r col-span-2">Medicine</h4>
            <h4 className="border-r">Pack Size</h4>
            <h4 className="border-r max-[390px]:hidden">Category</h4>
            <h4>Basic Price</h4>
          </div>
          <div className="overflow-scroll w-full ">
            {/* Now using the dugs json file as the data set to be filtered through. */}
            {drugList
              .filter((drug) => {
                if (searchTerm == "") {
                  return drug;
                } else if (
                  drug.Medicine.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return drug;
                }
              })
              .map((drug, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 even:bg-gray-100 py-1"
                >
                  <div className="col-span-2">{drug.Medicine}</div>
                  <div>{drug.PackSize}</div>
                  <div className="max-[390px]:hidden">
                    {drug.DrugTariffCategory}
                  </div>
                  <div>{drug.BasicPrice}</div>
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
