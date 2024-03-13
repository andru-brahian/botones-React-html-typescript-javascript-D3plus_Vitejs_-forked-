'use client';
import { main } from "@/app/lib/brian_dashboard";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CustomSectionType {
  id?: string;
  title: string;
  body: string;
  i?: number;
}

export const CustomSection = ({ id, title, body, i }: CustomSectionType) => {
  const [hovering, setHovering] = useState(false);
  const [chartData, setChartData] = useState(null); // State to store chart data

  const handleHover = (e: any) => setHovering(t => !t);

  useEffect(() => {
    main().then(data => setChartData(data)); // Fetch chart data and update state
  }, []); // Runs only once on component mount

  // Function to render the chart based on ID and data
  const renderChart = () => {
    if (!chartData || !id) return null; // Handle missing data or ID

    switch (id) {
      case "one":
        // Render chart for "one" using chartData
        return <div id={`viz${1}`}>{/* Your chart rendering logic here */}</div>;
      case "two":
        // Render chart for "two" using chartData
        return <div id={`viz${2}`}>{/* Your chart rendering logic here */}</div>;
      // ... Add cases for other IDs (three, four, five, six)
      case "two":
        // Render chart for "two" using chartData
        return <div id={`viz${3}`}>{/* Your chart rendering logic here */}</div>;
      case "two":
        // Render chart for "two" using chartData
        return <div id={`viz${4}`}>{/* Your chart rendering logic here */}</div>;
      case "two":
        // Render chart for "two" using chartData
        return <div id={`viz${5}`}>{/* Your chart rendering logic here */}</div>;
    default:
        return null; // Handle invalid IDs
    }
  };

  return (
    <div id={id}>
      <h2
        className="text-2xl font-bold text-gray-800 hover:underline cursor-pointer transition duration-300"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Link href={`#${id}`} className="header-link">
          {hovering && "#"} {title}
        </Link>
      </h2>
      <div>{body}</div>
      {renderChart()}
    </div>
  );
};