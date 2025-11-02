import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function baseProps({ size = 20, className, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    className: className || "stroke-current",
    ...rest,
  };
}

export function IconSearch(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCart(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="9" cy="21" r="1" fill="currentColor" />
      <circle cx="18" cy="21" r="1" fill="currentColor" />
      <path
        d="M1 1h3l2.68 12.39A2 2 0 008.62 15h7.76a2 2 0 001.94-1.57L21 6H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  const { size = 18, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

export function IconEye(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  const { size = 20, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
      />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

// Filled star
export function IconStarSolid(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  const { size = 16, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="currentColor"
      />
    </svg>
  );
}

// Half star (left filled)
export function IconStarHalf(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  const { size = 16, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <defs>
        <linearGradient id="halfStarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="url(#halfStarGrad)"
        stroke="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}
export function IconChevronRight(
  props: React.SVGProps<SVGSVGElement> & { size?: number }
) {
  const { size = 16, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
