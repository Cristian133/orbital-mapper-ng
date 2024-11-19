import { ClassificationType } from "./celestrak.enum";

export interface ElementSet {
  OBJECT_NAME:         string;
  OBJECT_ID:           string;
  EPOCH:               string;
  MEAN_MOTION:         number;
  ECCENTRICITY:        number;
  INCLINATION:         number;
  RA_OF_ASC_NODE:      number;
  ARG_OF_PERICENTER:   number;
  MEAN_ANOMALY:        number;
  EPHEMERIS_TYPE:      number;
  CLASSIFICATION_TYPE: ClassificationType;
  NORAD_CAT_ID:        number;
  ELEMENT_SET_NO:      number;
  REV_AT_EPOCH:        number;
  BSTAR:               number;
  MEAN_MOTION_DOT:     number;
  MEAN_MOTION_DDOT:    number;
}
