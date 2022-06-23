export enum ICON_NAMES {
  ARROW_DOWN = "ArrowDown",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
  CHEVRON_LEFT = "ChevronLeft",
  CHEVRON_RIGHT = "ChevronRight",
  Q_POINTS = "QPoints",
  TICK = "Tick",
  WARNING = "Warning",
}

export enum ICON_SIZES {
  SM = 15,
  MD = 20,
  LG = 26,
}

export interface IIcon {
  name: ICON_NAMES;
  className?: string;
  size?: ICON_SIZES;
}
