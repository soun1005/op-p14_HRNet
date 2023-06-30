const Error = ({ errorMsg }: any) => {
  return (
    <>
      <p className="mb-3 text-xs text-red-300">{errorMsg}</p>
    </>
  );
};

export default Error;
