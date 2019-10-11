const sqliteJson = require('sqlite-json');
const exporter = sqliteJson('./pelicans.mdb');
const fs = require('fs');

const fixName = name => name.toLowerCase().split(" ").join('-').replace(/å/, 'a').replace('ä', 'a').replace('ö', 'o');

exporter.json("SELECT rowid2, season, jerseyno, name, games, goals, assists, points, plus, minus, diff, pim, stat_type, league_level FROM stats_csv", (err, json) => {
    if(err) { console.error(err); return; }
    let data = JSON.parse(json).map(d => {
        let player_id = fixName(d.name);
        if(d.rowid2 === 999) player_id += "-2";
        return { ...d, player_id }
    });
    fs.writeFile('../src/data/stats.json', JSON.stringify(data), (err) => {
        if(err) console.error(err);
        else console.log('stats created');
    });
});

exporter.json("SELECT rowid, name, birthdate, birthplace, position, nationality from players_csv", (err, json) => {
    if(err) { console.error(err); return; }
    let data = JSON.parse(json).map(d => {
        let player_id = fixName(d.name);
        if(d.rowid === "999") player_id += "-2";
        return { ...d, player_id }
    });
    fs.writeFile('../src/data/players.json', JSON.stringify(data), (err) => {
        if(err) console.error(err);
        else console.log('stats created');
    });
});

exporter.json("SELECT gamedate, teamid, teamname, home, gf, ga, overtime, dummy as attendance, season, gametype from games_csv", (err, json) => {
    if(err) { console.error(err); return; }
    fs.writeFile('../src/data/games.json', json, (err) => {
        if(err) console.error(err);
        else console.log("games created");
    });

});

exporter.json("SELECT season, teamid, teamname, games, wins, ties, losses, gf, ga, points from tables_csv", (err, json) => {
    if(err) { console.error(err); return; }
    fs.writeFile('../src/data/tables.json', json, (err) => {
        if(err) console.error(err);
        else console.log("tables created");
    });

});