import PropTypes from "prop-types";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  isLoading = false,
  error = null,
}) => {
  return (
    <div className={`relative text-xs md:text-sm ${className}`}>
      {error && <div className="text-red-500 text-xs md:text-sm mb-2">{error}</div>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || isLoading}
        className={`block w-full px-3 text-xs md:text-sm py-2 border rounded-md shadow-sm text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm ${
          isLoading ? "bg-gray-100 cursor-not-allowed" : ""
        } ${error ? "border-red-500" : ""}`}
      >
        <option value="" className="text-gray-500 text-xs md:text-sm">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-black text-xs md:text-sm">
            {option}
          </option>
        ))}
      </select>
      {isLoading && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0116 0H4z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

Select.defaultProps = {
  value: "",
  placeholder: "Select an option",
  className: "",
  disabled: false,
  isLoading: false,
  error: null,
};

export default Select;
