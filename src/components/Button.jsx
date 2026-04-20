import { motion as Motion } from 'framer-motion';
import { buttonStyles } from './buttonStyles';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <Motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      className={buttonStyles({ variant, className })}
      {...props}
    >
      {children}
    </Motion.button>
  );
}
