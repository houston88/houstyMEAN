'use strict';

function timeBarChart(data) {

    // to support small screens
    var screenWidth = $('#happy-bar').width();

    var margin = {top: 10, right: 10, bottom: 10, left: 35},
		    width = screenWidth - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

    var y0 = Math.max(Math.abs(d3.min(data)), Math.abs(d3.max(data)));
    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.15);
    var y = d3.scale.linear().domain([-y0, y0]).range([height, 0]).nice();

    // Format date? Too much data to read: .tickFormat(d3.time.format('%m/%d/%Y'));
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .tickFormat('');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .ticks(20);

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return '<strong>Date: </strong><span>'+ d3.time.format('%m/%d/%Y')(d.date) +'</span><br><strong>Score: </strong><span style="color:red">' + d.score + '</span>';
      });

		// Create the SVG drawing area
		var svg = d3.select('#happy-bar')
		  .append('svg')
		  .attr('width', width + margin.left + margin.right)
		  .attr('height', height + margin.top + margin.bottom)
		  .append('g')
		  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	  // Parse the date strings into javascript dates
	  data.forEach(function(d) {
	    d.date = new Date(d.parseDate);
      d.value = d.score;
	  });

    x.domain(data.map(function(d) { return d.date; }));
    y.domain([d3.min(data, function(d) { return d.value; }), d3.max(data, function(d) { return d.value; })]);

    svg.call(tip);

    // If we want to show x-axis text:
    // .selectAll('text')
    // .style('font-size', '6px')
    // .style('text-anchor', 'end')
    // .attr('dx', '-1.3em')
    // .attr('dy', '-1.55em')
    // .attr('transform', 'rotate(-90)' );
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + y(0) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .text('Happiness Score');

    // .style('fill', 'steelblue')
    // .attr('width', x.rangeBand())
    // return y(d.value);
    // return Math.abs(y(d.value) - y(0));

    // This is what works, but negative looks weird
    // .attr('y', function(d) { return y(d.value); })
    // .attr('height', function(d) { return height - y(d.value); })

    // Close but no cigar...
    // .attr('y', function(d) { return y(Math.min(0, d.value)); })
    // .attr('height', function(d) { return Math.abs(y(d.value) - y(0)); })

    svg.selectAll('bar')
        .data(data)
        .enter().append('rect')
        .attr('class', function(d) { return 'bar bar-' + (d.value < 0 ? 'negative' : 'positive'); })
        .attr('x', function(d) { return x(d.date); })
        .attr('width', function(d) { return x.rangeBand(); })
        .attr('y', function(d) {
          return y(Math.max(0, d.value));
        })
        .attr('height', function(d) {
          return Math.abs(y(d.value) - y(0));
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

  }
