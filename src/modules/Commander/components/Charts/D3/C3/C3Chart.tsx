import React from "react";
import { findDOMNode } from "react-dom";
import c3 from "c3";

class C3Chart extends React.Component<
  c3.ChartConfiguration & {
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    style?: React.HTMLAttributes<HTMLDivElement>["className"];
  }
> {
  chart: c3.ChartAPI | undefined | null;
  static get displayName() {
    return "C3Chart";
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  componentWillReceiveProps(newProps: any) {
    this.updateChart(newProps);
    if (newProps.onPropsChanged) {
      newProps.onPropsChanged(this.props, newProps, this.chart);
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  destroyChart() {
    try {
      this.chart = this.chart?.destroy();
    } catch (err) {
      console.error("Internal C3 error", err);
    }
  }

  generateChart(
    mountNode: Element | Text | null,
    config: c3.ChartConfiguration
  ) {
    const newConfig: c3.ChartConfiguration = Object.assign(
      { bindto: mountNode },
      config
    );
    return c3.generate(newConfig);
  }

  loadNewData(data: c3.Data) {
    //@ts-ignore
    this.chart?.load(data);
  }

  unloadData() {
    this.chart?.unload();
  }

  updateChart(config: c3.ChartConfiguration) {
    if (!this.chart) {
      this.chart = this.generateChart(findDOMNode(this), config);
    }

    // if (config.unloadBeforeLoad) {
    //     this.unloadData();
    // }

    this.loadNewData(config.data);
  }

  render() {
    const className = this.props.className ? ` ${this.props.className}` : "";
    const style = this.props.style ? this.props.style : {};
    return <div className={className} style={style} />;
  }
}

export default C3Chart;
