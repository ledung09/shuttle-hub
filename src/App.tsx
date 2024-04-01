import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./app/layout";
import HomePage from "./app/page";
import PaymentsPage from "./app/payments/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Route>
    </Routes>
  );
}
