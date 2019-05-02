### Polyfills

In case the tests are run in an emulated browser environment (for instance `jsdom`), the `<RichTextInputArea/>` component might need some polyfills. You can use them as follows:

```javascript
import { scrollBehaviorPolyfill } from 'wix-style-react/dist/testkit/polyfills';

beforeAll(() => {
  scrollBehaviorPolyfill.install();
});

afterAll(() => {
  scrollBehaviorPolyfill.uninstall();
});
```
