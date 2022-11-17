import React, { Component } from "react";
import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then(mod => mod.Editor);
  },
  { ssr: false }
);

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="border border-black">
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="The message goes here..."
        />
      </div>
    );
  }
}

export default RichEditor;