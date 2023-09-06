import express from "express"
// import cors from "cors";
// import bodyParser from "body-parser";
// import UserRoutes from './routes'
import ErrorMiddleware from './middlewares/ErrorMiddleware'

const PORT = process.env.PORT || 3000;

const app = express();
// app.use(cors());
// app.use(bodyParser.json());

app.use(ErrorMiddleware.handle);

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}!`));

export default app;