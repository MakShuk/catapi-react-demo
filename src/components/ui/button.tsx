import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./lib/utils";
import styles from "./Button.module.css";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'outline', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const classes = cn(
      styles.button,
      styles[variant],
      styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`],
      className
    );

    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };