import { FC, useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import styles from  './CodeMirrorEditor.module.scss';
interface CodeMirrorEditorProps {
    value: string;
    onChange: (newValue: string) => void;
    language: "javascript" | "python";
}

const CodeMirrorEditor: FC<CodeMirrorEditorProps> = ({ value, onChange, language }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const viewRef = useRef<EditorView | null>(null);



    useEffect(() => {
        if (editorRef.current) {
            const view =  EditorView.theme({
                ".cm-content": {
                    color: "lightblue",
                    backgroundColor: "#1e1e1e",
                    fontFamily: "monospace",
                },
                ".cm-number": {
                    color: "lightblue",
                },
                "&.cm-editor": {
                    width: "100%",
                    height: "300px",
                    border: "1px solid #555",
                    overflow: "auto"
                },
                "&.cm-focused": {
                    outline: "2px solid #000",
                },
                ".cm-cursor": {
                    borderLeft: "2px solid white",
                },
                });

            const languageExtension = language === "javascript" ? javascript() : python();

            const state = EditorState.create({
                doc: value,
                extensions: [
                    basicSetup,
                    view,
                    languageExtension,

                    EditorView.updateListener.of((update) => {
                        if (update.docChanged) {
                            const newValue = update.state.doc.toString();
                            onChange(newValue);
                        }
                    }),
                ],
            });
            viewRef.current?.destroy();

            if(editorRef.current){
                viewRef.current = new EditorView({
                    state,
                    parent: editorRef.current!,

                });
            }
        }

        return () => {
            viewRef.current?.destroy();
        };
    }, [language]);

    useEffect(() => {
        if (viewRef.current) {
            const currentDoc = viewRef.current!.state.doc.toString();
            if (currentDoc !== value) {
                viewRef.current!.dispatch({
                    changes: { from: 0, to: currentDoc.length, insert: value },
                });
            }
        }
    }, [value]);
    return (
            <div
                ref={editorRef}
                className={styles.codemirror}
            />

    );
};

export default CodeMirrorEditor;
