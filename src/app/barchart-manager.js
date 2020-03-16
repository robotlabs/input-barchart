import * as d3 from 'd3'
export const barchartManager = (data, g) => {
  const easeCubic = d3.easeCubic
  const w = window.innerWidth - 40

  const x = d3.scaleLinear()
    .range([0, w])
    .domain([0, d3.max(data, (d) => {
      return Number(d.age)
    })])
  const y = d3.scaleBand()
    .rangeRound([0, 400])
    .padding(0.1)
    .domain(data.map((d) => {
      return d.id
    }))

  var colorScale = d3.scaleSequential(d3.interpolateRainbow)
    .domain([0, data.length])

  //* * set bars datum
  var bars = g.selectAll('rect')
    .data(data, function (d) {
      return d.id
    })

  //* * REMOVE
  bars.exit()
    .remove()

  //* * ENTER + MERGE
  bars
    .enter().append('rect')
    .attr('class', 'bar')
    // init
    .attr('x', (d) => {
      return 0
    })
    .attr('y', (d) => {
      return y(d.id)
    })
    .attr('height', y.bandwidth())
    // merge
    .merge(bars)
    // animation
    .transition()
    .ease(easeCubic)
    .duration(1000)
    // animate in
    .attr('fill', (d, i) => {
      return colorScale(i)
    })
    .attr('x', (d) => {
      return 0
    })
    .attr('y', (d) => {
      return y(d.id)
    })
    .attr('width', (d) => {
      return x(d.age)
    })
    .attr('height', y.bandwidth())
}
