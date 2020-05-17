import { moralEducationData } from "./courses/moralEducation/store";
import { spaceData } from "./courses/oceanEverything/cosmos/store";
import { earthData } from "./courses/oceanEverything/planet/store";
import { bodyData } from "./courses/humanBody/store";
import { languageData } from "./courses/language/store";
import { creativeData } from "./courses/creativeThinking/store";

export class allMedia {
  getAll() {
    return {
      language: {
        data: languageData,
        usp:
          "Language is so important for us to be able to work with others. Let's get better together!",
        title: "LANGUAGE",
      },
      stories: {
        data: moralEducationData,
        usp:
          "Welcome to a world of stories and fun! Click on any picture to play!",
        title: "STORIES",
      },
      earth: {
        data: earthData,
        usp:
          "The world around us is so beautiful and vast. Let's learn about it!",
        title: "OUR PLANET",
      },
      body: {
        data: bodyData,
        usp:
          "There is so much we can wonder and learn about health, and our bodies. Let's dive right into it!",
        title: "HEALTH",
      },
      space: {
        data: spaceData,
        usp: "Ever looked at the sky and wondered where it all came from?",
        title: "SPACE",
      },
      creative: {
        data: creativeData,
        usp:
          "Let's have some fun and explore the world of imagination and curiosity!",
        title: "CREATIVE",
      },
    };
  }

  getLanguage() {
    return languageData;
  }

  getMoralEducation() {
    return moralEducationData;
  }

  getSpace() {
    return spaceData;
  }

  getEarth() {
    return earthData;
  }

  getBody() {
    return bodyData;
  }

  getCreative() {
    return creativeData;
  }

  getPageMeta(pageStates, currentPage) {
    const arr = pageStates.filter(function (item) {
      return item["title"] === currentPage;
    });
    if (currentPage !== "home")
      return [arr[0]["state"], arr[0]["class"], arr[0]["setState"]];
    return [];
  }
}
