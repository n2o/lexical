import {$ReadOnly} from 'utility-types';
import type {
  ElementTransformer,
  TextFormatTransformer,
  TextMatchTransformer,
  Transformer,
} from '../../flow/LexicalMarkdown';
export function indexBy<T>(
  list: Array<T>,
  callback: (arg0: T) => string,
): $ReadOnly<Record<string, Array<T>>> {
  const index = {};

  for (const item of list) {
    const key = callback(item);

    if (index[key]) {
      index[key].push(item);
    } else {
      index[key] = [item];
    }
  }

  return index;
}
export function transformersByType(
  transformers: Array<Transformer>,
): $ReadOnly<{
  element: Array<ElementTransformer>;
  textFormat: Array<TextFormatTransformer>;
  textMatch: Array<TextMatchTransformer>;
}> {
  const byType = indexBy(transformers, (t) => t.type);
  return {
    // $FlowFixMe
    element: byType.element,
    // $FlowFixMe
    textFormat: byType['text-format'],
    // $FlowFixMe
    textMatch: byType['text-match'],
  };
}
