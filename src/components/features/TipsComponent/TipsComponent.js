import { CustomButton, } from 'components/UI/CustomButton';
import classes from './TipsComponent.module.scss';
import { CustomInput, } from 'components/UI/CustomInput';
import { useBillData, } from 'store/billData';


const TipsComponent = () => {

  const { changeField, tip, } = useBillData();

  const tipsArr = [
    5,
    10,
    15,
    25,
    50,
  ];

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes.tipButtons}>
        {tipsArr.map((item) => (
          <CustomButton
            key={item}
            onClick={() => changeField('tip', item)}
            className={`${classes.button} ${tip === item ? classes.active : ''}`}
            type={'primary'}
          >
            {item}%
          </CustomButton>
        ))}
        <CustomInput
          onChange={(e) => changeField('tip', e.target.value)}
          placeholder={'Custom'}
        />
      </div>
    </div>
  );
};

export default TipsComponent;
