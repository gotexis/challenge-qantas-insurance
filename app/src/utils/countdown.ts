export const countdown = (expiryDate: string): string | undefined => {
  const daysLeft = (new Date(expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
  const daysLeftRounded = Math.round(daysLeft);

  // "Expired" if the expiryDate when less than zero days
  if (daysLeft < 0) {
    return 'Expired';
  }

  // If days remaining is greater than 60 don't show a countdown.
  if (daysLeftRounded > 60) {
    return undefined;
  }

  // "X days left" when more than one day
  if (daysLeftRounded > 1) {
    return `${daysLeftRounded} days left`;
  }

  // "X hours left" when less than one day
  if (daysLeft < 1) {
    const hoursLeft = (new Date(expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60);
    return `${Math.floor(hoursLeft)} hour${Math.floor(hoursLeft) > 1 ? "s" : ""} left`;
  }

  // "X day left" when one day remains
  if (daysLeftRounded === 1) {
    return `1 day left`;
  }

}
