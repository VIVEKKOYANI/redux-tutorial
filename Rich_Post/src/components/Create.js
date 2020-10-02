import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

export default class Create extends Component {
  // handelPost = () => {
  //   console.log(this.props);
  //   this.props.history.push("/posts");
  // };
  render() {
    return (
      <div>
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                    alt="Workflow logo"
                  />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4"></div>
                  <a
                    href="/rich_text"
                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    CREATE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
