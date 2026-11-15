import { getThemeBootstrap } from '../theme/runtime.ts';

export function ThemeHead() {
  return (
    <head>
      <script id="btf-theme-bootstrap" dangerouslySetInnerHTML={{ __html: getThemeBootstrap() }} />
    </head>
  );
}
