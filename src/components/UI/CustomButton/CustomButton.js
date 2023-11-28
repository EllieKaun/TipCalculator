import classes from './CustomButton.module.scss';


const CustomButton = (props) => {

  const primaryType = 'primary';

  const { children, onClick, type, disabled, className, } = props;

  return (
    <button
      {...props}
      className={`
        ${classes.button}
        ${type === primaryType ? classes.primary : classes.secondary}
        ${className}
      `}
    >
      {children}
    </button>
  );
};


export default CustomButton;
