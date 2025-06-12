import { FC } from "react";
import styles from "./Base.button.module.scss";
import LoadingSpinner from "@/components/templates/LoadingSpinner/LoadingSpinner";

export interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "submit" | "button" | "reset";
  loading: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({
  children,
  onClick,
  loading,
  type = "button",
}) => {
  return (
    <button
      disabled={loading}
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default BaseButton;
