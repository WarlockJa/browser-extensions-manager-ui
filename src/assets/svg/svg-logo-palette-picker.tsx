import { SVGProps } from "react";

export default function SVGLogoPalettePicker({
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
        fill="#98F5E1"
        d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10Z"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M21.599 18.342a4.342 4.342 0 0 0-4.334 4.334v2.24c0 .147.12.266.267.266 1.166-.003 5.855-.012 8.134-.013.148 0 .266-.12.266-.267v-2.226a4.333 4.333 0 0 0-4.333-4.334ZM17.532 27.157a.266.266 0 0 0-.267.266v4.158c0 .06.06.108.12.108h8.28c.148 0 .267-.12.267-.267v-3.986a.266.266 0 0 0-.266-.267c-2.28 0-6.968-.01-8.134-.012ZM21.599 36.21c.666 0 1.2.546 1.2 1.2 0 .666-.534 1.2-1.2 1.2-.654 0-1.2-.534-1.2-1.2 0-.654.546-1.2 1.2-1.2Zm-4.067-2.534a.266.266 0 0 0-.267.267v3.4c0 2.4 1.947 4.333 4.334 4.333 2.4 0 4.333-1.933 4.333-4.333v-3.387a.266.266 0 0 0-.266-.267c-2.28 0-6.968-.01-8.134-.013ZM38.637 23.86c-1.213-3.307-5.08-3.894-7.227-1.747l-3.35 3.324c-.1.1-.157.235-.157.376l-.026 5.22-.013 1.653v.013l-.024 4.593a.267.267 0 0 0 .455.19l9.355-9.343c1.12-1.12 1.534-2.786.987-4.28ZM38.897 33.015h-3.041a.534.534 0 0 0-.374.154l-8.186 8.056a.267.267 0 0 0 .187.457h11.562c1.582 0 3.062-.885 3.726-2.32 1.48-3.204-.836-6.347-3.874-6.347Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
