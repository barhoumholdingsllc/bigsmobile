import React, { Component } from 'react';
import * as d3 from 'd3';
import Interior from 'images/Interior.png';

const platDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum & Shampoo Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Apply Conditioner to All Leather & Plastics
];

const fullDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum & Shampoo Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "line-through", "color": "gray"}, // Apply Conditioner to All Leather & Plastics
];

const miniDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "line-through", "color": "gray"}, // Apply Conditioner to All Leather & Plastics
];

const bigsDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "line-through", "color": "gray"}, // Apply Conditioner to All Leather & Plastics
];

const platInterDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum & Shampoo Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Apply Conditioner to All Leather & Plastics
];

const platExterDetailLines = [
  { "points": "850, 450 850, 30", "text": "​Vacuum & Shampoo Carpets, Seats, and Crevices", "x": "600", "y": "20" , "opacity": ".5" , "decoration" : "line-through", "color": "gray"}, // ​Vacuum & Shampoo Carpets, Seats, and Crevices
  { "points": "90, 120 250, 30", "text": "​Clean Interior Windows", "x": "200", "y": "20" , "opacity": ".5" , "decoration" : "none", "color": "white"}, // Clean Interior Windows
  { "points": "640, 170 540, 80", "text": "Apply Conditioner to All Leather & Plastics", "x": "330", "y": "70" , "opacity": ".5" , "decoration" : "line-through", "color": "gray"}, // Apply Conditioner to All Leather & Plastics
];

class InteriorCarLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: platDetailLines,
    }
  }

  componentDidMount() {
    this.getVehiclePackageData(this.props.packageFor);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props.packageFor !== prevProps.packageFor) {
      d3.select("#interior-car-view").remove();
      this.getVehiclePackageData(this.props.packageFor);
    }
  }

  getVehiclePackageData(packageFor) {
    if (packageFor === "Platinum Detail") {
      console.log("for platinum detail");
      this.drawInteriorCarLabel(platDetailLines);
    } else if (packageFor === "Full Detail") {
      console.log("for full detail");
      this.drawInteriorCarLabel(fullDetailLines);
    } else if (packageFor === "Mini Detail") {
      console.log("for mini detail");
      this.drawInteriorCarLabel(miniDetailLines);
    } else if (packageFor === "Big's Special") {
      console.log("for big's specail");
      this.drawInteriorCarLabel(bigsDetailLines);
    } else if (packageFor === "Platinum Interior Detail") {
      console.log("for platinum interior");
      this.drawInteriorCarLabel(platInterDetailLines);
    } else if (packageFor === "Platinum Exterior Detail") {
      console.log("for platinum exterior")
      this.drawInteriorCarLabel(platExterDetailLines);
    } else {
      console.log("Something went wrong");
      this.drawInteriorCarLabel(platDetailLines);
    }
  }

  drawInteriorCarLabel(data) {
    const { packageFor, vehicleType } = this.props;
    const svg = d3.select("#BYD-interior-view")
      .append("svg")
      .attr("id", "interior-car-view")
      .attr("viewBox", "0, 0, 1280, 500")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .style("background-size", "cover")
      .style("background-repeat", "no-repeat")
      .style("background-position", "50% 50%")
      .style("background-color", "black")
      .style("background-image", `url(${Interior})`);
    const packageLabelContainer = svg.append("g");
    const labels = packageLabelContainer.append("g").attr("class", "labels");
    const lines = packageLabelContainer.append("g").attr("class", "lines");

    const detailPackagePolylines = lines.selectAll("polyline")
      .data(data)
      .enter()
      .append("polyline");

    detailPackagePolylines
      .attr("points", (d) => { return d.points }) // start
      .attr("stroke", (d) => { return d.color })
      .attr("fill", "none")
      .attr("opacity", (d) => { return d.opacity })
      .attr("stroke-width", "2");

    labels.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => { return d.x })
      .attr("y", (d) => { return d.y })
      .attr("fill", (d) => { return d.color })
      .attr("opacity", (d) => { return (parseFloat(d.opacity) + .5); })
      .text((d) => { return d.text })
      .style("text-decoration", (d) => { return d.decoration })
      .style("font-size", "20px")
      .style("font-weight", "600");

    this.setState({ data });
  }

  render() {
    return <div id={this.props.id}>
      <style jsx>
        {`
          `}
      </style>
      </div>
  }
}

export default InteriorCarLabel;
