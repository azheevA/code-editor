import React, {FormEvent, useState} from 'react';
import { v4 } from 'uuid';
import {ICode} from "../Types/Code.interface.ts";

interface ICodeSavedProps {
    CodeSaved?: (savedPost: ICode) => void;
}
const SaveCode:React.FC<ICodeSavedProps> = ({CodeSaved}) => {
    const[code, setCode] = useState<ICode>({ id: -1, name: '', profession: ''})

    const  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const  Code = {id: v4(), name: code.name, profession: code.profession};

            const  response = await fetch('http://localhost:3000/code/',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Code),
            });
            if(!response.ok) throw new Error('error');
            const  newCode: ICode = await response.json();
            console.log("Ответ от сервера:", newCode);
            setCode({name: '', profession: ''});
            if(CodeSaved) CodeSaved(newCode);

        }catch (error){
            const err = error as Error;
            if(err.message === 'error'){
                console.error('Ошибка:', error);
            }
        }
    }
    return (
        <div>
            <h1>Сохранить данные</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ф.И.О.  :  </label>
                    <input
                        type="text"
                        value={code.name}
                        name="name"
                        onChange={(e) => setCode({...code, [e.target.name]: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label>Профессия  :  </label>
                    <input
                        type="text"
                        value={code.profession}
                        name="profession"
                        onChange={(e) => setCode({...code, [e.target.name]: e.target.value})}
                        required
                    />
                </div>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default SaveCode;