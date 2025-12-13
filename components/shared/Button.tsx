'use client';
import type React from 'react';
import cn from '@/utils/cn';


interface BaseProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  children: React.ReactNode;
  /**
   * outlined (default): transparent bg, white text -> on hover cyan bg + dark text
   * reversed: cyan bg + dark text -> on hover transparent bg + white text
   */
  variant?: 'outlined' | 'reversed';
}

interface AnchorProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: never;
  rel?: never;
}

type ButtonProps = AnchorProps | NativeButtonProps;

const baseClasses =
  'box-border text-lg px-[30px] h-[42px] w-fit border-2 border-slider flex flex-row gap-2 items-center justify-center uppercase m-0 transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-400';

const Content: React.FC<{ children: React.ReactNode; loading?: boolean; leadingIcon?: React.ReactNode }> = ({
  children,
  loading,
  leadingIcon,
}) => {
  if (loading) {
    return (
      <span
        aria-hidden
        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
      />
    );
  }

  return (
    <>
      {leadingIcon ? <span className="inline-flex items-center">{leadingIcon}</span> : null}
      <span className="text-[14px]">{children}</span>
    </>
  );
};

const Button: React.FC<ButtonProps> = (props) => {
  const { className = '', disabled = false, loading = false, children, leadingIcon, variant = 'outlined' } = props;

  const disabledClasses = disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  const hoverOutlined = 'hover:bg-cyan-400 hover:text-gray-900';
  const hoverReversed = 'hover:bg-transparent';
  const hoverClasses = disabled || loading ? '' : (variant === 'reversed' ? hoverReversed : hoverOutlined);
  const baseVariantClasses =
    variant === 'reversed'
      ? 'bg-cyan-400 text-gray-900'
      : 'text-white';

  if ('href' in props && props.href) {
    const { href, target, rel } = props;
    const isExternal = target === '_blank' || /^https?:\/\//.test(href);
    const relAttr = rel ?? (isExternal ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        target={target}
        rel={relAttr}
        aria-busy={loading || undefined}
        className={cn(
          baseClasses,
          'no-underline',
          baseVariantClasses,
          hoverClasses,
          disabledClasses,
          className,
        )}
      >
        <Content loading={loading} leadingIcon={leadingIcon}>{children}</Content>
      </a>
    );
  }

  const { onClick, type = 'button' } = props as NativeButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        baseClasses,
        baseVariantClasses,
        hoverClasses,
        disabledClasses,
        className,
      )}
    >
      <Content loading={loading} leadingIcon={leadingIcon}>{children}</Content>
    </button>
  );
};

export default Button;
