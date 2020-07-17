
// Imports the entire library
import { tween } from 'popmotion'

// Imports a specific subset of the library
import tween from 'popmotion/animations/tween';

    const container = popmotion.styler(document.querySelector(".service-p"));

    popmotion
      .tween({
        from: {
          scale: 0.4,
          opacity: 0,
          y: -300,
        },
        to: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
        duration: 1000,
      })
      .start(container.set);
