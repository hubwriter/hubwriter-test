import { Point } from './geometry';
import { Random } from './random';

export const SVGNS = 'http://www.w3.org/2000/svg';

export interface Config {
  options?: Options;
}

export interface DrawingSurface {
  width: number | SVGAnimatedLength;
  height: number | SVGAnimatedLength;
}

export interface Options {
  roughness?: number;
  bowing?: number;
  stroke?: string;
  strokeWidth?: number;
  curveFitting?: number;
  curveTightness?: number;
  curveStepCount?: number;
  fill?: string;
  fillStyle?: string;
  fillWeight?: number;
  hachureAngle?: number;
  hachureGap?: number;
  simplification?: number;
  dashOffset?: number;
  dashGap?: number;
  zigzagOffset?: number;
  seed?: number;
}

export interface ResolvedOptions extends Options {
  roughness: number;
  bowing: number;
  stroke: string;
  strokeWidth: number;
  curveFitting: number;
  curveTightness: number;
  curveStepCount: number;
  fillStyle: string;
  fillWeight: number;
  hachureAngle: number;
  hachureGap: number;
  dashOffset: number;
  dashGap: number;
  zigzagOffset: number;
  seed: number;
  randomizer?: Random;
}

export declare type VectorType = 'curve' | 'line'; //'move' | 'bcurveTo' | 'lineTo' | 'qcurveTo';
export declare type VectorOpType = 'path' | 'fillPath' | 'fillSketch' | 'path2Dfill' | 'path2Dpattern';

export interface Vector {
  op: VectorType;
  data: number[];
}

export interface VectorOp {
  type: VectorOpType;
  vectors: Vector[];
  size?: Point;
  path?: string;
}

export interface Drawable {
  shape: string;
  options: ResolvedOptions;
  op: VectorOp;
}

export interface PathInfo {
  d: string;
  stroke: string;
  strokeWidth: number;
  fill?: string;
  pattern?: PatternInfo;
}

export interface PatternInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  viewBox: string;
  patternUnits: string;
  path: PathInfo;
}