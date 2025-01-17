const CheckboxInput = ({ label, checked, onChange }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange && onChange(e.target.checked)}
    />
    <label className="form-check-label">{label}</label>
  </div>
);

export default React.memo(CheckboxInput);