export function getKDAColor(kda: number) {
  if (kda >= 5)
    return '#e19205';
  else if (kda >= 4)
    return '#1f8ecd';
  else if (kda >= 3)
    return '#2daf7f';
  else
    return '#5e5e5e';
}
