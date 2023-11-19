import { cls } from "@/lib/utils"

import styles from "./spinner.module.css"

type Props = {
  className?: string
}

export function Spinner({ className, ...props }: Props) {
  return (
    <svg
      className={cls(styles.svg, className)}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" />
    </svg>
  )
}
