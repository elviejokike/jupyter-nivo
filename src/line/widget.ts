// Copyright (c) kike
// Distributed under the terms of the Modified BSD License.

import {
    DOMWidgetModel,
    DOMWidgetView,
    ISerializers,
  } from '@jupyter-widgets/base';
  import LineWidget from "./LineWidget"
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { defaultModelProperties } from '../common';
  import { MODULE_NAME, MODULE_VERSION } from '../version';
  
  // Import the CSS
  import '../../css/widget.css';
  
  // Your widget state goes here. Make sure to update the corresponding
  
  export type LineWidgetModelState = typeof defaultModelProperties
  
  export class LineModel extends DOMWidgetModel {
    defaults() {
      return {
        ...super.defaults(),
        _model_name: LineModel.model_name,
        _model_module: LineModel.model_module,
        _model_module_version: LineModel.model_module_version,
        _view_name: LineModel.view_name,
        _view_module: LineModel.view_module,
        _view_module_version: LineModel.view_module_version,
        ...defaultModelProperties
      };
    }
  
    static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    };
  
    static model_name = 'LineModel';
    static model_module = MODULE_NAME;
    static model_module_version = MODULE_VERSION;
    static view_name = 'LineView'; // Set to null if no view
    static view_module = MODULE_NAME; // Set to null if no view
    static view_module_version = MODULE_VERSION;
  }
  
  export class LineView extends DOMWidgetView {
    render() {
      this.el.classList.add('custom-widget');
  
      const component = React.createElement(LineWidget, {
        model: this.model,
      });
      ReactDOM.render(component, this.el);
    }
  }
  