import { app } from "./app";

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});