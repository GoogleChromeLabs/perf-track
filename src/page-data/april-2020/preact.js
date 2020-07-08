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

export const category = [
  'Preact'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 103137,
      all: 5336356
    },
    'compressedRequests': {
      numUrls: 93863,
      numRequests: 4768703,
      gzipCompressedPercent: 63.5,
      brotliCompressedPercent: 17.9
    },
    'totalBytesBreakdown': {
      numUrls: 103137,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.09, 0.36, 1.20, 2.27, 3.26, 92.82]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 103137,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.50, 6.75, 17.10, 17.70, 15.37, 41.58]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 103137,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [10.34, 10.76, 9.80, 8.80, 6.85, 53.44]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 56398,
      data: [37, 21, 42],
    },
    'lcpCrux': {
      numOrigins: 54563,
      data: [48, 19, 33],
    },
    'fidCrux': {
      numOrigins: 41429,
      data: [80, 15, 6],
    },
    'clsCrux': {
      numOrigins: 56211,
      data: [70, 10, 20],
    },
    'ttfbCrux': {
      numOrigins: 56370,
      data: [33, 35, 32],
    },
  }
}
