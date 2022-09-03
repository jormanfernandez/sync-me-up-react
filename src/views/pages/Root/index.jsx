import React from "react";
import { Routes, Route } from "react-router-dom";
import { useOnMount } from "routes/useOnMount";
import { PAGES, getRoute } from "routes/pages";
import { useSetHistory } from "routes/history";
import { SyncPage } from "views/pages/SyncPage";
import { NotFound } from "views/pages/NotFound";

import "./_style.scss";

export const Root = () => {
  useSetHistory();
  useOnMount();
  return (
    <div className="container">
      <Routes>
        <Route {...getRoute(PAGES.sync)} element={<SyncPage/>} />
        <Route {...getRoute(PAGES.notFound)} element={<NotFound/>} />
      </Routes>
    </div>
  );
}