import PurchasedLotto from './PurchasedLotto.js';
import PurchaseAmountInput from './PurchaseAmountInput.js';
import LottoTicket from '../model/LottoTicket.js';
import WinningNumberInput from './WinningNumberInput.js';
import ResultModal from './ResultModal.js';

export default class App {
  constructor() {
    this.lottoTickets = [];
    this.winningNumber = {};

    this.purchaseAmountInput = new PurchaseAmountInput({
      createLottoTickets: this.createLottoTickets.bind(this), // 여기서 넘겨주는 this의 시점이 어떻게 되지??
    });

    this.winningNumberInput = new WinningNumberInput({
      isVisible: false,
      updateWinningNumber: this.updateWinningNumber.bind(this),
      onShowModal: this.onShowModal.bind(this),
    });

    this.resultModal = new ResultModal({
      isVisible: false,
      lottoTickets: this.lottoTickets,
      winningNumber: this.winningNumber,
      onRestart: this.onRestart.bind(this),
    });
  }

  showPurchasedLotto() {
    this.purchasedLotto = new PurchasedLotto({
      lottoTickets: this.lottoTickets,
    });
  }

  setState({ lottoTickets, winningNumber }) {
    if (lottoTickets) {
      // 여기서 상위에 무조건 showPurchasedLotto가 있는데 정의 되는 시점이 언제지..?
      this.lottoTickets = lottoTickets; // 원래 []
      this.purchasedLotto.setState({ lottoTickets: this.lottoTickets });
      this.winningNumberInput.setState({ isVisible: lottoTickets.length > 0 }); // createLottoTickets이 바인딩 되는 시점
      this.resultModal.setState({ lottoTickets: this.lottoTickets });
    }
    if (winningNumber) {
      // 첫시작 즉 createLottoTickets 가 시작되는 시점에 winningNumber가 정의되지 않음
      this.winningNumber = winningNumber; // 원래 {}, 여기서 없을 때 정의됨
      this.resultModal.setState({ winningNumber: this.winningNumber });
    }
  }

  createLottoTickets(countOfLotto) {
    this.showPurchasedLotto(); // 여기서 this.purchasedLotto이 정의된다
    this.setState({
      lottoTickets: Array(countOfLotto)
        .fill()
        .map(() => new LottoTicket()), // ?? winningNumber가 없는데..?
    });
  }

  updateWinningNumber(winningNumber) {
    this.setState({ winningNumber });
  }

  onShowModal(e) {
    this.resultModal.showModal(e);
  }

  onRestart() {
    this.setState({ lottoTickets: [], winningNumber: {} });
    this.purchaseAmountInput.reset();
  }
}
