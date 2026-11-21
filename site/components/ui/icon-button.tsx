import type { ComponentPropsWithRef } from 'react';
import { action } from '../../styled-system/recipes/action.js';

type IconButtonProps = Omit<ComponentPropsWithRef<'button'>, 'aria-label'> & { label: string; visual?: 'quiet' | 'toolbar' };

export function IconButton({ label, className, visual = 'quiet', type = 'button', ...props }: IconButtonProps) {
  return <button type={type} aria-label={label} className={[action({ visual, icon: true }), className].filter(Boolean).join(' ')} {...props} />;
}
