import type { Preview } from "@storybook/react"

import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Components", ["ThemeToggle", "*"]],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
