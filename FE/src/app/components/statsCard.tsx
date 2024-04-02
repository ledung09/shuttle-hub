import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DollarSign, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: {
    up: boolean;
    value: number;
  };
}

export function StatsCard(props: StatsCardProps) {
  const { title, value, icon: Icon, trend } = props;
  return (
    <Card className="border rounded-md">
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="mb-2">{title}</p>
          <Icon className="w-4 h-4 text-slate-600" />
        </div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <p className="text-slate-500 text-xs">Total revenue</p>
      </CardContent>
    </Card>
  );
}
