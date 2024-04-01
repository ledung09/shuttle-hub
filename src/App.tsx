import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentTable from "./app/page";
import HomeLayout from "./app/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<PaymentTable />} />
      </Route>
    </Routes>
  );
}
