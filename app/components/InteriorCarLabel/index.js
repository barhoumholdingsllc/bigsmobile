import React from 'react';
import * as d3 from 'd3';
import Interior from 'images/interior.png';
import * as DetailLines from './data/DetailLines';

class InteriorCarLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DetailLines.plat,
    };
  }

  componentDidMount() {
    this.getVehiclePackageData(this.props.packageFor);
  }

  componentDidUpdate(prevProps) {
    if (this.props.packageFor !== prevProps.packageFor) {
      d3.select('#interior-car-view').remove();
      this.getVehiclePackageData(this.props.packageFor);
    }
  }

  getVehiclePackageData(packageFor) {
    if (packageFor === 'Platinum Detail') {
      this.drawInteriorCarLabel(DetailLines.plat);
    } else if (packageFor === 'Full Detail') {
      this.drawInteriorCarLabel(DetailLines.full);
    } else if (packageFor === 'Mini Detail') {
      this.drawInteriorCarLabel(DetailLines.mini);
    } else if (packageFor === "Big's Special") {
      this.drawInteriorCarLabel(DetailLines.big);
    } else if (packageFor === 'Platinum Interior Detail') {
      this.drawInteriorCarLabel(DetailLines.platInter);
    } else if (packageFor === 'Platinum Exterior Detail') {
      this.drawInteriorCarLabel(DetailLines.platExter);
    } else {
      this.drawInteriorCarLabel(DetailLines.plat);
    }
  }

  drawInteriorCarLabel(data) {
    const { packageFor, vehicleType } = this.props;
    const svg = d3
      .select('#BYD-interior-view')
      .append('svg')
      .attr('id', 'interior-car-view')
      .attr('viewBox', '0, 0, 1280, 500')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .style('background-size', 'cover')
      .style('background-repeat', 'no-repeat')
      .style('background-position', '50% 50%')
      .style('background-color', 'black')
      .style('background-image', `url(${Interior})`);
    const packageLabelContainer = svg.append('g');
    const labels = packageLabelContainer.append('g').attr('class', 'labels');
    const lines = packageLabelContainer.append('g').attr('class', 'lines');

    const detailPackagePolylines = lines
      .selectAll('polyline')
      .data(data)
      .enter()
      .append('polyline');

    detailPackagePolylines
      .attr('points', d => d.points) // start
      .attr('stroke', d => d.color)
      .attr('fill', 'none')
      .attr('opacity', d => d.opacity)
      .attr('stroke-width', '2');

    labels
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('fill', d => d.color)
      .attr('opacity', d => parseFloat(d.opacity) + 0.5)
      .text(d => d.text)
      .style('text-decoration', d => d.decoration)
      .style('font-size', '20px')
      .style('font-weight', '600');

    this.setState({ data });
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default InteriorCarLabel;
