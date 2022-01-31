import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Antony3 from "./Antony3/Antony3.js";
import Antony7 from "./Antony7/Antony7.js";
import Antony10 from "./Antony10/Antony10.js";
import CompletedeficientjavalinaSizeRestricted from "./CompletedeficientjavalinaSizeRestricted/CompletedeficientjavalinaSizeRestricted.js";
import StoryH from "./StoryH/StoryH.js";
import StoryB from "./StoryB/StoryB.js";
import StoryD from "./StoryD/StoryD.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Antony3: new Antony3({
    x: 170,
    y: -100,
    direction: 90,
    costumeNumber: 15,
    size: 50,
    visible: true
  }),
  Antony7: new Antony7({
    x: 161,
    y: 100,
    direction: 90,
    costumeNumber: 3,
    size: 50,
    visible: true
  }),
  Antony10: new Antony10({
    x: -155,
    y: 91,
    direction: 90,
    costumeNumber: 3,
    size: 50,
    visible: true
  }),
  CompletedeficientjavalinaSizeRestricted: new CompletedeficientjavalinaSizeRestricted(
    {
      x: -152,
      y: -79,
      direction: 90,
      costumeNumber: 109,
      size: 50,
      visible: true
    }
  ),
  StoryH: new StoryH({
    x: -83,
    y: -13,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  StoryB: new StoryB({
    x: -30,
    y: -14,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  StoryD: new StoryD({
    x: 19,
    y: -14,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
