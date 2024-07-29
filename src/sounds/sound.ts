import { Howl } from "howler";
import Click from "assets/sounds/click.mp3";
import Intro from "assets/sounds/intro.mp3";
import Success from "assets/sounds/success.mp3";
import ErrorTrack from "assets/sounds/error.wav";

import Typing from "assets/sounds/typing.mp3";

export const ButtonClickSound = new Howl({
  src: Click,
  preload: false,
  volume: 1,
});
export const IntroSound = new Howl({
  src: Intro,
  loop: true,
  volume: 0.1,
  preload: false,
});
export const SuccessSound = new Howl({ src: Success });
export const ErrorSound = new Howl({ src: ErrorTrack });
export const TypingSound = new Howl({ src: Typing });
export const PlaySound = (sound: Howl) => {
  sound.load();
  sound.play();
  sound.fade(0, 1, 1000);
  if (sound == IntroSound) {
    IntroSound.volume(0.1);
  } else sound.volume(1);
};

export const FadeOutSound = (sound: Howl) => {
  if (sound.playing()) {
    sound.fade(1, 0, 1000);
    setTimeout(() => {
      sound.pause();
    }, 1000);
  }
};

export const sounds = [ButtonClickSound, ErrorSound, SuccessSound, TypingSound];
