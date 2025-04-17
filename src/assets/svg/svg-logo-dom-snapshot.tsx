import { SVGProps } from "react";

export default function SVGLogoDomSnapshot({
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
        fill="#8EECF5"
        d="M0 10C0 4.477 4.477 0 10 0h40c5.523 0 10 4.477 10 10v40c0 5.523-4.477 10-10 10H10C4.477 60 0 55.523 0 50V10Z"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M41.752 29.78h-.701v-3.07a.58.58 0 0 0-.58-.583h-3.95c-2.357-.014-4.3-1.964-4.3-4.343v-4.185a.594.594 0 0 0-.593-.599h-6.873c-3.204 0-5.804 2.639-5.804 5.863v6.917h-.703a1 1 0 0 0 0 2h23.504a1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M36.69 24.227c.898.01 2.145.013 3.203.01.542-.002.818-.657.442-1.05-.679-.712-1.624-1.707-2.575-2.704-.953-1.001-1.91-2.008-2.608-2.739-.384-.405-1.057-.126-1.057.434v3.426c0 1.439 1.172 2.623 2.596 2.623Z"
        clipRule="evenodd"
      />
      <path
        fill="#091540"
        fillRule="evenodd"
        d="M40.582 33.333H19.418a.468.468 0 0 0-.468.468v3.076c0 3.38 2.728 6.123 6.075 6.123h10.233c3.206 0 5.792-2.612 5.792-5.836v-3.363a.468.468 0 0 0-.468-.468Z"
        clipRule="evenodd"
        opacity=".4"
      />
    </svg>
  );
}
