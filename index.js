import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// UTC AND CURRENT DAY OF THE WEEK
var utc = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekdays[utc.getDay()];

app.get('/api?', async (req, res) =>{
    const slackName = req.query.slack_name;
    const track = req.query.track;
    res.status(200).json({
        "slack_name": slackName,
        "current_day": dayOfWeek,
        "utc_time": utc,
        "track": track,
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200
      })
});


const PORT = process.env.PORT || 1000;
app.listen(PORT, ()=> { console.log(`Server running on port ${PORT}`)});