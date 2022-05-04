// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import comments from "../../comments.json";

export default (req, res) => {
    res.status(200).json(comments);
};
