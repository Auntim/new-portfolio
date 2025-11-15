import { useState, useEffect } from "react";

export default function TypingText({ texts, speed = 120, pause = 1200 }) {
    const [display, setDisplay] = useState("");
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);

    useEffect(() => {
        const current = texts[index];

        if (char < current.length) {
            const timeout = setTimeout(() => {
                setDisplay(current.slice(0, char + 1));
                setChar(char + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setChar(0);
                setIndex((prev) => (prev + 1) % texts.length);
            }, pause);

            return () => clearTimeout(timeout);
        }
    }, [char, index, texts, speed, pause]);

    return <>{display}</>;
}
