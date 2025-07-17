import React from "react";


import ScheduleTimingTable from "./ScheduleTimingTable";
import ScheduleTimingModal from "./ScheduleTimingModal";
import Breadcrumbs from "../../../components/Breadcrumbs";

const ScheduleTiming = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Schedule timing"
            title="Dashboard"
            subtitle="Instructors / Schedule timing"
            modal="#add_schedule"
            name="Add Schedule"
          />
          <ScheduleTimingTable />
          <ScheduleTimingModal />
        </div>
      </div>
    </>
  );
};

export default ScheduleTiming;
