/**
 * @Author: Uttam Keshri
 */

import axios from "axios";

export default {
  //param1: a, param2: b
  add: (a, b) => 
    // eslint-disable-next-line
    axios.get(`/calculator/add?a=${a}&b=${b}`),
  subtract: (a, b) => 
    // eslint-disable-next-line
    axios.get(`/calculator/sub?a=${a}&b=${b}`),
  multiply: (a, b) => 
    // eslint-disable-next-line
    axios.get(`/calculator/mul?a=${a}&b=${b}`),
  divide: (a, b) => 
    // eslint-disable-next-line
    axios.get(`/calculator/div?a=${a}&b=${b}`)
};
