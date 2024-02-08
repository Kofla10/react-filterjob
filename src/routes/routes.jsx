import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JobDetail } from "../components/JobDetail";
import { JobList } from "../components/JobList";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<JobList/>} />
            <Route exact path="/jobs" element={<JobList/>} />
            <Route exact path="/jobs/:position" element={<JobDetail/>} />
        </Routes>
    </BrowserRouter>
  )
}
