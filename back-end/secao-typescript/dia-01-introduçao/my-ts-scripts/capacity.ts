const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert(value: number, base: string, unit: string): number {
  const baseUnit = units.indexOf(base);
  const finalUnit = units.indexOf(unit);
  const exponent = (finalUnit - baseUnit);
  const result = value * Math.pow(10, exponent);

  return result;
}