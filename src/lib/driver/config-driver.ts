import { Config } from "driver.js"

const commonConfigDriver: Partial<Config> = {
  showProgress: true,
  allowClose: false,
  popoverClass: "driverjs-theme",
}

export const repoConfigDriverField = "repoConfigDriver"
export const repoConfigDriver: Config = {
  ...commonConfigDriver,
  steps: [
    {
      element: "#notes-project",
      popover: {
        title: "Notes",
        description:
          "In this section, you can add notes about the project, jot down useful tips," +
          "or capture new ideas as they come to mind.",
      },
    },
    {
      element: "#task-table",
      popover: {
        title: "Task Table",
        description:
          "Task table allow you to create, modify, and delete tasks." +
          " You have full control over the task table: filter, sort, and adjust columns to manage your workflow efficiently.",
      },
    },
    {
      element: "#danger-zone",
      popover: {
        title: "Danger Zone",
        description:
          "This section allows you to permanently delete the project. Use it with caution, as this action cannot be undone.",
      },
    },
  ],
}

export const heroConfigDriverField = "heroConfigDriverField"
export const heroConfigDriver: Config = {
  ...commonConfigDriver,
  steps: [
    {
      element: "#welcome",
      popover: {
        title: "Welcome",
        description:
          "How many side projects have you abandoned? " +
          "This time, let's make it different.",
      },
    },
    {
      element: "#sign-in-form",
      popover: {
        title: "Before we start",
        description:
          "Log in with your GitHub account. " +
          "This way you can save your settings and access all features",
      },
    },
  ],
}
