import { SVGProps } from "react";

export default function SVGLogoJSONWizard({
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
        fill="#F1C0E8"
        d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10Z"
      />
      <path
        stroke="#091540"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.333"
        d="M36.553 16.008c4.58 0 7.447 3.23 7.447 7.81V36.18c0 4.58-2.867 7.812-7.447 7.812H23.432c-4.58 0-7.432-3.232-7.432-7.812V23.818c0-4.58 2.867-7.81 7.432-7.81h6.876m-7.241 27.97 9.54-10.843a3.176 3.176 0 0 0-.287-4.492l-1.729-1.515a3.18 3.18 0 0 0-4.506.272l-2.123 2.411-7.69 8.707m10.934-5.848 3.246 2.86m6.835-8.508v-.06m-2.083 10.606v.06m-13.25-14.86v-.06m14.621-.241v-.061"
      />
    </svg>
  );
}
