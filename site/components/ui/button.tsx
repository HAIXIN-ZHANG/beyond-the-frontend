import type { ComponentPropsWithoutRef } from 'react';
import { action } from '../../styled-system/recipes/action.js';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & { visual?: 'primary' | 'quiet' };

export function Button({ visual = 'primary', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={[action({ visual }), className].filter(Boolean).join(' ')} {...props} />;
}
