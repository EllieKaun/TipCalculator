import { createWithEqualityFn, } from 'zustand/traditional';

const intialState = {
  tip: NaN,
  bill: NaN,
  amount: NaN,

};

export const useBillData = createWithEqualityFn((set, get) => ({
  ...intialState,

  changeField: (key, value) => {
    set({ [ key ]: +value, });
  },
  resetFields: () => {
    set({ ...intialState, });
  },
  culcTips: () => {
    const geted = get();
    return (
      (geted.tip && geted.bill && geted.amount) ? +(((geted.tip / 100) * geted.bill) / geted.amount).toFixed(2) : '0.00'
    );
  },
  culcBill: () => {
    const geted = get();
    return (
      (geted.tip && geted.bill && geted.amount) ? +((((geted.tip / 100) * geted.bill) + geted.bill)/ geted.amount).toFixed(2) : '0.00'
    );
  },
}));
