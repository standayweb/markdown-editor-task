// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

declare type ElementEventTemplate<E> = {
  target: E,
} & Event;

declare type TextAreaEvent = ElementEventTemplate<HTMLTextAreaElement>;
