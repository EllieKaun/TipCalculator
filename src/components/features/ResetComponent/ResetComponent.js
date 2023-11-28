import classes from './ResetComponent.module.scss';
import { CustomButton, } from 'components/UI/CustomButton';
import { useBillData, } from 'store/billData';

const ResetComponent = () => {

  const { culcBill, culcTips, resetFields, tip, amount, bill, } = useBillData();
  return (
    <div className={classes.wrapper}>
      <div>
        <div className={classes.dataBlock}>
          <div>
            <p className={classes.title}>Tip amount</p>
            <p className={classes.subtitle}>/ person</p>
          </div>
          <p className={classes.sum}>${culcTips()}</p>
        </div>
        <div className={classes.dataBlock}>
          <div>
            <p className={classes.title}>Total</p>
            <p className={classes.subtitle}>/ person</p>
          </div>
          <p className={classes.sum}>${culcBill()}</p>
        </div>
      </div>
      <CustomButton onClick={resetFields} disabled={!(tip || amount || bill)} className={classes.resetButton}>RESET</CustomButton>
    </div>
  );
};

export default ResetComponent;
