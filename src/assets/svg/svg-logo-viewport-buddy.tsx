import { SVGProps } from "react";

export default function SVGLogoViewportBuddy({
  props,
  className,
}: {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      {...props}
      className={className}
    >
      <path
        fill="#A3C4F3"
        d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10Z"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M20.13 20.32c1.19-1.276 2.882-1.987 4.87-1.987h2.641a1 1 0 0 1 0 2h-2.64c-1.494 0-2.636.522-3.409 1.352-.78.837-1.259 2.068-1.259 3.605v9.42c0 1.539.477 2.77 1.256 3.606.77.828 1.912 1.35 3.412 1.35h9.996c1.5 0 2.642-.522 3.413-1.35.78-.837 1.257-2.068 1.257-3.606v-2.063a1 1 0 0 1 2 0v2.063c0 1.952-.61 3.7-1.793 4.969-1.19 1.277-2.883 1.988-4.877 1.988H25c-1.994 0-3.687-.711-4.876-1.989-1.182-1.269-1.792-3.017-1.792-4.968v-9.42c0-1.953.614-3.7 1.796-4.97Z"
        clipRule="evenodd"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M35.394 20.333a1 1 0 1 1 0-2h5.272a1 1 0 0 1 1 1v5.272a1 1 0 1 1-2 0v-2.858l-8.09 8.09h2.857a1 1 0 0 1 0 2H29.16a1 1 0 0 1-1-1v-5.27a1 1 0 1 1 2 0v2.856l8.09-8.09h-2.857Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
