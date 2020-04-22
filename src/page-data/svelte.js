/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import TotalBytesBreakdown from "../data/svelte/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/svelte/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/svelte/all/img-bytes-breakdown";

export const headerOptions = [
  'All Svelte sites',
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 32,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:5a6333bbe54e4e07a8b01b638089beb9'
    },
    'totalBytesPercentile': {
      numOrigins: 32,
      data: [1375, 3172, 4840],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:31edb2cf5ecc442eb5299915c5ee7841'
    },
    'totalBytesBreakdown': {
      numOrigins: 32,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:baa182d450194050bb5dced8ec9a677c'
    },
    'compressedRequests': {
      numOrigins: 26,
      numRequests: 764,
      gzipCompressedPercent: 73,
      brotliCompressedPercent: 22,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:d840b1bdafbc44608865e55491fbae1d'
    },
    'jsBytesPercentile': {
      numOrigins: 32,
      data: [379, 612, 1009],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:4d7eb74cd7b04f26b3f948b3f3d3c5e7'
    },
    'jsBytesBreakdown': {
      numOrigins: 32,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2bfecffbe600409d98af75040eac382c'
    },
    'imgBytesPercentile': {
      numOrigins: 32,
      data: [641, 1515, 4319],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:bb7d8e61d2404493b6b509a374e5b592'
    },
    'imgBytesBreakdown': {
      numOrigins: 32,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:d1a83d90083d4d9bb2b0510fbc6e48f5'
    },
    'optimizedImgOrigins': {
      numOrigins: 33,
      data: [97, 3],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:3dd4c9d200a644f8b6730708f8eda5fa"
    },
    'responsiveImgOrigins': {
      numOrigins: 33,
      data: [94, 6],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:f6136f704d444ed59cc71f246f93c285"
    },
    'nextGenImgOrigins': {
      numOrigins: 33,
      data: [76, 24],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:490bf329ce00415a989751a32d6acbfb"
    },
    'offscreenImgOrigins': {
      numOrigins: 33,
      data: [70, 30],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:2124474046f94c0cb0076a5a84ccff22'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 16,
      data: [25, 37, 38],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:c3f278555d6a4ada9352d0520220a6c9'
    },
    'firstInputDelayCrux': {
      numOrigins: 7,
      data: [82, 14, 4],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:ece3420a099d497e9f38c6feb6c3fadc'
    },
    'timeToInteractive': {
      numOrigins: 32,
      data: [6.69, 13.63, 25.44],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:253e9c8562aa4481a58240f355161358'
    },
    'firstContentfulPaint': {
      numOrigins: 32,
      data: [2.44, 3.31, 3.95],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:438a5c68636443e5ab744b1d3e94944e'
    }
  }
}