export type Trash = {
    lat: number;
    lng: number;
    type: TrashType;
}

export type TrashType = 'plastic' | 'metal' | 'paper' | 'glass' | 'organic';

export const trashTypeToImageDirectory: Record<TrashType, string> = {
    plastic: '../icons/plastic.svg',
    metal: '../icons/metal.svg',
    paper: '../icons/paper.svg',
    glass: '../icons/glass.svg',
    organic: '../icons/organic.svg',
  };