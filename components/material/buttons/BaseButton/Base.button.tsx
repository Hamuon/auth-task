import { FC } from "react";
import styles from "./Base.button.module.scss";

export interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "submit" | "button" | "reset";
}

const BaseButton: FC<BaseButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default BaseButton;
