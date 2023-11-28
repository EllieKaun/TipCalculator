import classes from './CustomInput.module.scss';


const CustomInput = (props) => {

  const { error, label, errorText, } = props;
  return (
    <>
      {label &&
      <div className={classes.label}>
        <p className={classes.inputTitle}>{label}</p>
        {error && <p className={classes.errorText}>{errorText}</p>}
      </div>}
      <input
        dir="rtl"
        {...props}
        className={error ? classes.error : ''}
      />
    </>
  );
};

export default CustomInput;
