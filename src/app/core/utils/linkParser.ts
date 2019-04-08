export enum LinkType {
  ROUTE = 'route',
  HREF = 'href'
}

export interface ParsedLink {
  type: LinkType;
  link: string;
}

export function parseLink(target: string = ''): ParsedLink {
  const delimiter = '://';
  const idx = target.indexOf(delimiter);
  const type = target.startsWith('route') ? LinkType.ROUTE : LinkType.HREF;
  const link =
    type === 'route' ? target.substr(idx + delimiter.length) : target;

  return { type, link };
}
