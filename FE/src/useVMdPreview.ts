import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
export default function useVMdPreview() {
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });
  return VMdPreview;
}
