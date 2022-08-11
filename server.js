const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const fortune = ["A beautiful, smart, and loving person will be coming into your life",
"A dubious friend may be an enemy in camouflage",
"A faithful friend is a strong defense",
"A feather in the hand is better than a bird in the air",
"A fresh start will put you on your way",
]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life",
					 "A dubious friend may be an enemy in camouflage",
					 "A faithful friend is a strong defense",
           "A feather in the hand is better than a bird in the air",
           "A fresh start will put you on your way",

  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomfortune = fortune[randomIndex];

  res.status(200).send(randomfortune);
  
});
app.get("/api/lifeAdvise", (req, res) => {
  const lifeAdvise = ["Take time to know yourself",
					 "Show up fully",
					 "A narrow focus brings big results",
           "Don't make assumptions",
           "Be patient and persistent",

  ];
  let randomIndex = Math.floor(Math.random() * lifeAdvise.length);
  let randomAdvise = lifeAdvise[randomIndex];

  res.status(200).send(randomAdvise);
  
});

app.get('/api/inventory', (req,res) => {

  if (req.query.item) {
      const filterItems = fortune.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
      res.status(200).send(filterItems)
  } else {
      res.status(200).send(fortune)
  }


})

app.get('/api/inventory/:idex', (req, res) => {
  console.log(req.param)
  const item = fortune[+req.params.idex]

  res.status(200).send(item)
})


app.post('/api/addForture', (req, res) => {
  const { newFortune } = req.body
  fortune.push(newFortune)
  res.status(200).send(fortune)
  console.log(fortune)
})

app.listen(4000, () => console.log("Server running on 4000"));