import { useEffect, useRef } from 'react';

function drawPixelatedImage({ canvas, image, cropY = 0.5, pixelSize = 12 }) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  if (!sourceWidth || !sourceHeight) return;

  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = width / height;

  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;

  if (sourceRatio > targetRatio) {
    sw = sourceHeight * targetRatio;
    sx = (sourceWidth - sw) / 2;
  } else {
    sh = sourceWidth / targetRatio;
    sy = (sourceHeight - sh) * cropY;
  }

  const tinyCanvas = document.createElement('canvas');
  tinyCanvas.width = Math.max(12, Math.floor(width / pixelSize));
  tinyCanvas.height = Math.max(12, Math.floor(height / pixelSize));

  const tinyCtx = tinyCanvas.getContext('2d');
  if (!tinyCtx) return;

  tinyCtx.imageSmoothingEnabled = true;
  tinyCtx.clearRect(0, 0, tinyCanvas.width, tinyCanvas.height);
  tinyCtx.drawImage(image, sx, sy, sw, sh, 0, 0, tinyCanvas.width, tinyCanvas.height);

  ctx.clearRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tinyCanvas, 0, 0, tinyCanvas.width, tinyCanvas.height, 0, 0, width, height);
}

export default function PixelatedImage({
  src,
  alt = '',
  className = '',
  cropY = 0.2,
  pixelSize = 12,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return undefined;

    const image = new Image();
    image.src = src;
    image.alt = alt;
    image.decoding = 'async';

    const redraw = () => drawPixelatedImage({ canvas, image, cropY, pixelSize });

    image.onload = redraw;

    const observer = new ResizeObserver(() => redraw());
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [src, alt, cropY, pixelSize]);

  return <canvas ref={canvasRef} aria-label={alt} className={className} />;
}
