import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import Filters from "./Filters";

describe("Filters test", () => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  const wrapper = shallow(<Filters store={store} />).dive();

  it("renders input field", () => {
    expect(wrapper.find(".filters__input")).toHaveLength(1);
  });

  it("adding input dispatches correct action to the store and makes input appear", () => {
    const inputField = wrapper.find(".filters__input");
    const text = "restaurant";
    inputField.simulate("change", { target: { value: text } });

    const actions = store.getActions();
    const expectedPayload = { type: "FILTER_RESTAURANTS", text };
    expect(actions).toEqual([expectedPayload]);

    expect(wrapper.find(".filters__input").props().value).toEqual(text);
  });
});
