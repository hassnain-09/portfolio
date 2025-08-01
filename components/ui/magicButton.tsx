import React from "react"

function magicButton({
  title,
  icon,
  position,
  handleClick,
  otherclasses,
}: {
  title?: string
  icon?: React.ReactNode
  position?: string
  handleClick?: () => void
  otherclasses?: string
}) {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-[60] md:mt-8"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm md:text-md gap-3 font-medium text-white backdrop-blur-3xl ${otherclasses}`}
      >
        {position === "left" && icon && <span>{icon}</span>}
        {title || "Click Me"}
        {position === "right" && icon && <span>{icon}</span>}
      </span>
    </button>
  )
}

export default magicButton
