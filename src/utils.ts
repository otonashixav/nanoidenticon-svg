export interface NanoidenticonPathAttributes {
  d: string;
  fill: string;
}

export interface NanoidenticonAttributes {
  paths: NanoidenticonPathAttributes[];
  viewBox: string;
}

function createNanoidenticonPath(attrs: NanoidenticonPathAttributes) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  for (const attr in attrs) {
    path.setAttribute(attr, attrs[attr as keyof NanoidenticonPathAttributes]);
  }
  return path;
}

export function createNanoidenticonSvg(attrs: NanoidenticonAttributes) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", attrs.viewBox);
  svg.append(...attrs.paths.map(createNanoidenticonPath));
  return svg;
}
