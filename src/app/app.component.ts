import { Component, ViewEncapsulation } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  value =
    '<p>Tiptap gives you full control about every single aspect of your text editor experience. It’s customizable, comes with a ton of extensions, is open source and has an extensive documentation</p>';

  editor = new Editor({
    extensions: [StarterKit, Placeholder],
    editorProps: {
      attributes: {
        class: 'p-2 focus:border-none border-black border-t-2 outline-none',
        spellcheck: 'false',
      },
    },
  });

  ngOnInit() {}
}
