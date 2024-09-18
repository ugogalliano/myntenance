import type { Meta, StoryObj } from "@storybook/react"
import { AutoComplete } from "@/components/Autocomplete"
import { useState } from "react"

const items = [
  { value: "pulpFiction", label: "Pulp Fiction (1994)" },
  { value: "theGodfather", label: "The Godfather (1972)" },
  { value: "inception", label: "Inception (2010)" },
  { value: "theDarkKnight", label: "The Dark Knight (2008)" },
  { value: "fightClub", label: "Fight Club (1999)" },
  { value: "forrestGump", label: "Forrest Gump (1994)" },
  { value: "theMatrix", label: "The Matrix (1999)" },
  {
    value: "lordOfTheRings",
    label: "The Lord of the Rings: The Fellowship of the Ring (2001)",
  },
  { value: "gladiator", label: "Gladiator (2000)" },
  { value: "interstellar", label: "Interstellar (2014)" },
]

const meta: Meta<typeof AutoComplete> = {
  title: "Components/Autocomplete",
  component: AutoComplete,
  argTypes: {
    placeholder: {
      control: "text",
      description: "This control change the placeholder of the input",
    },
    isLoading: {
      control: "boolean",
    },
    searchValue: {
      control: {
        disable: true,
      },
    },
    selectedValue: {
      control: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof AutoComplete>

export const Default: Story = {
  args: {
    placeholder: "Search",
    searchValue: "",
    isLoading: false,
    emptyMessage: "Empy Message",
  },
  render: function Render(args) {
    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("")

    return (
      <AutoComplete
        {...args}
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        items={items}
      />
    )
  },
}
