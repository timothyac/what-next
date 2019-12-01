import Link from "next/link";

const Icon = () => (
  <Link href="/">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 629.41 545.08"
      width="25"
    >
      <title>what-next-icon</title>
      <polygon points="168.9 525.08 23.09 272.54 168.9 20 460.51 20 606.32 272.54 460.51 525.08 168.9 525.08" />
      <path
        className="icon-stroke"
        d="M634.26,267.46,768.52,500,634.26,732.54H365.74L231.48,500,365.74,267.46H634.26m23.09-40H342.65L185.3,500,342.65,772.54h314.7L814.7,500,657.35,227.46Z"
        transform="translate(-185.3 -227.46)"
      />
      <style jsx>{`
        .icon-stroke {
          fill: rgb(204, 204, 204);
        }

        svg:hover {
          cursor: pointer;
        }

        svg:hover .icon-stroke {
          fill: #fff;
          transition: fill 0.2s ease;
        }
      `}</style>
    </svg>
  </Link>
);

export default Icon;
