import { useEffect, useRef, useState } from "react";
import { PlaySound, TypingSound } from "sounds";

interface UseTypingProps {
  initialText: string;
  resultText: string;
  playing: boolean;
}

export const useTyping = ({
  initialText,
  resultText,
  playing,
}: UseTypingProps) => {
  const [text, _setText] = useState(initialText);
  const textRef = useRef(initialText);
  const setText = (val: string) => {
    textRef.current = val;
    _setText(val);
  };

  useEffect(() => {
    if (playing && textRef.current.length !== resultText.length) {
      PlaySound(TypingSound);
      const interval = setInterval(() => {
        if (textRef.current.length === resultText.length) {
          clearInterval(interval);
          TypingSound.pause();
          return;
        }
        setText(textRef.current + resultText.charAt(textRef.current.length));
      }, 50);

      return () => {
        clearInterval(interval);
        TypingSound.pause();
      };
    }
  }, [playing]);

  return (
    <div className="text-transparent">
      <span className="text-white">{text}</span>
      {resultText.substring(text.length)}
    </div>
  );
};
