import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'

import './index.css'

const MatchStats = props => {
  const {recentMatchesDetails} = props
  let wonCount = 0
  let lostCount = 0
  let drawnCount = 0

  recentMatchesDetails.forEach(eachItem => {
    if (eachItem.matchStatus === 'Won') {
      wonCount += 1
    } else if (eachItem.matchStatus === 'Lost') {
      lostCount += 1
    } else {
      drawnCount += 1
    }
  })

  const pieData = [
    {
      count: wonCount,
      stats: 'Won',
    },
    {
      count: lostCount,
      stats: 'Lost',
    },
    {
      count: drawnCount,
      stats: 'Drawn',
    },
  ]
  return (
    <div className="match-stats">
      <div className="match-stats-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={pieData}
              startAngle={90}
              endAngle={-270}
              dataKey="count"
              nameKey="stats"
            >
              <Cell name="Won" fill="#028a0f" />
              <Cell name="Lost" fill="#cc0000" />
              <Cell name="Drawn" fill="#FFFF00" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MatchStats
