// app/legals/[slug]/page.jsx
import { fetchData } from "@/appwrite/data";
import ClientLegalContent from "@/modules/components/ClientLegalContent"; // create this
import React from "react";

const Page = async ({ params }) => {
  const data = await fetchData();
  const legalData = data?.LegalsData ?? [];
  const filteredData = legalData.find((doc) => doc.id === params.slug);

  return <ClientLegalContent data={filteredData} />;
};

export default Page;
