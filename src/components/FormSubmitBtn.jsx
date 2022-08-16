const FormSubmitBtn = ({ value = "Submit", isError = false }) => {
  const errClass = isError ? "bg-red-700" : "bg-primary";

  return (
    <input
      type="submit"
      value={value}
      className={`${errClass} w-full mt-3 text-white rounded-lg cursor-pointer font-bold p-3 text-center`}
    />
  );
};

export default FormSubmitBtn;
