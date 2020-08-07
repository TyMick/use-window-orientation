import React from "react";
import useWindowOrientation from "../dist/index";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

function makeDummyOrientationComponent(defaultOrientation) {
  return function DummyOrientationComponent() {
    const orientationResults = useWindowOrientation(defaultOrientation);
    return <div>{JSON.stringify(orientationResults)}</div>;
  };
}

export function shallowDummyOrientationComponent(defaultOrientation) {
  const Component = makeDummyOrientationComponent(defaultOrientation);
  return shallow(<Component />);
}

export function mountDummyOrientationComponent(defaultOrientation) {
  const Component = makeDummyOrientationComponent(defaultOrientation);
  return mount(<Component />);
}

export function getOrientationResults(wrapper) {
  const jsonResults = wrapper.text();
  return JSON.parse(jsonResults);
}
