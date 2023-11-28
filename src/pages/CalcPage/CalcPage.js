import { TipsComponent, } from 'components/features/TipsComponent';
import { CustomInput, } from 'components/UI/CustomInput';
import classes from './CalcPage.module.scss';
import { ResetComponent, } from 'components/features/ResetComponent';
import { useBillData, } from 'store/billData';


const CalcPage = () => {

  const { changeField, bill, amount, } = useBillData();


  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>S P L I T T E R</p>
      <div className={classes.contentBlock}>
        <div className={classes.dataBlock}>
          <CustomInput label={'Bill'} errorText={'cant be zero'} value={bill ? bill : ''} placeholder={'0'} className={classes.input} onChange={(e) => changeField('bill', e.target.value)} error={bill === 0}/>
          <TipsComponent/>
          <p className={classes.inputTitle}></p>
          <CustomInput label={'Number of People'} errorText={'cant be zero'} value={amount ? amount : ''} placeholder={'0'} className={classes.input} onChange={(e) => changeField('amount', e.target.value)} error={amount === 0}/>
        </div>
        <ResetComponent />
      </div>
    </div>
  );
};


export default CalcPage;
