import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import 'chartjs-adapter-moment';
export { MultiAxisLine } from "./MultiAxisLine";
export * as Utils from "./Util";

Chart.register(...registerables);
Chart.register(zoomPlugin);
