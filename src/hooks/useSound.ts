import { useEffect, useState } from "react";
import { IntroSound, sounds } from "sounds";

export const useSound = () => {
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);

  useEffect(() => {
    for (var track of sounds) {
      track.mute(!sound);
    }
  }, [sound]);

  useEffect(() => {
    IntroSound.mute(!music);
    IntroSound.volume(0.1);
  }, [music]);

  return { sound, setSound, music, setMusic };
};
