import styles from './Base.input.module.scss';

export default function BaseInput({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}