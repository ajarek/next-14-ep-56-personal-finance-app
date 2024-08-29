"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"





const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
 
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-2))",
  },
  diningOut: {
    label: "Dining Out",
    color: "hsl(var(--chart-3))",
  },
  groceries: {
    label: "Groceries",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ChartPie({income, entertainment, diningOut, groceries  }: any) {
  const chartData = [
    { browser: "income", visitors: income, fill: "var(--color-income)" },
    { browser: "entertainment", visitors: entertainment, fill: "var(--color-entertainment)" },
    { browser: "diningOut", visitors: diningOut, fill: "var(--color-diningOut)" },
    { browser: "groceries", visitors: groceries, fill: "var(--color-groceries)" },
  ]
  const totalVisitors = React.useMemo(() => {
    return (income-(entertainment+diningOut+groceries)).toFixed(2)
  }, [diningOut, entertainment, groceries, income])

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-semibold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Balance
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
