import React from "react";
import clsx from "clsx";

interface Textprop {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "title"
    | "heading"
    | "subheading"
    | "body"
    | "span"
    | "nav"
    | "card_text"
    | "card_heading";
}

const Text: React.FC<Textprop> = ({
  children,
  className,
  variant = "body",
}) => {
  const Component =
    variant === "title"
      ? "h1"
      : variant === "heading"
      ? "h2"
      : variant === "subheading"
      ? "h3"
      : variant === "nav"
      ? "span"
      : variant === "card_heading"
      ? "h4"
      : variant === "body" || "card_text"
      ? "p"
      : "span";

  const baseStyle = clsx(
    variant === "title" && " text-[32px]  md:text-[40px] font-medium",
    variant === "heading" && "text-[32px] ",
    variant === "subheading" && "text-[16px] ",
    variant === "card_heading" && "text-[20px]",
    variant === "card_text" && "text-[14px]",
    variant === "body" && "text-[19px] font-normal",
    // variant === "span" && "sm:text-label font-light text-[12px]",
    variant === "nav" &&
      "text-[16px]  cursor-pointer crease-in-out hover:opacity-80",
    className
  );

  return <Component className={baseStyle}>{children}</Component>;
};

export default Text;
