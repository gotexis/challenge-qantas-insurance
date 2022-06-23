/**
 * Makes a date string with some time added for testing purposes
 * These dates will reset when the server is restarted
 * @param daysToAdd - days worth of time to add to today's date
 * @returns - a date string for the updated date (e.g. "2022-03-29T22:03:17.420Z")
 */
const daysFromNow = (daysToAdd: number): string => {
  const nowTime = new Date().getTime();
  return new Date(nowTime + daysToAdd * 24 * 60 * 60 * 1000).toISOString();
};

const creditCards = [
  {
    code: "qpca",
    name: "Premier Everyday",
    offer: {
      description:
        "5,000 points per month when you spend $1,000 or more on eligible purchases.",
      expiryDate: daysFromNow(28.5),
      features: [
        "0.75 Qantas Points per AU$1 on Domestic Spend (up to and including AU$3,000 per statement period)",
        "55 days Interest free",
        "Complimentary travel insurance",
      ],
      points: 42000,
      countDownOfferPoints: null,
      countDownOfferExpiryDate: null,
      title: "Low annual fee",
    },
  },
  {
    code: "qpcb",
    name: "Premier Platinum",
    offer: {
      description:
        "20,000 points per month when you spend $1,500 or more on eligible purchases per month.",
      expiryDate: daysFromNow(11.5),
      features: [
        "1.0 Qantas Point per AU$1 on Domestic Spend (up to and including AU$10,000 per statement period)",
        "2x single-entry Complimentary Lounge Invitations",
        "Complimentary Travel Insurance",
      ],
      points: 12000,
      countDownOfferPoints: 43200,
      countDownOfferExpiryDate: daysFromNow(0.2), // as countdown points (43200) is half a days seconds worth
      title: "Uncapped Potential",
    },
  },
  {
    code: "qpcc",
    name: "Premier Titanium",
    offer: {
      description:
        "Bonus Qantas Points when you spend $5,000 on eligible purchases in 90 days from card approval.",
      expiryDate: daysFromNow(-5), // has expired already
      features: [
        "1.25 Qantas Points per AU$1 on Domestic Spend (up to and including AU$12,500 per statement period)",
        "Earn Status Credits",
        "2x single-entry First Lounge Invitations (plus 2x single-entry additional Lounge Invitations)",
      ],
      points: 15000,
      countDownOfferPoints: null,
      countDownOfferExpiryDate: null,
      title: "Uncapped Potential",
    },
  },
];

export default creditCards;
