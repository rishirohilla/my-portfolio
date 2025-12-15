// "use client"
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import type { ThemeProviderProps } from "next-themes"

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return (
//     <NextThemesProvider
//       {...props}
//       themes={["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk"]}
//     >
//       {children}
//     </NextThemesProvider>
//   )
// }
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={[
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
      ]}
    >
      {children}
    </NextThemesProvider>
  )
}
