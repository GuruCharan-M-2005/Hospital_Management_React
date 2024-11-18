import React from 'react';
import { Legend, ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis } from 'recharts';import GridLayout from 'react-grid-layout';
import Sidebar from '../sidebar/sidebar';
import './Dashboard.css'

// Sample data for Area chart
const areaData = [
  { value: 20, category: 'A' },
  { value: 30, category: 'B' },
  { value: 40, category: 'C' },
  { value: 50, category: 'D' },
  { value: 60, category: 'E' },
];

// Sample data for Line chart
const lineData = [
  { value: 10, category: 'A' },
  { value: 20, category: 'B' },
  { value: 30, category: 'C' },
  { value: 40, category: 'D' },
  { value: 50, category: 'E' },
];

// Sample data for Bar chart
const barData = [
  { value: 100, category: 'A' },
  { value: 200, category: 'B' },
  { value: 300, category: 'C' },
  { value: 400, category: 'D' },
  { value: 500, category: 'E' },
];

// Sample data for Pie chart
const pieData = [
  { value: 30, name: 'A' },
  { value: 20, name: 'B' },
  { value: 40, name: 'C' },
  { value: 10, name: 'D' },
  { value: 20, name: 'E' },
];

const charts = [
  { i: 'area', x: 0, y: 0, w: 1, h: 1 },
  { i: 'line', x: 1, y: 0, w: 1, h: 1 },
  { i: 'bar', x: 0, y: 1, w: 1, h: 1 },
  { i: 'pie', x: 1, y: 1, w: 1, h: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Sidebar on the leftmost */}
      <div className="chart-grid">
        <GridLayout
          className="layout"
          layout={charts}
          cols={2}
          rowHeight={300}
          width={800}
        >
          <div key="area">
            <h3>Area Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </ResponsiveContainer>
          </div>
          <div key="line">
            <h3>Line Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div key="bar">
            <h3>Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#413ea0" />
            </BarChart>
            </ResponsiveContainer>
          </div>
          <div key="pie">
            <h3>Pie Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={700} height={700}>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      // outerRadius={250}
                      fill="#8884d8"
                      label={(props) => `${props.name}: ${props.value}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    {/* <Legend /> */}
                  </PieChart>
            </ResponsiveContainer>
          </div>
        </GridLayout >
      </div>
      <div className="statistics"> {/* Statistics section on the rightmost */}
        <h3>Count</h3>
        <ul>
          <li>
            <span>Patient Count:</span>
            <span>100</span>
          </li>
          <li>
            <span>Doctor Count:</span>
            <span>50</span>
          </li>
          <li>
            <span>Appointment Count:</span>
            <span>200</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
