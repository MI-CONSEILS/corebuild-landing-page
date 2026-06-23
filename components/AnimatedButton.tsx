import type { AnchorHTMLAttributes, ReactNode } from "react";

type AnimatedButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "arrow";
};

export function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: AnimatedButtonProps) {
  const classes = ["animated-button", `animated-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} data-gsap-button {...props}>
      <span className="animated-button__label">{children}</span>
      {variant === "arrow" ? (
        <span className="animated-button__icon" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.625 7H11.375M11.375 7L7.875 3.5M11.375 7L7.875 10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      ) : null}
    </a>
  );
}
