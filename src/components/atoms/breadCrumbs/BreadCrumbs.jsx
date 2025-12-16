"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumbs.module.css";
import { Fragment } from "react";

const BreadCrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(segments.includes("blog") ? [{ label: "Article", href: "/blog" }] : []),
  ];

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          <span key={crumb.href} className={styles.current}>
            {crumb.label}
          </span>
        ) : (
          <Fragment key={crumb.href}>
            <Link href={crumb.href} className={styles.link}>
              {crumb.label}
            </Link>
            <span className={styles.separator}>/</span>
          </Fragment>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
