import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            if (!glowRef.current) return;
            glowRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed top-0 left-0 z-0 w-96 h-96 rounded-full 
        bg-primary/5 dark:bg-primary/8 blur-[100px] transition-transform duration-75 ease-out
        hidden dark:block"
            aria-hidden="true"
        />
    );
};

export default CursorGlow;
