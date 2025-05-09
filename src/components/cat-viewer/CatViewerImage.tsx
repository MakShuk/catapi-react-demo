import React, { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from "react";
import styles from "./CatViewerImage.module.css";
import { cn } from "../ui/lib/utils";

interface CatViewerImageProps {
  enabled: boolean;
  autoRefresh: boolean;
  className?: string;
}

export interface CatViewerImageRef {
  fetchRandomCat: () => void;
}

const CatViewerImage = forwardRef<CatViewerImageRef, CatViewerImageProps>(
  ({ enabled, autoRefresh, className }, ref) => {
    const [url, setUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomCat = useCallback(async () => {
      if (!enabled) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        if (!response.ok) throw new Error("Failed to fetch cat image");

        const data = await response.json();
        setUrl(data[0].url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Произошла ошибка при загрузке изображения");
      } finally {
        setIsLoading(false);
      }
    }, [enabled]);

    useImperativeHandle(ref, () => ({
      fetchRandomCat
    }));

    useEffect(() => {
      let intervalId: NodeJS.Timeout;

      if (enabled && autoRefresh) {
        intervalId = setInterval(fetchRandomCat, 5000);
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [enabled, autoRefresh, fetchRandomCat]);

    if (isLoading) {
      return (
        <div className={cn(styles.catImageWrapper, className)}>
          <div className={styles.loader} role="status" aria-label="Загрузка">
            <svg
              className="animate-spin h-8 w-8 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="sr-only">Загрузка изображения кота</span>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className={cn(styles.catImageWrapper, className)}>
          <p className={styles.errorText} role="alert">
            {error}
          </p>
        </div>
      );
    }

    if (!url || !enabled) {
      return (
        <div className={cn(styles.catImageWrapper, className)}>
          <p className="text-muted-foreground">
            {enabled ? "Нажмите кнопку, чтобы получить изображение кота" : "Просмотр котов отключен"}
          </p>
        </div>
      );
    }

    return (
      <div className={cn(styles.catImageWrapper, className)}>
        <img
          src={url}
          alt="Случайный кот"
          className={styles.catImage}
          loading="lazy"
        />
      </div>
    );
  }
);

CatViewerImage.displayName = "CatViewerImage";

export { CatViewerImage };