// Copyright (c) kike
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';
import BarWidget from "./BarWidget"
import React from 'react';
import ReactDOM from 'react-dom';

import { MODULE_NAME, MODULE_VERSION } from '../version';

// Import the CSS
import '../../css/widget.css';

// Your widget state goes here. Make sure to update the corresponding
const defaultModelProperties = {
  data: [],
}

export type WidgetModelState = typeof defaultModelProperties

export class BarModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: BarModel.model_name,
      _model_module: BarModel.model_module,
      _model_module_version: BarModel.model_module_version,
      _view_name: BarModel.view_name,
      _view_module: BarModel.view_module,
      _view_module_version: BarModel.view_module_version,
      ...defaultModelProperties
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'BarModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'BarView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class BarView extends DOMWidgetView {
  render() {
    this.el.classList.add('custom-widget');

    const component = React.createElement(BarWidget, {
      model: this.model,
    });
    ReactDOM.render(component, this.el);
  }
}
