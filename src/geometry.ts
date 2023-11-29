export declare type Point = [number, number];

export declare type Line = [Point, Point];

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function rotatePoints(points: Point[], center: Point, degrees: number): void {
  if (points && points.length) {
    const [cx, cy] = center;
    const angle = (Math.PI / 180) * degrees;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    points.forEach((p) => {
      const [x, y] = p;
      p[0] = ((x - cx) * cos) - ((y - cy) * sin) + cx;
      p[1] = ((x - cx) * sin) + ((y - cy) * cos) + cy;
    });
  }
}

export function rotateLines(lines: Line[], center: Point, degrees: number): void {
  const points: Point[] = [];
  lines.forEach((line) => points.push(...line));
  rotatePoints(points, center, degrees);
}

export function distanceSq(a: Point, b: Point): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

export function distance(a: Point, b: Point): number {
  return Math.sqrt(distanceSq(a, b));
}