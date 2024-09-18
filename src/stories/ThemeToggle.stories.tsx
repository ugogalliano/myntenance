import type { Meta, StoryObj } from "@storybook/react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ThemeProvider } from "next-themes"

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    initialGlobals: {
      backgrounds: { value: "light" },
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
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  render: () => <ThemeToggle />,
}
