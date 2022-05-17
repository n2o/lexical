import type {State} from 'lexical';
import {
  $isRootTextContentEmpty,
  $isRootTextContentEmptyCurry,
  $rootTextContentCurry,
} from '@lexical/text';
import {$createParagraphNode, $createTextNode, $getRoot} from 'lexical';
import {initializeUnitTest} from 'lexical/src/__tests__/utils';

describe('LexicalRootHelpers tests', () => {
  initializeUnit;
  test((testEnv) => {
    it('textContent', async () => {
      const editor = testEnv.editor;
      expect(editor.getEditorState().read($rootTextContentCurry)).toBe('');
      await editor.update((state: State) => {
        const root = $getRoot();
        const paragraph = $createParagraphNode();
        const text = $createTextNode('foo');
        root.append(paragraph);
        paragraph.append(text);
        expect($rootTextContentCurry()).toBe('foo');
      });
      expect(editor.getEditorState().read($rootTextContentCurry)).toBe('foo');
    });
    it('isBlank', async () => {
      const editor = testEnv.editor;
      expect(
        editor
          .getEditorState()
          .read($isRootTextContentEmptyCurry(editor.isComposing())),
      ).toBe(true);
      await editor.update((state: State) => {
        const root = $getRoot();
        const paragraph = $createParagraphNode();
        const text = $createTextNode('foo');
        root.append(paragraph);
        paragraph.append(text);
        expect($isRootTextContentEmpty(editor.isComposing())).toBe(false);
      });
      expect(
        editor
          .getEditorState()
          .read($isRootTextContentEmptyCurry(editor.isComposing())),
      ).toBe(false);
    });
  });
});
