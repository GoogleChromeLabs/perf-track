/**
 * Copyright 2021 Google LLC
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
  'Polymer'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 1258,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 1077,
      numRequests: 83647,
      gzipCompressedPercent: 74.2,
      brotliCompressedPercent: 8.72
    },
    'totalBytesBreakdown': {
      numUrls: 1258,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.24, 1.19, 11.37, 6.52, 5.48, 75.20]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 1258,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [24.96, 11.92, 14.55, 8.66, 5.09, 34.82]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 1258,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [25.99, 8.03, 6.36, 4.53, 3.97, 51.11]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 1086,
      data: [55, 23, 21],
    },
    'lcpCrux': {
      numOrigins: 1076,
      data: [56, 23, 21],
    },
    'fidCrux': {
      numOrigins: 880,
      data: [87, 9, 4],
    },
    'clsCrux': {
      numOrigins: 1075,
      data: [58, 9, 33],
    },
    'ttfbCrux': {
      numOrigins: 1077,
      data: [53, 28, 20],
    },
  }
}
