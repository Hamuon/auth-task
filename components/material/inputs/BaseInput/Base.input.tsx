import { FC } from "react";
import styles from "./Base.input.module.scss";

export interface BaseInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<BaseInputProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default BaseInput;
