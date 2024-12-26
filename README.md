# Приложение "Код редактор"
## Простое React-приложение, на котором можно писать код на языках javascript и python. Приложение реализована с использованием codemirror 
как основа самой идеи. Развернут с помощью сборщика **_vite_** на языке *typescript*.
Ссылку на GitHub Pages: [https://azheeva.github.io/code-editor/](https://azheeva.github.io/code-editor/)

Технологии

    - TypeScript
    - React (^18.3.1)
    - React-router-dom (^7.1.1)
    - Codemirror
    - Vite
    - concurrently
    - json-server

## Запуск
`npm run dev`
вместе с запуском сборки, происходит запуск сервера *node server.js* благодаря пакету concurrently.

Вы можете клонировать проект командой:
`git clone https://github.com/azheevA/code-editor.git`
перед этим указав папку через команду `cd`.
### Необходимые зависимости 
Чтобы установить необходимые зависимости пропишите или скопируйте в термина команду:

      `npm install` 
или просто кратко:
      `npm i`
      
## Описание компонентов
 - App — Корневой компонент, который реализует необходимую маршрутизацию.
 - Navbar — UI компонент или header, который облегчает переход между основными компонентами.
 - CodeMirror — Основной компонент, в котором как раз реализована оболочка редактора,
а также его запуск и вывод компиляции.
 - CodeMirror — подлючение библиотеки CodeMirror и его конфигурация.
 - MockCode — Компонент, отвечающий за взаимодействие с сервером: отправка кода
 и языка программирования на сервер для выполнения, а также вывод результатов выполнения или ошибок.
 -  Server — Серверная логика выполнения кода, где используется библиотека json-server
    для создания простого (ложного) API, который принимает код от клиента и выполняет его.

        *дерево коспонентов программы*
        src/
        ├── CodeMirror/
        │   ├── CodeMirror.tsx
        │   └── CodeMirror.module.scss
        ├── CodeMirrorEditor/
        │   ├── CodeMirrorEditor.tsx
        │   └── CodeMirrorEditor.module.scss
        ├── MockData/
        │   ├── mockCode.tsx
        │   └── mockCode.module.scss
        ├── ├──...
        ├── Types/
        │   └── Code.Interface.ts
        ├──...
        ├── app.tsx
        ├── app.css
        ├── main.tsx
        ├──...
        ├──server.js
        ├──mockDB.json
        ├──...
        └── ...

