"use client"
import { Button } from "./ui/button"
import { useDriver } from "@/hooks/useDriver"
import { Config } from "driver.js"
import { TvMinimalPlayIcon } from "lucide-react"

type DriverProps = {
  localStorageFields: string
  driverConfig: Config
}

export const DriverButton = ({
  localStorageFields,
  driverConfig,
}: DriverProps) => {
  driverConfig.onDestroyed = () =>
    localStorage.setItem(localStorageFields, "true")

  const driver = useDriver(driverConfig, localStorageFields)

  return (
    <Button size={"icon"} variant={"secondary"} onClick={() => driver.drive()}>
      <TvMinimalPlayIcon />
    </Button>
  )
}
