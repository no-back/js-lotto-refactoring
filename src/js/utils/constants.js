export const LOTTO_PRICE = 1000;
export const MONETARY_UNIT = 1;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBERS_LENGTH = 6;
export const WINNING_NUMBER_LENGTH = 7;
export const MAX_LOTTO_NUMBER_LENGTH = 2;
export const PURCHASED_QUANTITY_MESSAGE = (countOfLotto) =>
  `총 ${countOfLotto}개를 구매하였습니다.`;

export const ALERT_MESSAGE = {
  PURCHASE_AMOUNT_IS_INVALID_AMOUNT: `화폐단위 미만의 자릿수가 포함된 금액입니다.\n${MONETARY_UNIT}원 단위로 입력해주세요`,
  PURCHASE_AMOUNT_IS_LOW: `로또를 구매하기 위해 ${LOTTO_PRICE}원 이상의 금액을 입력해주세요`,
  PURCHASE_AMOUNT_HAS_CHANGE: (change) =>
    `입력된 금액에서 ${change}를 제외한 금액으로 로또를 구매하였습니다.\n거스름돈 ${change}원을 챙겨가세요.`,
};

export const WINNING_NUMBER_CHECK_MESSAGE = {
  OUT_OF_RANGE: `로또 숫자는 ${LOTTO_MIN_NUMBER}-${LOTTO_MAX_NUMBER} 사이의 값을 입력해주세요.`,
  REDUPLICATED: '중복된 값이 있습니다. 확인 후 다시 입력해주세요.',
  LESS_THEN_LENGTH: '아직 입력하지 않은 번호가 있습니다.',
  FULFILLED: '당첨번호 입력이 완료되었습니다. 지금 결과를 확인하세요.',
};

export const YIELD_MESSAGE = (rate) => `당신의 총 수익률은 ${rate}% 입니다.`;
export const YIELD_DECIMAL_POINT = 2;

export const BONUS_COUNT = 0.5;
export const BONUS_CHECK_REQUIRED_COUNT = 5;
export const WINNING_PRIZE = {
  3: {
    PRIZE: 5_000,
    DESCRIPTION: '3개',
  },
  4: {
    PRIZE: 50_000,
    DESCRIPTION: '4개',
  },
  5: {
    PRIZE: 1_500_000,
    DESCRIPTION: '5개',
  },
  5.5: {
    PRIZE: 30_000_000,
    DESCRIPTION: '5개 + 보너스볼',
  },
  6: {
    PRIZE: 2_000_000_000,
    DESCRIPTION: '6개',
  },
};

export const GET_PRIZE = (count) => {
  return WINNING_PRIZE[count]?.PRIZE ?? 0;
};
