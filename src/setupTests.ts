import { configure } from "enzyme";
// if you're looking at this file for an example for work: use enzyme-adpater-react-16 instead if not using react 17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
