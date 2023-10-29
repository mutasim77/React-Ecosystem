import { useCallback, useEffect, useState } from "react";

const useScroll = (value: number) => {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > value);
    }, [value]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return scrolled;
}

export default useScroll;