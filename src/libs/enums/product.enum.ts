export enum ProductSize {
  POCKET = "POCKET", // kichkina, cho'ntak formati
  STANDARD = "STANDARD", // odatiy format
  LARGE = "LARGE", // kattaroq format
  DELUXE = "DELUXE", // maxsus nashr
}

export enum ProductVolume {
  SINGLE = "World_History", // bitta jild
  DOUBLE = "History_of_Religion", // ikki jildlik
  TRIPLE = "History_of_Uzbekistan", // uch jildlik
}

export enum ProductStatus {
  PAUSE = "PAUSE",
  PROCESS = "PROCESS",
  DELETE = "DELETE",
}

export enum ProductCollection {
  FICTION = "FICTION", // badiiy
  NON_FICTION = "NON_FICTION", // badiiy bo'lmagan
  SCIENCE = "SCIENCE", // ilmiy
  HISTORY = "HISTORY", // tarixiy
  CHILDREN = "CHILDREN", // bolalar adabiyoti
  OTHER = "OTHER", // boshqa
}
