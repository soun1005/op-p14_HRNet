type InputProps = {
  labelHtml: string;
  labelName: string;
  inputType: string;
  placeH: string;
};

const Input: React.FC<InputProps> = ({
  labelHtml,
  labelName,
  inputType,
  placeH,
}) => {
  return (
    <div className="my-1 flex flex-col">
      <label htmlFor={labelHtml}>{labelName}</label>
      <input
        type={inputType}
        id={labelHtml}
        placeholder={placeH}
        className="my-1 min-h-[auto] rounded-sm border border-solid border-gray-300 placeholder-gray-200 invalid:border-red-500 focus:placeholder-opacity-0 focus:outline-none"
      />
    </div>
  );
};

export default Input;
