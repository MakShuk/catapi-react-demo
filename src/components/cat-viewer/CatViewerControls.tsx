import React from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { cn } from "../ui/lib/utils";
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
    <div className={cn(styles.controls, "space-y-4")}>
      <div className="flex items-center space-x-2">
        <Switch
          id="enabled"
          checked={enabled}
          onCheckedChange={onEnabledChange}
          aria-label="Включено"
        />
        <label
          htmlFor="enabled"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Enabled
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="auto-refresh"
          checked={autoRefresh}
          onCheckedChange={onAutoRefreshChange}
          aria-label="Автообновление каждые 5 секунд"
        />
        <label
          htmlFor="auto-refresh"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Auto-refresh every 5 seconds
        </label>
      </div>
      <Button
        onClick={onGetCat}
        aria-label="Получить кота"
        className="w-full"
        variant="default"
      >
        Get cat
      </Button>
    </div>
  );
};

export { CatViewerControls };