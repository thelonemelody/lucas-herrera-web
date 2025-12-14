import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';

  const variants = {
    primary:
      'bg-electric-blue text-white hover:bg-electric-blue/80 glow-blue',
    secondary:
      'bg-space-blue text-text-primary hover:bg-space-blue/80',
    outline:
      'border border-electric-blue text-electric-blue hover:bg-electric-blue/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === 'a') {
    const { as, ...linkProps } = props;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
