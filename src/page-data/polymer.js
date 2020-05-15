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

import TotalBytesBreakdown from "../data/polymer/all/total-bytes-breakdown";
import JSBytesBreakdown from "../data/polymer/all/js-bytes-breakdown";
import ImgBytesBreakdown from "../data/polymer/all/img-bytes-breakdown";
import TotalBytesComparison from "../data/polymer/all/total-bytes-comparison";
import JSBytesComparison from "../data/polymer/all/js-bytes-comparison";

export const headerOptions = [
  'Polymer',
];

export const data = {
  [headerOptions[0]]: {
    'totalNumOrigins': {
      value: 1294,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:432d286676d7478aa04a9f5a728ac214'
    },
    'totalBytesPercentile': {
      numOrigins: 1294,
      data: [1830, 2531, 4365],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:ad428c14a03343ae8c3d408fffb7ec0c'
    },
    'totalBytesBreakdown': {
      numOrigins: 1294,
      data: TotalBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:6cc51053b40a4912a58792a01e6e3dac'
    },
    'totalBytesComparison': {
      data: TotalBytesComparison
    },
    'compressedRequests': {
      numOrigins: 1005,
      numRequests: 25742,
      gzipCompressedPercent: 70,
      brotliCompressedPercent: 2,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:99a6a52ca64240088f93e2d90e830017'
    },
    'jsBytesPercentile': {
      numOrigins: 1294,
      data: [564, 1059, 1233],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:39992e7f0e9b4ad2adb10e1f3831c9f7'
    },
    'jsBytesBreakdown': {
      numOrigins: 1294,
      data: JSBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3f7d528e0e2b446ea243404c8bcaf41f'
    },
    'jsBytesComparison': {
      numOrigins: 1294,
      data: JSBytesComparison,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:3f7d528e0e2b446ea243404c8bcaf41f'
    },
    'imgBytesPercentile': {
      numOrigins: 1294,
      data: [370, 1234, 2762],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:dcbd8635fc8344338d42594b2767e9ce'
    },
    'imgBytesBreakdown': {
      numOrigins: 1294,
      data: ImgBytesBreakdown,
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:08f39fcf00b241adaf5febd924fb9dee'
    },
    'optimizedImgOrigins': {
      numOrigins: 1287,
      data: [81, 19],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:6db9bbe708c84430b42c5ef0e0131b6f"
    },
    'responsiveImgOrigins': {
      numOrigins: 1291,
      data: [82, 18],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:3d13825730394e779a68bb30e57c5bb4"
    },
    'nextGenImgOrigins': {
      numOrigins: 1287,
      data: [50, 50],
      query: "https://bigquery.cloud.google.com/savedquery/1086077897885:bcf76294ce0e450fb8ae6b1ff87c1fd6"
    },
    'offscreenImgOrigins': {
      numOrigins: 1291,
      data: [59, 41],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:8fbec8a377ad47d1b017ee244645ec7f'
    },
    'firstContentfulPaintCrux': {
      numOrigins: 615,
      data: [18, 28, 54],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b54ac9e41421441b8fb56c4d90544929'
    },
    'firstInputDelayCrux': {
      numOrigins: 391,
      data: [74, 18, 8],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:ba0dc75ce9e842c69ddce3ceca2ddb2e'
    },
    'timeToInteractive': {
      numOrigins: 1294,
      data: [15.5, 23.7, 29.3],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:7adf80574462475a95781a4bff9399c3'
    },
    'firstContentfulPaint': {
      numOrigins: 1294,
      data: [4.95, 6.22, 8.07],
      query: 'https://bigquery.cloud.google.com/savedquery/1086077897885:b0c0efc6526642cf867202974fd0f969'
    }
  }
}