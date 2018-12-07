const express = require("express");
const app = express();
const port = 8000;
const { ops, validOps, stringify } = require("./operations")

app.get("/", (req, res) => {
  res.send("Hi")
})

app.get("/math/:op", (req, res) => {
  let op = req.params.op
  let answer = {}

  for (let key in req.query) {
    if (isNaN(Number(req.query[key]))) {
      res.send('Please make sure all query values are numbers.')
    } else {
      answer[key] = Number(req.query[key])
    }
  }

  let values = Object.values(req.query) // grab array of values

  res.json({
    input: req.query,
    stringified: stringify(values, op),
    result: ops(values, validOps[op])
  })
})

app.get("*", (req, res) => {
  res.send("whatever")
})


app.listen(port, () => {
  console.log("hi i'm listening to you on port: ", port)
})

  res.json({
    input: req.query,
    stringified: stringify(values, op),
    result: ops(values, op),
  });
});

app.get('*', (req, res) => {
  res.send('whatever');
});

app.listen(port, () => {
  console.log("hi i'm listening to you on port: ", port);
});
