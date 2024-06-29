"use client";

import PageTitle from "@/components/PageTitle";
import React from "react";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export default function page() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      {/* <DataTable columns={} data={} /> */}
    </div>
  );
}
