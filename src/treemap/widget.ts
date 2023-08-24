// Copyright (c) kike
// Distributed under the terms of the Modified BSD License.

import {
    DOMWidgetModel,
    DOMWidgetView,
    ISerializers,
  } from '@jupyter-widgets/base';
  import TreeMapWidget from "./TreeMapWidget"
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  import { MODULE_NAME, MODULE_VERSION } from '../version';
  
  // Import the CSS
  import '../../css/widget.css';
  
  // Your widget state goes here. Make sure to update the corresponding
  const defaultModelProperties = {
    data: [],
  }
  
  export type TreeMapWidgetModelState = typeof defaultModelProperties
  
  export class TreeMapModel extends DOMWidgetModel {
    defaults() {
      return {
        ...super.defaults(),
        _model_name: TreeMapModel.model_name,
        _model_module: TreeMapModel.model_module,
        _model_module_version: TreeMapModel.model_module_version,
        _view_name: TreeMapModel.view_name,
        _view_module: TreeMapModel.view_module,
        _view_module_version: TreeMapModel.view_module_version,
        ...defaultModelProperties
      };
    }
  
    static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    };
  
    static model_name = 'TreeMapModel';
    static model_module = MODULE_NAME;
    static model_module_version = MODULE_VERSION;
    static view_name = 'TreeMapView'; // Set to null if no view
    static view_module = MODULE_NAME; // Set to null if no view
    static view_module_version = MODULE_VERSION;
  }
  
  export class TreeMapView extends DOMWidgetView {
    render() {
      this.el.classList.add('custom-widget');
  
      const component = React.createElement(TreeMapWidget, {
        model: this.model,
      });
      ReactDOM.render(component, this.el);
    }
  }
  