import { moralEducationData } from "./courses/moralEducation/store";
import { spaceData } from "./courses/oceanEverything/cosmos/store";
import { earthData } from "./courses/oceanEverything/planet/store";
import { bodyData } from "./courses/humanBody/store";
import { languageData } from "./courses/language/store";
import { creativeData } from "./courses/creativeThinking/store";

export class allMedia {
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
}
