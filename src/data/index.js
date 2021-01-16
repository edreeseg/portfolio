import Mock from "./mock";
import "./db/database";

// axios-mock-adapter methods
// onAny: making any request to a given url
// passThrough: forwards matched request over network
Mock.onAny().passThrough();