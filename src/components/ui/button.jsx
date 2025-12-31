import React from "react";

export function Button({
  asChild = false,
  className = "",
  children,
  ...props
}) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: `${children.props.className || ""} ${className}`.trim(),
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
