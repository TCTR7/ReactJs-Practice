import React from "react";
import RevenueLineChart from "../components/charts/RevenueLineChart";
import UserBarChart from "../components/charts/UserBarChart";
import DevicePieChart from "../components/charts/DevicePieChart";
import EngagementAreaChart from "../components/charts/EngagementAreaChart";
import RadarChartComponent from "../components/charts/RadarChartComponent";
import ComposedChartComponent from "../components/charts/ComposedChartComponent";
import ScatterChartComponent from "../components/charts/ScatterChartComponent";

export default function ChartDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📊 Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueLineChart />
        <UserBarChart />
        <DevicePieChart />
        <EngagementAreaChart />
        <RadarChartComponent />
        <ComposedChartComponent />
        <ScatterChartComponent />
      </div>
    </div>
  );
}
