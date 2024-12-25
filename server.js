import jsonServer from 'json-server';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);



server.post('/execute', (req, res) => {
    console.log('Received request:', req.body);

    const { language, code } = req.body;

    let output = '';
    if (language === 'javascript') {
        try {
            const consoleOutput = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleOutput.push(args.join(" "));
            };
            eval(code);
            console.log = originalConsoleLog;
            output = consoleOutput.join("\n");
        } catch (err) {
            console.log('Execution error:', err.message);
            output = `Ошибка выполнения: ${err.message}`;
        }
    } else if (language === 'python') {
        output = 'Python код не поддерживается в этой версии.';
    }

    console.log('Successful execution:', output);
    res.json({ status: 'success', output });
});

server.listen(3001, () => {
    console.log('JSON Server is running on port 3001');
});

// server.use((req, res, next) => {
//     if (req.path !== '/execute') {
//         return res.status(404).json({ error: 'Not found' });
//     }
//     next();
// });

// if (!language || !code) {
//     console.log('Invalid request body');
//     return res.status(400).json({ status: 'error', error: 'Missing language or code' });
// }
//
// if (code.includes('error')) {
//     console.log('Code contains error');
//     return res.status(400).json({ status: 'error', error: 'SyntaxError: Unexpected token' });
// }

