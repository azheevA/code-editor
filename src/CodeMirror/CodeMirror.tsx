import React, { useState } from "react";
import CodeMirrorEditor from "../CodeMirrorEditor/CodeMirrorEditor";
import styles from './CodeMirror.module.scss'
import MockCode from "../mockData/mockCode.tsx";
const CodeMirrorApp: React.FC = () => {
    const [code, setCode] = useState<string>("// Напишите свой код здесь\n");
    const [language, setLanguage] = useState<"javascript" | "python">("javascript");
    const [output, setOutput] = useState<string>("");


    const compileCode = () => {
        if (language === "javascript") {
            try {
                let consoleOutput: string[] = [];
                const originalConsoleLog = console.log;
                console.log = (...args: any[]) => {
                    consoleOutput.push(args.join(" "));
                    originalConsoleLog(...args);
                };
                const result = eval(code);

                console.log = originalConsoleLog;
                setOutput(consoleOutput.join("\n") || result?.toString() || "undefined");
            } catch (err) {
                setOutput(`Ошибка: ${err}`);
            }
        } else if (language === "python") {
            setOutput("Выполнение Python-кода не поддерживается в этом примере.");
        }
    };


    return (
        <div>
            <div className={styles.wrapper__h1}>
                <h1 className={styles.h1}>Код редактор</h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.editor}>
                    <div className={styles.lang}>
                        <select
                            value={language}
                            className={styles.select}
                            onChange={(e) => setLanguage(e.target.value as "javascript" | "python")}
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                        </select>
                    </div>
                    <CodeMirrorEditor value={code} onChange={setCode} language={language} />
                    <MockCode code={code} language={language}/>
                </div>
                <button
                    onClick={compileCode}
                    className={styles.btn}
                    style={{

                    }}
                >
                    Компилировать
                </button>
                <h2>Результат компиляции:</h2>
                <div
                    className={styles.output}
                >
                    {output}
                </div>
            </div>
        </div>
    );
};

export default CodeMirrorApp;
