type InputProps = {
  labelHtml: string;
  labelName: string;
  inputType: string;
};

const Input: React.FC<InputProps> = ({ labelHtml, labelName, inputType }) => {
  return (
    <>
      <label htmlFor={labelHtml}>{labelName}</label>
      <input type={inputType} id={labelHtml} />
    </>
  );
};

export default Input;
