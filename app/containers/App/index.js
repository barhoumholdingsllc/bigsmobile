/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import OurServicesPage from 'containers/OurServicesPage/Loadable';
import ContactUsPage from 'containers/ContactUsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import 'typeface-roboto/index.css';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/our-services" component={OurServicesPage} />
        <Route exact path="/contact-us" component={ContactUsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
