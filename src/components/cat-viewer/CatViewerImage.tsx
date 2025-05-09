import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import styles from "./CatViewerImage.module.css";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface CatViewerImageProps {
  enabled: boolean;
  autoRefresh: boolean;
}

export interface CatViewerImageRef {
  fetchRandomCat: () => Promise<void>;
}

const CatViewerImage = forwardRef<CatViewerImageRef, CatViewerImageProps>(({ enabled, autoRefresh }, ref) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomCat = useCallback(async () => {
    if (!enabled) return;

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!response.ok) {
        throw new Error("Не удалось загрузить изображение");
      }
      
      const [catData]: CatImage[] = await response.json();
      setImageUrl(catData.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    } finally {
      setIsLoading(false);
    }
  }, [enabled]);

  useImperativeHandle(ref, () => ({
    fetchRandomCat
  }));

  useEffect(() => {
    fetchRandomCat();
  }, [fetchRandomCat]);

  useEffect(() => {
    if (autoRefresh && enabled) {
      const interval = setInterval(fetchRandomCat, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, enabled, fetchRandomCat]);

  if (error) {
    return (
      <div className={styles.catImageWrapper} role="alert">
        <p className={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.catImageWrapper} tabIndex={0} aria-label="Картинка кота">
      {isLoading ? (
        <div className={styles.loader}>Загрузка...</div>
      ) : (
        <img 
          src={imageUrl || ''} 
          alt="Случайный кот" 
          className={styles.catImage}
          onError={() => setError("Ошибка загрузки изображения")}
        />
      )}
    </div>
  );
});

CatViewerImage.displayName = 'CatViewerImage';

export { CatViewerImage };