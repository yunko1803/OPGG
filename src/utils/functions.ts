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

export function getTimeDifference(date: Date) {
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.valueOf() - date.valueOf());

  return diffTime;
}

export function differenceTimeFormat(time: Date) {
  const milliseconds = getTimeDifference(time);
  const isUnitSecond = milliseconds < 60000;
  const isUnitMinute = 60000 <= milliseconds && milliseconds < 3600000;
  const isUnitHour = 3600000 <= milliseconds && milliseconds < 86400000;
  const isUnitDay = 86400000 <= milliseconds && milliseconds < 2592000000;
  const isUnitMonth = 2592000000 <= milliseconds && milliseconds < 31104000000;
  const diffMonths = Math.ceil(milliseconds / (1000 * 60 * 60 * 24 * 30));
  const diffDays = Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(milliseconds / (1000 * 60 * 60));
  const diffMins = Math.ceil(milliseconds / (1000 * 60));
  const diffSeconds = Math.ceil(milliseconds / (1000));

  if (isUnitSecond) {
    return diffSeconds + '초 전';
  } else if (isUnitMinute) {
    return diffMins + '분 전';
  } else if (isUnitHour) {
    return diffHours + '시간 전';
  } else if (isUnitDay) {
    return diffDays + '일 전';
  } else if (isUnitMonth) {
    return diffMonths + '달 전';
  }
}
