import * as format from './format';

const defaultTipPercent = 20;
const defaultBillAmount = 0;

const tipPercentGroup = document.getElementById("tip-percent-group");
const fixedTipButtons = document.querySelectorAll("#tip-percent-group btn");
const customTipInput = document.getElementById("tip-percentage-input");

const billAmountOutput = document.getElementById("bill-amount");
const tipPercentageOutput = document.getElementById("tip-percentage");
const tipAmountOutput = document.getElementById("tip-amount");
const totalAmountOutput = document.getElementById("total-amount");


let tip: Tip;

class Tip {

    get isValid(): boolean {
        return this.tipPercent >= 0;
    }

    get tipAmount(): number {
        return this.isValid
            ? this.tipAmount * this.tipPercent / 100
            : 0;
    }

    get totalAmount(): number {
        return this.isValid
            ? this.tipAmount + this.billAmount
            : 0;
    }

    constructor(public tipPercent: number = 20, public billAmount: number = 0) {
    }
}

function wireUpEvents() {

    customTipInput.addEventListener("change", e => {
        const el = e.currentTarget as HTMLInputElement;
        el.dataset["tip-percent"] = el.value || "0";
    });

    tipPercentGroup.addEventListener("input", e => {
        const el = e.currentTarget as HTMLElement;

        tip.tipPercent = +el.dataset["tip-percent"];

        fixedTipButtons.forEach(b => {
            const button = b as HTMLElement;
            if (button.dataset["tip-percent"] === tip.tipPercent.toString()) {
                button.removeAttribute("disabled");
            } else {
                button.setAttribute("disabled", void 0);
            }
        })
    });

}

function updateUi() {

}

/**
 * Initializes the tip calculator
 */
export function init() {

    tip = new Tip(defaultTipPercent, defaultBillAmount);

    wireUpEvents();

    console.log("tip module initialized")
}



