const TextInput = ({ label, value, onChange }) => (
  <div>
    <label className="form-label">{label}</label>
    <input
      type="text"
      className="form-control"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  </div>
);

export default React.memo(TextInput);