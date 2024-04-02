import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Sector,
  Pie,
  PieChart,
} from "recharts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TooltipProps } from "recharts";
// for recharts v2.1 and above
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4320,
    amt: 2100,
  },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="p-3 bg-white border rounded-md">
        <p className="label">{`${label} : ${payload?.[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

export function LineChartHome() {
  return (
    <Card className="border rounded-md">
      <CardContent>
        <ResponsiveContainer width="100%" height={360}>
          <ComposedChart width={500} height={400} data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="line" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="bar" orientation="right" stroke="#82ca9d" />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Brush dataKey="name" height={30} stroke="#8884d8" />

            <Bar
              name="New players"
              yAxisId="bar"
              dataKey="pv"
              barSize={20}
              fill="#413ea0"
            />
            <Line
              yAxisId="line"
              name="Total revenue (thousand VND) "
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
