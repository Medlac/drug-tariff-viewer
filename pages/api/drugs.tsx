// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * - Types always start with a capital letter
 * - Ive renamed to Drug as its the type for a single drug
 * - Notice how Ive added an `export` keyword. This means that any other
 *   file in your project can import this type. Look at index.tsx which will now be importing it.
 * - Some people export like this. Whilst you can also put your types into a seperate file. Up to you.
 */
export interface Drug {
  Medicine: string;
  PackSize: string;
  DrugTariffCategory: string;
  BasicPrice: string;
}

/**
 * - As a pattern I usually capitalise hardcoded static data (dont have to like)
 * - Notice how Ive added the type here. It was missing. Its a Drug Array. So a list of drugs.
 */
export const DRUGS: Drug[] = [
  {
    Medicine: "Amlodipine 5mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "40",
  },
  {
    Medicine: "Amlodipine 10mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "80",
  },
  {
    Medicine: "Bisoprolol 1.25mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "20",
  },
  {
    Medicine: "Bisoprolol 2.5mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "40",
  },
  {
    Medicine: "Candesartan 4mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "180",
  },
  {
    Medicine: "Candesartan 8mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "360",
  },
  {
    Medicine: "Amlodipine 5mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "40",
  },
  {
    Medicine: "Amlodipine 10mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "80",
  },
  {
    Medicine: "Bisoprolol 1.25mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "20",
  },
  {
    Medicine: "Bisoprolol 2.5mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "40",
  },
  {
    Medicine: "Candesartan 4mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "180",
  },
  {
    Medicine: "Candesartan 8mg",
    PackSize: "28",
    DrugTariffCategory: "M",
    BasicPrice: "360",
  },
];

/**
 * This is your drugs API handler. So you have your front end code (index.ts) and what we are gonna do
 * is call this api to return your list of drugs. This may be confusing to start with so apologies if so.
 * But this is a typical pattern. If you look at the pages folder you have /api in this folder youd add different
 * types of APIs that are getting you data. You might have a User API or Email API. It just seperates our your code.
 * Its confusing to start with as Next.js has the idea of your front end and back end (api) in the same project.
 * Its so nice to use because of this but might not make loads of sense to start with.
 *
 * @param res The response you are returning from the API (in this case a list of drugs)
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Drug[]>
) {
  res.status(200).json(DRUGS);
}
