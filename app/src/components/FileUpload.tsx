import React from "react";
import { Component } from "react";

type PropsType = {
  handleDrop: (files: FileList) => void;
};

export default class FileUpload extends Component {
  props!: PropsType;

  dropRef = React.createRef<HTMLDivElement>();
  dragCounter: number = 0;

  state = {
    dragging: false,
    files: [] as File[],
  };

  handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this.dragCounter++;
    if (e.dataTransfer?.items?.length! > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this.dragCounter--;
    this.setState({ dragging: false });
  };

  handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ dragging: false });
    if (e.dataTransfer?.files?.length! > 0) {
      for (let i = 0; i < e.dataTransfer!.files.length; i++) {
        this.state.files.push(e.dataTransfer!.files[i]);
      }
      this.props.handleDrop(e.dataTransfer!.files);
      e.dataTransfer!.clearData();
      this.dragCounter = 0;
    }
  };

  componentDidMount() {
    this.dragCounter = 0;
    let div = this.dropRef.current;
    console.log(div);
    if (div) {
      div.addEventListener("dragenter", this.handleDragIn);
      div.addEventListener("dragleave", this.handleDragOut);
      div.addEventListener("dragover", this.handleDrag);
      div.addEventListener("drop", this.handleDrop);
    }
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    if (div) {
      div.removeEventListener("dragenter", this.handleDragIn);
      div.removeEventListener("dragleave", this.handleDragOut);
      div.removeEventListener("dragover", this.handleDrag);
      div.removeEventListener("drop", this.handleDrop);
    }
  }

  render() {
    return (
      <>
        <div
          className={`mt-1 flex justify-center rounded-md border-2 border-dashed  px-6 pt-5 pb-6 ${
            this.state.dragging
              ? "border-indigo-700 bg-indigo-300"
              : "border-gray-300"
          }`}
          ref={this.dropRef}
        >
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              JSON, CSV, TXT, TSV up to 10MB
            </p>
          </div>
        </div>
      </>
    );
  }
}
