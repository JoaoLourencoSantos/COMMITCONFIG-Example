import app from "./app";

app.listen(process.env.PORT || 3000, async () => {
  console.log("Application started on port " + (process.env.PORT || 3000));
});
