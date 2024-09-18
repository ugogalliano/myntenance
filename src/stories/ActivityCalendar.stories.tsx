import type { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider, useTheme } from "next-themes"
import { useMemo } from "react"
import ActivityCalendar, {
  ThemeInput,
  type Props as ActivityCalendarProps,
} from "react-activity-calendar"
import { Activity } from "react-activity-calendar"

const minimalTheme: ThemeInput = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
}

function generateRandomData(maxLevel: number): Activity[] {
  const data: Activity[] = []
  const currentDate = new Date()
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1)
  for (let i = 0; i < 50; i++) {
    const randomDate = new Date(
      oneYearAgo.getTime() +
        Math.random() * (currentDate.getTime() - oneYearAgo.getTime()),
    )
    const formattedDate = randomDate.toISOString().split("T")[0]
    const randomCount = Math.floor(Math.random() * 20) + 1
    const randomLevel = Math.floor(Math.random() * maxLevel) + 1
    data.push({
      date: formattedDate,
      count: randomCount,
      level: randomLevel,
    })
  }

  return data
}

const defaultProps = {
  blockMargin: 4,
  blockRadius: 2,
  blockSize: 10,
  fontSize: 14,
  hideColorLegend: false,
  hideMonthLabels: false,
  hideTotalCount: false,
  loading: false,
  maxLevel: 4,
  showWeekdayLabels: false,
  weekStart: 0,
} as Omit<ActivityCalendarProps, "data">

const meta: Meta<typeof ActivityCalendar> = {
  title: "Components/ActivityCalendar",
  component: ActivityCalendar,
  argTypes: {
    data: {
      control: false,
    },
    blockMargin: {
      control: { type: "range", min: 0, max: 20 },
    },
    blockRadius: {
      control: { type: "range", min: 0, max: 20 },
    },
    blockSize: {
      control: { type: "range", min: 4, max: 30, step: 1 },
    },
    colorScheme: {
      control: false,
    },
    fontSize: {
      control: { type: "range", min: 6, max: 32, step: 2 },
    },
    maxLevel: {
      control: false,
    },
    ref: {
      control: false,
    },
    showWeekdayLabels: {
      control: "boolean",
    },
    style: {
      control: false,
    },
    weekStart: {
      options: [0, 1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
        labels: {
          0: "Sunday (0)",
          1: "Monday (1)",
          2: "Tuesday (2)",
          3: "Wednesday (3)",
          4: "Thursday (4)",
          5: "Friday (5)",
          6: "Saturday (6)",
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      sort: "requiredFirst",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ActivityCalendar>

export const Default: Story = {
  args: defaultProps,
  render: (args) => {
    const { resolvedTheme: colorScheme } = useTheme()

    const data = useMemo(
      () => generateRandomData(args.maxLevel || 0),
      [args.maxLevel],
    )
    return (
      <ActivityCalendar
        colorScheme={colorScheme === "dark" ? "dark" : "light"}
        theme={minimalTheme}
        {...args}
        data={data}
      />
    )
  },
}
