import React from 'react';
import { WidgetModel } from '@jupyter-widgets/base';
import { useModelState, WidgetModelContext } from '../hooks/widget-model';
import { ResponsiveTreeMap } from '@nivo/treemap';

interface WidgetProps {
  model: WidgetModel;
}

function PieWidget(props: WidgetProps) {
  const [data ] = useModelState('data');
  return (
    <div style={{width:500, height:500}}>
        <ResponsiveTreeMap
          data={data[0]}
          identity="name"
          value="loc"
          valueFormat=".02s"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.2
                  ]
              ]
          }}
          parentLabelPosition="left"
          parentLabelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      2
                  ]
              ]
          }}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.1
                  ]
              ]
          }}
      />
    </div>
  );
}

function withModelContext(Component: (props: WidgetProps) => JSX.Element) {
  return (props: WidgetProps) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(PieWidget);
