const FormInput = ({
  label = "",
  type = "",
  name = "",
  id = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={id} className="mb-1 font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border-2 border-primary py-2 px-3 text-sm rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
