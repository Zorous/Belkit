"use client"
import { useState } from 'react'
import { Download } from 'lucide-react'
import clsx from 'clsx'

const sizeMap = {
  icon: { width: 32, height: 32 },
  small: { width: 64, height: 64 },
  medium: { width: 200, height: 200 },
  banner: { width: 800, height: 200 },
  full: { width: 1200, height: 800 },
}

type SmartImageProps = {
  src: string
  fallback?: string
  alt?: string
  size?: keyof typeof sizeMap
  className?: string
  isDownloadable?: boolean
  expandOnClick?: boolean
}

export function SmartImage({
  src,
  fallback,
  alt = '',
  size = 'medium',
  className,
  isDownloadable = false,
  expandOnClick = false,
}: SmartImageProps) {
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)

  const { width, height } = sizeMap[size]

  const imageSrc = error && fallback ? fallback : src

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onError={() => setError(true)}
        className={clsx(
          'cursor-pointer rounded object-cover',
          className
        )}
        onClick={() => expandOnClick && setShowModal(true)}
      />

      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={alt}
              className="max-w-full max-h-full rounded-lg object-contain"
            />

            {isDownloadable && (
              <a
                href={imageSrc}
                download
                className="absolute top-3 right-3 bg-white/70 p-2 rounded-full hover:bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-5 h-5 text-black" />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
