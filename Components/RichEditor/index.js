import React, { Component } from "react";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic"
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor
          initialEditorState={editorState}
          wrapperStyle={wrapperStyle}
          toolbarStyle={toolbarStyle}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: {
              bold: { className: 'demo-option-custom' },
              italic: { className: 'demo-option-custom' },
              underline: { className: 'demo-option-custom' },
              strikethrough: { className: 'demo-option-custom' },
              monospace: { className: 'demo-option-custom' },
              superscript: { className: 'demo-option-custom' },
              subscript: { className: 'demo-option-custom' },
            },
            blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
            fontSize: { className: 'demo-option-custom-medium' },
            list: {
              unordered: { className: 'demo-option-custom' },
              ordered: { className: 'demo-option-custom' },
              indent: { className: 'demo-option-custom' },
              outdent: { className: 'demo-option-custom' },
            },
            textAlign: {
              left: { className: 'demo-option-custom' },
              center: { className: 'demo-option-custom' },
              right: { className: 'demo-option-custom' },
              justify: { className: 'demo-option-custom' },
            },
            fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
            colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
            link: {
              popupClassName: 'demo-popup-custom',
              link: { className: 'demo-option-custom' },
              unlink: { className: 'demo-option-custom' },
            },
            emoji: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
            embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
            image: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
            remove: { className: 'demo-option-custom' },
            history: {
              undo: { className: 'demo-option-custom' },
              redo: { className: 'demo-option-custom' },
            },
          }}
        />
      </div>
    );
  }
}