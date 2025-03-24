const express = require('express');
const app = express();

app.get('/oauth/callback', (req, res) => {
    const code = req.query.code;
    const state = req.query.state;
    console.log("Authentication Code: ", code);
    res.send(`OAuth 인증 완료! Code: ${code}, State: ${state}`);
});

app.listen(3000, () => {
    console.log('서버 실행 중: http://localhost:3000');
});