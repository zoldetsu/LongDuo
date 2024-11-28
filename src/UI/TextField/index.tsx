import classes from "./TextField.module.scss";

interface TextField {
  type: string;
  value: string;
  setInput: Function;
  placeholder: string;
}

export default function TextField({
  type,
  value,
  setInput,
  placeholder,
}: TextField) {
  return (
    <div>
      <input
        className={classes.MyInput}
        type={type}
        value={value}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
