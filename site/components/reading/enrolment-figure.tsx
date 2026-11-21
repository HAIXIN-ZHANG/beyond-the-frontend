import Image from 'next/image';
import { withBasePath } from '../../config/deployment.ts';
import { homeContent } from '../home-content.ts';

export function EnrolmentFigure() {
  const copy = homeContent.zh;
  return <figure className="home-system-figure enrolment-figure">
    <p><strong>{copy.exampleTitle}</strong></p>
    <picture>
      <source media="(max-width: 899px)" srcSet={withBasePath('/illustrations/home-systems-mobile.svg', process.env.NEXT_PUBLIC_BASE_PATH)} width={304} height={54} />
      <Image unoptimized src={withBasePath('/illustrations/home-systems-desktop.svg', process.env.NEXT_PUBLIC_BASE_PATH)}
        width={410} height={112} alt={copy.illustrationAlt} />
    </picture>
    <ol className="home-system-stages" aria-hidden="true">{copy.stages.map(stage => <li key={stage}>{stage}</li>)}</ol>
    <figcaption>{copy.exampleCaption}</figcaption>
  </figure>;
}
