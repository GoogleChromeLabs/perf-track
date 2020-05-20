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

export const headerOptions = [
  'Polymer'
];

export const data = {
  [headerOptions[0]]: {
    'sampleSize': {
      framework: 1279,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 708,
      numRequests: 86579,
      gzipCompressedPercent: 81.0,
      brotliCompressedPercent: 6.14
    },
    'totalBytesBreakdown': {
      numUrls: 1279,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.39, 1.25, 7.04, 3.67, 5.32, 82.33]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 1279,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [19.16, 12.04, 10.32, 10.40, 6.10, 41.99]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 1279,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [20.95, 22.13, 13.68, 7.19, 3.83, 32.21]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 692,
      data: [39, 30, 31],
    },
    'lcpCrux': {
      numOrigins: 671,
      data: [31, 21, 48],
    },
    'fidCrux': {
      numOrigins: 501,
      data: [81, 13, 6],
    },
    'clsCrux': {
      numOrigins: 689,
      data: [56, 9, 35],
    },
    'ttfbCrux': {
      numOrigins: 692,
      data: [34, 28, 38],
    },
  }
}
