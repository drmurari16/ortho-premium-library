export function formatPrice(value: number) {
  return value === 0 ? 'Free' : `₹${value}`;
}
