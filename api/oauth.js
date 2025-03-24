export default function handler(req, res) {
    const { code, state } = req.query;
    console.log("Authorization Code:", code);
    res.status(200).send(`OAuth 인증 완료! Code: ${code}, State: ${state}`);
}