import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 20px",
      }}
    >
      <Link
        href="/blog/the-ultimate-guide-to-full-body-workouts"
        prefetch
        style={{
          border: "1px solid black",
          padding: "6px 12px",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Read Blog
      </Link>
    </div>
  );
}
