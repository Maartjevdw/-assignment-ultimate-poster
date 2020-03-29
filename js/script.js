
map = d3.select("body").append("svg");
map.attr('width', '900').attr('height', '360').style('margin-left', 'auto').style('margin-right', "auto");

map.selectAll('rect').data(cities).enter().append('rect')

    .attr('x', (d) => (~~d.longitude + 180) * 2)
    .attr('y', (d) => (90 - ~~d.latitude) * 2)
    .attr('width', 3)
    .attr('height', 3)
    .attr('rx', 0)
    .attr('ry', 0)

    .style('fill', '#542135')


d3.select('body').append('button').text('RECT').style('margin-left', 'auto').style('margin-right', 'auto')
    .on('click', () => {
        map.selectAll("circle").remove();
        map.selectAll("rect").remove();
        map.selectAll("rect")
            .data(cities).enter().append('rect')

            .attr('x', (d) => (~~d.longitude + 180) * 2)
            .attr('y', (d) => (90 - ~~d.latitude) * 2)
            .attr('width', 3)
            .attr('height', 3)
            .attr('rx', 0)
            .attr('ry', 0)

            .style('fill', '#542135');
    });

d3.select('body').append('button').text('CIRCLE').style('margin-left', 'auto').style('margin-right', 'auto')
    .on('click', () => {
        map.selectAll("rect").remove();
        map.selectAll("circle").remove();
        map.selectAll('cicle')
            .data(cities).enter().append('circle')

            .attr('cx', (d) => (~~d.longitude + 180) * 2)
            .attr('cy', (d) => (90 - ~~d.latitude) * 2)
            .attr('r', .5)

            .style('fill', '#542135');
    });

