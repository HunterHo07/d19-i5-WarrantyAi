import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      isLoading = false,
      disabled = false,
      icon,
      iconPosition = 'left',
      magnetic = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'btn';

    const variantClasses = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg',
      secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg',
      accent: 'bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-950/50 rounded-lg transition-all duration-300',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 rounded-lg transition-all duration-300',
    };

    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
      xl: 'text-lg px-8 py-4',
    };

    const loadingSpinner = (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    const buttonContent = (
      <>
        {isLoading && loadingSpinner}
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          className={classes}
          disabled={disabled || isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
