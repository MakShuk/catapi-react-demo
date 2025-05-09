import React from "react";
import styles from "./CatViewerControls.module.css";

interface CatViewerControlsProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (value: boolean) => void;
  onAutoRefreshChange: (value: boolean) => void;
  onGetCat: () => void;
}

const CatViewerControls: React.FC<CatViewerControlsProps> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat,
}) => {
  return (
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
        Auto-refresh every 5 seconds
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
};

export { CatViewerControls };