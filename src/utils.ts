export interface PathAttrs {
  d: string;
  fill: string;
}

export interface SvgAttrs {
  paths: PathAttrs[];
  viewBox: string;
}

function createPath(attrs: PathAttrs) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  for (const attr in attrs) {
    path.setAttribute(attr, attrs[attr as keyof PathAttrs]);
  }
  return path;
}

export function createSvg(attrs: SvgAttrs) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", attrs.viewBox);
  svg.append(...attrs.paths.map(createPath));
  return svg;
}
