import React from 'react';
import Layout from 'components/Layout';
import Nav from 'components/Nav';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from 'components/Footer';
import ScheduleDetail from 'components/ScheduleDetail';
import BuildYourDetailSlider from 'components/BuildYourDetailSlider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const TAX_RATE = 0.1;

function ccyFormat(num) {
  return `$${num}.00`;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const platinumDetailIncludes = {
  exterior: [
    'Hand wash and dry exterior',
    'Clean wheels and dress tires',
    'Clean and dress wheel wells',
    'Clay Bar Paint Treatment (removes microscopic dirt & grime from paint)',
    '​Apply protective coat of wax​',
    'Deep cleaning of door and trunk jambs ',
    'Clean gas cap area',
    'Shine exterior plastics',
    'Clean exterior windows',
  ],
  interior: [
    'Vacuum Interior carpets and seats',
    'Shampoo carpets and cloth seats',
    'Clean and Condition All Interior Plastics',
    'Clean and Condition All Interior Leather',
    'Clean interior windows',
  ],
  packageCost: 149,
};

const fullDetailIncludes = {
  exterior: [
    'Hand wash and dry exterior',
    'Clean wheels and dress tires',
    'Clean and dress wheel wells',
    'Clay Bar Paint Treatment (removes microscopic dirt & grime from paint)',
    'Apply protective coat of wax​',
    'Deep cleaning of door and trunk jambs',
    'Clean gas cap area',
    'Clean exterior windows',
  ],
  interior: [
    'Vacuum Interior carpets and seats',
    'Shampoo carpets and cloth seats',
    'Clean All Interior Plastics',
    'Clean interior windows',
  ],
  packageCost: 129,
};

const miniDetailIncludes = {
  exterior: [
    'Hand wash and dry exterior',
    'Clean wheels and dress tires ',
    'Clean and dress wheel wells ',
    'Clay Bar Paint Treatment (removes microscopic dirt & grime from paint)',
    'Apply protective coat of wax',
    'Wipe Down of Door and Trunk Jambs',
    'Clean gas cap area',
    'Clean exterior window',
  ],
  interior: [
    'Vacuum Interior carpets and seats',
    'Clean All Interior Plastics',
    'Clean interior window',
  ],
  packageCost: 109,
};

const bigsSpecialIncludes = {
  exterior: [
    'Hand wash and dry exterior',
    'Clean wheels and dress tires',
    'Clean and dress wheel wells ',
    'Apply protective coat of wax',
    'Wipe Down of Door and Trunk Jambs',
    'Wipe down gas cap area',
    'Clean exterior windows',
  ],
  interior: [
    'Vacuum Interior carpets and seats',
    'Wipe down all interior plastics (including center console and dash)',
    'Clean interior windows',
  ],
  packageCost: 89,
};

const platinumInteriorIncludes = {
  exterior: ['Wipe Down of Door and Trunk Jambs'],
  interior: [
    'Vacuum Interior carpets and seats',
    'Shampoo carpets and cloth seats',
    'Clean and Condition All Interior Plastics',
    'Clean and Condition All Interior Leather',
    'Clean Interior Windows',
  ],
  packageCost: 79,
};

const platinumExteriorIncludes = {
  exterior: [
    'Hand wash and dry exterior',
    'Clean wheels and dress tires ',
    'Clean and dress wheel wells ',
    'Clay Bar Paint Treatment (removes microscopic dirt & grime from paint)',
    'Apply protective coat of wax',
    'Wipe Down of Door and Trunk Jambs ',
    'Clean gas cap area',
    'Shine exterior plastics',
    'Clean exterior windows',
  ],
  interior: ['Clean interior windows'],
  packageCost: 69,
};

const vehiclePriceMap = {
  Coupe: 0,
  Sedan: 20,
  Crossover: 40,
  'Pickup Truck': 50,
  SUV: 60,
  'Van or Mini Van': 70,
};

const optionalAddOnMap = {
  'Excess Pet Hair Removal': 29,
  'Excess Moss Removal (Exterior)': 10,
  'Excess Mold Removal (Interior)': 50,
  'Deodorization of Interior': 60,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const OurServicesPage = () => (
  <Layout title="Our services">
    <div className="custom-main-container">
      <Nav />
      <div className="custom-content-container">
        <div className="custom-bg-black custom-color-white">
          <div className="container pt-5 pb-5">
            <h1 className="custom-font-h1 mb-5">Build your detail</h1>
            <div className="molten-leading">
              Take a look at our different packages to see which one fits your
              needs. You can be assured that we don't change our prices on the
              spot.
            </div>
          </div>
        </div>
        <BuildYourDetail />
      </div>
      <ScheduleDetail />
      <Footer />
    </div>
  </Layout>
);

class BuildYourDetail extends React.Component {
  state = {
    vehicleType: 'Coupe',
    vehicleCost: 0,
    package: 'Platinum Detail',
    optionalAddOn: [],
    optionalAddOnObject: [],
    optionalAddOnCost: '$0.00',
    optionalAddOnTotal: 0,
    open: false,
    currentData: platinumDetailIncludes,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleVehicleChange = event => {
    this.setState({
      vehicleType: event.target.value,
      vehicleCost: vehiclePriceMap[event.target.value],
    });
  };

  handleOptionalAddOnChange = event => {
    let optionalAddOnCost = '';
    let optionalAddOnTotal = 0;
    let index = 0;
    if (event.target.value.length === 0) {
      optionalAddOnCost = '$0.00';
    } else {
      event.target.value.forEach(element => {
        const price = optionalAddOnMap[element];
        if (index === event.target.value.length - 1) {
          optionalAddOnCost += `$${price}.00`;
        } else {
          optionalAddOnCost += `$${price}.00 + `;
        }
        optionalAddOnTotal += price;
        index++;
      });
    }

    const optionalAddOnObject = [];
    event.target.value.forEach(element => {
      const price = optionalAddOnMap[element];
      optionalAddOnObject.push({
        option: element,
        price,
      });
    });

    this.setState({
      optionalAddOn: event.target.value,
      optionalAddOnCost,
      optionalAddOnTotal,
      optionalAddOnObject,
    });
  };

  handlePackageChange = event => {
    this.setState({ package: event.target.value });
    if (event.target.value === 'Platinum Detail') {
      this.setState({ currentData: platinumDetailIncludes });
    } else if (event.target.value === 'Full Detail') {
      this.setState({ currentData: fullDetailIncludes });
    } else if (event.target.value === 'Mini Detail') {
      this.setState({ currentData: miniDetailIncludes });
    } else if (event.target.value === "Big's Special") {
      this.setState({ currentData: bigsSpecialIncludes });
    } else if (event.target.value === 'Platinum Interior Detail') {
      this.setState({ currentData: platinumInteriorIncludes });
    } else if (event.target.value === 'Platinum Exterior Detail') {
      this.setState({ currentData: platinumExteriorIncludes });
    } else {
      // error
      console.log('Package not found');
    }
  };

  render() {
    const { currentData } = this.state;
    console.log(this.state);
    return (
      <div>
        <style jsx="true">
          {`
            .custom-BYD-view-container {
              display: flex;
            }

            .custom-BYD-car-view-container {
              width: 100%;
            }
          `}
        </style>
        <div className="custom-BYD-view-container">
          <div className="custom-BYD-car-view-container">
            <div className="custom-bg-light-turqoise p-4">
              <FormControl className="custom-mui-select-form-control mr-2">
                <InputLabel htmlFor="vehicleType">Vehicle</InputLabel>
                <Select
                  value={this.state.vehicleType}
                  onChange={this.handleVehicleChange}
                  inputProps={{
                    name: 'vehicle',
                    id: 'vehicleType',
                  }}
                >
                  <MenuItem value="Coupe">Coupe</MenuItem>
                  <MenuItem value="Sedan">Sedan</MenuItem>
                  <MenuItem value="Crossover">Crossover</MenuItem>
                  <MenuItem value="Pickup Truck">Pickup Truck</MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                  <MenuItem value="Van or Mini Van">Van or Mini Van</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="custom-mui-select-form-control mr-2">
                <InputLabel htmlFor="package">Package</InputLabel>
                <Select
                  value={this.state.package}
                  onChange={this.handlePackageChange}
                  inputProps={{
                    name: 'package',
                    id: 'package',
                  }}
                >
                  <MenuItem value="Platinum Detail">Platinum Detail</MenuItem>
                  <MenuItem value="Full Detail">Full Detail</MenuItem>
                  <MenuItem value="Mini Detail">Mini Detail</MenuItem>
                  <MenuItem value={"Big's Special"}>Big's Special</MenuItem>
                  <MenuItem value="Platinum Interior Detail">
                    Platinum Interior Detail
                  </MenuItem>
                  <MenuItem value="Platinum Exterior Detail">
                    Platinum Exterior Detail
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="custom-mui-select-form-control-select-multiple mr-2">
                <InputLabel htmlFor="select-multiple-checkbox">
                  Optional Add On
                </InputLabel>
                <Select
                  multiple
                  value={this.state.optionalAddOn}
                  onChange={this.handleOptionalAddOnChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(', ')}
                  MenuProps={MenuProps}
                  className="custom-BYD-optional-addon-input"
                >
                  <MenuItem
                    key="Excess Pet Hair Removal"
                    value="Excess Pet Hair Removal"
                  >
                    <Checkbox
                      checked={
                        this.state.optionalAddOn.indexOf(
                          'Excess Pet Hair Removal',
                        ) > -1
                      }
                    />
                    <ListItemText primary="Excess Pet Hair Removal" />
                  </MenuItem>
                  <MenuItem
                    key="Excess Moss Removal (Exterior)"
                    value="Excess Moss Removal (Exterior)"
                  >
                    <Checkbox
                      checked={
                        this.state.optionalAddOn.indexOf(
                          'Excess Moss Removal (Exterior)',
                        ) > -1
                      }
                    />
                    <ListItemText primary="Excess Moss Removal (Exterior)" />
                  </MenuItem>
                  <MenuItem
                    key="Excess Mold Removal (Interior)"
                    value="Excess Mold Removal (Interior)"
                  >
                    <Checkbox
                      checked={
                        this.state.optionalAddOn.indexOf(
                          'Excess Mold Removal (Interior)',
                        ) > -1
                      }
                    />
                    <ListItemText primary="Excess Mold Removal (Interior)" />
                  </MenuItem>
                  <MenuItem
                    key="Deodorization of Interior"
                    value="Deodorization of Interior"
                  >
                    <Checkbox
                      checked={
                        this.state.optionalAddOn.indexOf(
                          'Deodorization of Interior',
                        ) > -1
                      }
                    />
                    <ListItemText primary="Deodorization of Interior" />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <BuildYourDetailSlider
              packageFor={this.state.package}
              vehicleType={this.state.vehicleType}
            />
          </div>
        </div>

        <div>
          <div className="custom-BYD-container custom-bg-dark-turqoise custom-color-white">
            <div className="custom-BYD-section container">
              <div className="">
                <h3 className="custom-font-h3-BYD">Price</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4">
          <Paper className="custom-BYD-prices" elevation={3}>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableCell className="text-right">Items selected</TableCell>
                  <TableCell />

                  <TableCell className="text-right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-right">
                    Package: {this.state.package}
                  </TableCell>
                  <TableCell />

                  <TableCell className="text-right">
                    {ccyFormat(`${currentData.packageCost}`)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-right">
                    Vehicle Size: {this.state.vehicleType}
                  </TableCell>
                  <TableCell />
                  <TableCell className="text-right">
                    {ccyFormat(`${this.state.vehicleCost}`)}
                  </TableCell>
                </TableRow>
                {this.state.optionalAddOnObject.map(optionalAddOnItem => (
                  <TableRow>
                    <TableCell className="text-right">
                      Add On: {optionalAddOnItem.option}
                    </TableCell>
                    <TableCell />
                    <TableCell className="text-right">
                      {ccyFormat(optionalAddOnItem.price)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Subtotal</TableCell>
                  <TableCell />
                  <TableCell className="text-right">
                    $
                    {this.state.optionalAddOnTotal +
                      this.state.vehicleCost +
                      currentData.packageCost}
                    .00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell className="text-right">{`${(
                    TAX_RATE * 100
                  ).toFixed(0)}%`}</TableCell>
                  <TableCell className="text-right">
                    $
                    {(
                      TAX_RATE *
                      (this.state.optionalAddOnTotal +
                        this.state.vehicleCost +
                        currentData.packageCost)
                    ).toFixed(2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">
                    $
                    {(
                      TAX_RATE *
                        (this.state.optionalAddOnTotal +
                          this.state.vehicleCost +
                          currentData.packageCost) +
                      (this.state.optionalAddOnTotal +
                        this.state.vehicleCost +
                        currentData.packageCost)
                    ).toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>

        <div>
          <div className="custom-BYD-container custom-bg-dark-turqoise custom-color-white">
            <div className="custom-BYD-section container">
              <div className="">
                <h3 className="custom-font-h3-BYD">
                  {this.state.package} includes
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 custom-bg-white">
          <div className="custom-BYD-detail-view">
            <Paper className="m-4 custom-BYD-exterior-details  " elevation={3}>
              <List className="" subheader={<li />}>
                {['Exterior Services Included'].map(sectionId => (
                  <li key={`${sectionId}`}>
                    <ul>
                      <ListSubheader color="primary">{`${sectionId}`}</ListSubheader>
                      {currentData.exterior.map(item => (
                        <ListItem key={`${item}`}>
                          <ListItemIcon>
                            <LabelImportantIcon />
                          </ListItemIcon>
                          <ListItemText primary={`${item}`} />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
              </List>
            </Paper>

            <Paper className="m-4 custom-BYD-interior-details" elevation={3}>
              <List subheader={<li />}>
                {['Interior Services Included'].map(sectionId => (
                  <li key={`${sectionId}`}>
                    <ul>
                      <ListSubheader color="primary">{`${sectionId}`}</ListSubheader>
                      {currentData.interior.map(item => (
                        <ListItem key={`${item}`}>
                          <ListItemIcon>
                            <LabelImportantIcon />
                          </ListItemIcon>
                          <ListItemText primary={`${item}`} />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
              </List>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServicesPage;
