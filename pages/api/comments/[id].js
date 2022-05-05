import comments from "../../../comments.json";

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            res.status(200).json({ post: req.query.id, comments });

            break;
        case "POST":
            //...handle the POST request here
            break;
        default:
            res.status(405).end();
            break;
    }
}
