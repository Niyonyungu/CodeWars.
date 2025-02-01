// practical tests



const players = [
    { name: 'messi', goals: 30 },
    { name: 'ronaldo', goals: 25 },
    { name: 'neymar', goals: 15 },
    { name: 'mbappe', goals: 28 },
    { name: 'haaland', goals: 35 },
]

const results = players
    .filter(player => player.goals > 20)
    .map(player => player.name)
    .sort()
    .reverse()

console.log(results)



