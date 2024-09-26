"use client"
import { Driver, driver } from "driver.js"
import { Config } from "driver.js"
import { useEffect, useMemo } from "react"

/**
 * Initializes and displays the onboarding tutorial based on user status.
 *
 * @param {Config} Config - The configuration object for the driver, containing the steps to be shown in the tutorial.
 * @param {string} localStorageField - The local storage key used to track whether the onboarding tutorial has been shown.
 * @param {boolean} checkIfLogin - Flag to check if the user is logged in.
 */

export const useDriver = (
  { ...config }: Config,
  localStorageField?: string,
  checkIfLogin?: boolean,
): Driver => {
  const driverObj = useMemo(() => driver({ ...config }), [config])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (
        localStorageField &&
        !localStorage.getItem(localStorageField) &&
        !checkIfLogin
      ) {
        localStorage.setItem(localStorageField, "true")
        driverObj.drive()
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [driverObj, localStorageField, checkIfLogin])

  return driverObj
}
