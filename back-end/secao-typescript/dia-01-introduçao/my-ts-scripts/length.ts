const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, base: string, unit: string): number {
  const baseUnit = units.indexOf(base);
  const finalUnit = units.indexOf(unit);
  const exponent = (finalUnit - baseUnit);
  const result = value * Math.pow(10, exponent);

  return result;
}