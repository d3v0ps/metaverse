
import { DesignStyle } from '../models/design-style';
import { animations } from './animations';
import { arms } from './arms';
import { backs } from './backs';
import { bodyTypes } from './body-types';
import { bodyVariations } from './body-variations';
import { bothHands } from './both-hands';
import { directions } from './directions';
import { ears } from './ears';
import { eyes } from './eyes';
import { facialHairStyles } from './facial-hair-styles';
import { feet } from './feet';
import { hairColors } from './hair-colors';
import { hairStyles } from './hair-styles';
import { headAccesories } from './head-accesories';
import { headVisors } from './head-visors';
import { heads } from './heads';
import { leftHands } from './left-hands';
import { legs } from './legs';
import { noses } from './noses';
import { rightHands } from './right-hands';
import { torsos } from './torsos';

export const lpcDesignStyle: DesignStyle = {
  id: 'lpc',
  license: { type: 'GPL 3.0' },
  name: 'Liberated Pixel Cup',
  description: `Liberated Pixel Cup is a two-part competition: make a bunch of awesome free culture licensed artwork, and then program a bunch of free software games that use it.`,
  url: 'https://opengameart.org/content/lpc-collection',
  hasViewer: true,
  properties: [
    {
      id: 'animation',
      type: 'select',
      label: 'Animation',
      options: animations
    },
    {
      id: 'direction',
      type: 'select',
      label: 'Direction',
      options: directions
    },
    {
      id: 'bodyType',
      type: 'color',
      label: 'Body Type',
      options: bodyTypes
    },
    {
      id: 'bodyVariation',
      type: 'select',
      label: 'Body Variation',
      options: bodyVariations
    },
    {
      id: 'ears',
      type: 'select',
      label: 'Ears',
      options: ears
    },
    {
      id: 'eyes',
      type: 'color',
      label: 'Eyes',
      options: eyes
    },
    {
      id: 'nose',
      type: 'select',
      label: 'Nose',
      options: noses
    },
    {
      id: 'hair',
      type: 'select',
      label: 'Hair',
      options: hairStyles
    },
    {
      id: 'hairColor',
      type: 'color',
      label: 'Hair Color',
      options: hairColors
    },
    {
      id: 'facialHair',
      type: 'select',
      label: 'Facial Hair',
      options: facialHairStyles
    },
    {
      id: 'facialHairColor',
      type: 'color',
      label: 'Facial Hair Color',
      options: hairColors
    },
    {
      id: 'head',
      type: 'select',
      label: 'Head',
      options: heads
    },
    {
      id: 'visor',
      type: 'select',
      label: 'Head Visor',
      options: headVisors
    },
    {
      id: 'headAccesory',
      type: 'select',
      label: 'Head Accesory',
      options: headAccesories
    },
    {
      id: 'torso',
      type: 'select',
      label: 'Torso',
      options: torsos
    },
    {
      id: 'torso2',
      type: 'select',
      label: 'Torso 2',
      options: torsos
    },
    {
      id: 'arms',
      type: 'select',
      label: 'Arms',
      options: arms
    },
    {
      id: 'back',
      type: 'select',
      label: 'Back',
      options: backs
    },
    {
      id: 'legs',
      type: 'select',
      label: 'Legs',
      options: legs
    },
    {
      id: 'feet',
      type: 'select',
      label: 'Feet',
      options: feet
    },
    {
      id: 'leftHand',
      type: 'select',
      label: 'Left Hand',
      options: leftHands
    },
    {
      id: 'rightHand',
      type: 'select',
      label: 'Right Hand',
      options: rightHands
    },
    {
      id: 'bothHands',
      type: 'select',
      label: 'Both Hands',
      options: bothHands
    },
  ]
}
