const SelectInput = ({ label, options = [], value, onChange }) => (
  <div>
    <label className="form-label">{label}</label>
    <select
      className="form-select"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default React.memo(SelectInput)