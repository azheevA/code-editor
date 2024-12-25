import React, { useState, useEffect } from 'react';
import styles from './mockCode.module.scss'
interface MockCodeProps {
    code: string;
    language: string;
}

const MockCode: React.FC<MockCodeProps> = ({ code, language }) => {
    const [result, setResult] = useState<string>('Загрузка...');
    const [error, setError] = useState<string | null>(null);


    const executeCode = async () => {
        try {
            const response = await fetch('http://localhost:3001/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({
                    language: language,
                    code: code
                })
            });

            const data = await response.json();
            if (data.status === 'success') {
                setResult(data.output);
            } else {
                setResult(`Ошибка: ${data.error}`);
            }
        } catch (error) {
            setError('Ошибка соединения с сервером');
        }
    };

    useEffect(() => {
        executeCode();
    }, []);

    return (
        <div>

            <button className={styles.btn} onClick={executeCode}>Компилировать по моковым данным</button>

            <div className={styles.result} >{error ? error : result}</div>

        </div>
    );
};

export default MockCode;

