require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5001;

const app = express();

app.get('/endpoint-1', (req, res, next) =>
	res
		.status(200)
		.json({ success: true, data: { message: 'Hello from endpoint 1' } })
);

app.get('/endpoint-2', (req, res, next) =>
	res
		.status(200)
		.json({ success: true, data: { message: 'Hello from endpoint 2' } })
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
