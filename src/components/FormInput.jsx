import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, handleChange, id, ...inputProps } = props;
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...inputProps} onChange={handleChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
