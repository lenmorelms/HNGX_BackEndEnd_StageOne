import express from "express";
import dotenv from "dotenv";
import { format } from 'date-fns';

dotenv.config();
const app = express();
app.use(express.json());

// UTC AND CURRENT DAY OF THE WEEK
var date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekdays[date.getDay()];

app.get('/api?', async (req, res) =>{
    const slackName = req.query.slack_name;
    const track = req.query.track;
    res.status(200).json({
        "slack_name": slackName,
        "current_day": dayOfWeek,
        // "utc_time": date.toISOString().split('.')[0] + 'Z',
        "utc_time": format(new Date(), "yyyy-MM-dd'T'HH:mm:ss") + 'Z',
        "track": track,
        "github_file_url": "https://github.com/lenmorelms/HNGX_BackEndEnd_StageOne/blob/main/index.js",
        "github_repo_url": "https://github.com/lenmorelms/HNGX_BackEndEnd_StageOne",
        "status_code": 200
      })
});


const PORT = process.env.PORT || 1000;
app.listen(PORT, ()=> { console.log(`Server running on port ${PORT}`)});