"use client"
import {useState, useEffect} from "react";

interface Size {
    windowSize: number | undefined;
}

export const useWindowSize = (): Size => {

    const [windowSize, setWindowSize] = useState<Size>({
        windowSize: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                windowSize: window.innerWidth,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}