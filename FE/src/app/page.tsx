import React from "react";
import { StatsCard } from "./components/statsCard";
import {
  DollarSign,
  HandCoins,
  OctagonAlert,
  UserRoundPlus,
} from "lucide-react";
import { LineChartHome } from "./components/chartCard";
import { TopPlayerCard } from "./components/topPlayer";

export default function HomePage() {
  return (
    <div className="w-full container">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="123,000đ"
          icon={DollarSign}
          trend={{ up: true, value: 10 }}
        />

        <StatsCard
          title="Players Paid"
          value="10"
          icon={HandCoins}
          trend={{ up: true, value: 10 }}
        />
        <StatsCard
          title="Players Not Paid"
          value="20"
          icon={OctagonAlert}
          trend={{ up: true, value: 10 }}
        />
        <StatsCard
          title="New Players"
          value="20"
          icon={UserRoundPlus}
          trend={{ up: true, value: 10 }}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <div className="col-span-4 w-full">
          <LineChartHome />
        </div>
        <div className="col-span-3  w-full">
          <TopPlayerCard />
        </div>
      </div>
    </div>
  );
}
