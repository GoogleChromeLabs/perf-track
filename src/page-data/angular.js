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
  'Angular'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 21598,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 12558,
      numRequests: 339846,
      gzipCompressedPercent: 62.5,
      brotliCompressedPercent: 13.3
    },
    'totalBytesBreakdown': {
      numUrls: 21598,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.11, 1.04, 2.59, 3.93, 5.12, 87.22]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 21598,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.94, 6.22, 10.57, 13.39, 12.76, 56.11]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 21598,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [33.87, 12.74, 7.73, 6.15, 5.05, 34.46]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 9819,
      data: [32, 18, 50],
    },
    'lcpCrux': {
      numOrigins: 9490,
      data: [26, 17, 57],
    },
    'fidCrux': {
      numOrigins: 8343,
      data: [84, 11, 5],
    },
    'clsCrux': {
      numOrigins: 9743,
      data: [67, 8, 25],
    },
    'ttfbCrux': {
      numOrigins: 9788,
      data: [43, 28, 29],
    },
  }
}
