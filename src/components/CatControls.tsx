import React from "react";
import styles from "./CatControls.module.css";

interface CatControlsProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (value: boolean) => void;
  onAutoRefreshChange: (value: boolean) => void;
  onGetCat: () => void;
}

const CatControls: React.FC<CatControlsProps> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat,
}) => (
  <div className={styles.controls}>
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={enabled}
        onChange={e => onEnabledChange(e.target.checked)}
        aria-label="Включено"
      />
      Enabled
    </label>
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={autoRefresh}
        onChange={e => onAutoRefreshChange(e.target.checked)}
        aria-label="Автообновление каждые 5 секунд"
      />
      Auto-refreash every 5 second
    </label>
    <button
      className={styles.button}
      onClick={onGetCat}
      aria-label="Получить кота"
      tabIndex={0}
      type="button"
    >
      Get cat
    </button>
  </div>
);

export default CatControls;