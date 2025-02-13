/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {LexicalEditor} from 'lexical';

import {useLexicalCanShowPlaceholder} from '@lexical/react/DEPRECATED_useLexicalCanShowPlaceholder';
import {useCallback} from 'react';

export function useLexicalEditor(
  editor: LexicalEditor,
): [(null | HTMLElement) => void, boolean] {
  const showPlaceholder = useLexicalCanShowPlaceholder(editor);
  const rootElementRef = useCallback(
    (rootElement: null | HTMLElement) => {
      editor.setRootElement(rootElement);
    },
    [editor],
  );

  return [rootElementRef, showPlaceholder];
}
