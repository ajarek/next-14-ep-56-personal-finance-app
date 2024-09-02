'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-1))',
  },

  expense: {
    label: 'Expense',
    color: 'hsl(0, 84%, 60%)',
  },
} satisfies ChartConfig

export function ChartPieBalanse({ income, expense }: any) {
  const chartData = [
    { browser: 'income', visitors: income, fill: 'var(--color-income)' },
    { browser: 'expense', visitors: expense, fill: 'var(--color-expense)' },
  ]
  const totalVisitors = React.useMemo(() => {
    return (income - expense).toFixed(2)
  }, [expense, income])

  return (
    <Card className='flex flex-col'>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='browser'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-2xl font-semibold'
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
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
