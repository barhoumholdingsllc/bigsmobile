import React from 'react';
import * as d3 from 'd3';
import Coupe from 'images/coupe.png';
import Sedan from 'images/sedan.png';
import Crossover from 'images/crossover.png';
import PickupTruck from 'images/pickup_truck.png';
import SUV from 'images/SUV.png';
import Van from 'images/van.png';
import * as DetailLines from './data/DetailLines';

class ExteriorCarLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DetailLines.plat.Coupe,
    };
  }

  componentDidMount() {
    this.getVehiclePackageData(this.props.packageFor, this.props.vehicleType);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.packageFor !== prevProps.packageFor ||
      this.props.vehicleType !== prevProps.vehicleType
    ) {
      d3.select('#exterior-car-view').remove();
      this.getVehiclePackageData(this.props.packageFor, this.props.vehicleType);
    }
  }

  getVehiclePackageData(packageFor, vehicleType) {
    if (packageFor === 'Platinum Detail') {
      this.getDataForVehicleType(DetailLines.plat, vehicleType);
    } else if (packageFor === 'Full Detail') {
      this.getDataForVehicleType(DetailLines.full, vehicleType);
    } else if (packageFor === 'Mini Detail') {
      this.getDataForVehicleType(DetailLines.mini, vehicleType);
    } else if (packageFor === "Big's Special") {
      this.getDataForVehicleType(DetailLines.big, vehicleType);
    } else if (packageFor === 'Platinum Interior Detail') {
      this.getDataForVehicleType(DetailLines.platInter, vehicleType);
    } else if (packageFor === 'Platinum Exterior Detail') {
      this.getDataForVehicleType(DetailLines.platExter, vehicleType);
    } else {
      this.getDataForVehicleType(DetailLines.plat, vehicleType);
    }
  }

  getDataForVehicleType(data, vehicleType) {
    Object.entries(data).forEach(entry => {
      if (entry[0] === vehicleType) {
        this.drawExteriorCarLabel(entry[1]);
      }
    });
  }

  drawExteriorCarLabel(data) {
    const { packageFor, vehicleType } = this.props;
    const svg = d3
      .select('#BYD-exterior-view')
      .append('svg')
      .attr('id', 'exterior-car-view')
      .attr('viewBox', '0, 0, 1280, 500')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .style('background-size', 'contain')
      .style('background-repeat', 'no-repeat')
      .style('background-position', '50% 50%');
    setVehicleImage(svg, vehicleType);
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
      .attr('opacity', d => parseFloat(d.opacity) + 0.5)
      .text(d => d.text)
      .style('text-decoration', d => d.decoration)
      .attr('fill', d => d.color)
      .style('font-size', '24px')
      .style('font-weight', '600');

    this.setState({ data });
  }

  render() {
    return <div id={this.props.id} />;
  }
}

function setVehicleImage(svg, vehicleType) {
  if (vehicleType === 'Coupe') {
    svg.style('background-image', `url(${Coupe})`);
  } else if (vehicleType === 'Sedan') {
    svg.style('background-image', `url(${Sedan})`);
  } else if (vehicleType === 'Crossover') {
    svg.style('background-image', `url(${Crossover})`);
  } else if (vehicleType === 'Pickup Truck') {
    svg.style('background-image', `url(${PickupTruck})`);
  } else if (vehicleType === 'SUV') {
    svg.style('background-image', `url(${SUV})`);
  } else if (vehicleType === 'Van or Mini Van') {
    svg.style('background-image', `url(${Van})`);
  }
}

export default ExteriorCarLabel;
