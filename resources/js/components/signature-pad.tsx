import { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface SignaturePadProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export function SignaturePad({ value, onChange, error }: SignaturePadProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);

    const getContext = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        return canvas.getContext('2d');
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                ctx.strokeStyle = '#00d4ff';
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            }
        };

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();
        if ('touches' in e) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top,
            };
        }
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        isDrawing.current = true;
        const ctx = getContext();
        const pos = getPosition(e);
        ctx?.beginPath();
        ctx?.moveTo(pos.x, pos.y);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing.current) return;
        const ctx = getContext();
        const pos = getPosition(e);
        ctx?.lineTo(pos.x, pos.y);
        ctx?.stroke();
    };

    const stopDrawing = () => {
        if (!isDrawing.current) return;
        isDrawing.current = false;
        const canvas = canvasRef.current;
        if (canvas) {
            onChange(canvas.toDataURL());
        }
    };

    const clear = () => {
        const canvas = canvasRef.current;
        const ctx = getContext();
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            onChange('');
        }
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
                Your Signature *
            </label>
            <div
                className={cn(
                    'relative rounded-lg border bg-white/5',
                    error ? 'border-red-500' : 'border-white/10',
                )}
            >
                <canvas
                    ref={canvasRef}
                    className="h-40 w-full cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
                {!value && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                        Sign here
                    </div>
                )}
            </div>
            <button
                type="button"
                onClick={clear}
                className="text-sm text-brand-300 hover:text-accent"
            >
                Clear signature
            </button>
            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}
