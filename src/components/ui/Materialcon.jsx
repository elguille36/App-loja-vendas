// components/ui/Icon.jsx
const Icon = ({ name, ...props }) => (
  <span
    className="material-symbols-outlined"
    translate="no"
    aria-hidden="true"
    {...props}
  >
    {name}
  </span>
);

export default Icon;