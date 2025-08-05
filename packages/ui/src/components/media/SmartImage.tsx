"use client";
import React, { useState } from "react";
import styles from "./SmartImage.module.css";
import { Download, X } from "lucide-react";
import clsx from "clsx";

const sizeMap = {
  icon: { width: 32, height: 32 },
  small: { width: 64, height: 64 },
  medium: { width: 200, height: 200 },
  banner: { width: 800, height: 200 },
  full: { width: 1200, height: 800 },
};

type SmartImageProps = {
  src: string;
  fallback?: string;
  alt?: string;
  size?: keyof typeof sizeMap;
  className?: string;
  isDownloadable?: boolean;
  expandOnClick?: boolean;
};

export function SmartImage({
  src,
  fallback,
  alt = "",
  size = "medium",
  className,
  isDownloadable = false,
  expandOnClick = false,
}: SmartImageProps) {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const { width, height } = sizeMap[size];
  const imageSrc = error && fallback ? fallback : src;

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onError={() => setError(true)}
        className={clsx(styles.smartImage, className)}
        onClick={() => expandOnClick && setShowModal(true)}
      />

      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className={styles.closeBtn}
              onClick={() => setShowModal(false)}
            >
              
              <X width={24} height={24} />
            </button>

            {/* Modal image */}
            <img src={imageSrc} alt={alt} className={styles.modalImage} />

            {/* Download button */}
            {isDownloadable && (
              <a
                href={imageSrc}
                download
                className={styles.downloadBtn}
                onClick={(e) => e.stopPropagation()}
              >
                <Download width={20} height={20} />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
