import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_LENGTH,
  BONUS_CHECK_REQUIRED_COUNT,
  BONUS_COUNT,
} from '../utils/constants.js';

const alotto = (function () {
  const generateLottoRandomNumber = Array.from({ length: 45 }).map(
    (_, index) => index + 1
  );
  return {
    shuffle() {
      generateLottoRandomNumber.sort(() => Math.random() - 0.5);
      return {
        pick(num) {
          return generateLottoRandomNumber.slice(0, num);
        },
      };
    },
  };
})();
export default class LottoTicket {
  constructor() {
    this.lottoNumberList = this.createLottoNumbers().sort((a, b) => a - b);
    this.totalMatchCount = 0;
  }

  createLottoNumbers(array = []) {
    return alotto.shuffle().pick(6);
  }

  setTotalMatchCount({ winningNumbers, bonusNumber }) {
    const totalMatchCount = this.getWinningNumbersMatchCount(winningNumbers);
    this.totalMatchCount =
      totalMatchCount === BONUS_CHECK_REQUIRED_COUNT
        ? totalMatchCount + this.getBonusNumberMatchCount(bonusNumber)
        : totalMatchCount;
  }

  getWinningNumbersMatchCount(winningNumbers) {
    return this.lottoNumberList.reduce(
      (acc, num) => acc + winningNumbers.includes(num),
      0
    );
  }

  getBonusNumberMatchCount(bonusNumber) {
    return this.lottoNumberList.includes(bonusNumber) ? BONUS_COUNT : 0;
  }
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
