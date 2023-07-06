import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import "./Chart.css";
import { Doughnut } from "react-chartjs-2";
import { useApp } from "../context/app-context";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chart = () => {
  const {
    presentStudent,
    setPresentStudent,
    absentStudent,
    setAbsentStudent,
    totalStudent,
    setTotalStudent,
  } = useApp();

  const data = {
    datasets: [
      {
        // here data was taken with ratio to total
        // data: [
        //   ((totalStudent - presentStudent) / totalStudent) * 100,
        //   (presentStudent / totalStudent) * 100,
        // ],
        // backgroundColor: ["red", "blue"],

        data: [totalStudent - presentStudent, presentStudent],
        backgroundColor: ["red", "blue"],
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Absent", "Present"],
  };
  return (
    <div
      className="chart"
      style={{
        width: "90%",
        height: "90%",
        marginInline: "2em",
        marginTop: "2em",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
