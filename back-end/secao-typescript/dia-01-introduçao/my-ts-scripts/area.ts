const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export function convert(value: number, base: string, unit: string): number {
  const baseUnit = units.indexOf(base);
  const finalUnit = units.indexOf(unit);
  const exponent = (finalUnit - baseUnit);
  const result = value * Math.pow(100, exponent);

  return result;
}