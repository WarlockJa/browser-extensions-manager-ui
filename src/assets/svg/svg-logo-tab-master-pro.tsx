import { SVGProps } from "react";

export default function SVGLogoTabMasterPro({
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
        fill="#CFBAF0"
        d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10Z"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M41.585 28.624a3.741 3.741 0 0 0-2.992-1.478H21.406a3.743 3.743 0 0 0-2.992 1.476 3.744 3.744 0 0 0-.646 3.274l2.2 8.15a3.774 3.774 0 0 0 3.638 2.787h12.786a3.777 3.777 0 0 0 3.638-2.787l2.202-8.149a3.74 3.74 0 0 0-.647-3.273ZM25.248 19.167h9.5a1 1 0 0 0 0-2h-9.5a1 1 0 0 0 0 2ZM21.576 23.67h16.846a1 1 0 0 0 0-2H21.576a1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
