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
  'Angular'
];

export const data = {
  [headerOptions[0]]: {
    'sampleSize': {
      framework: 21630,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 12448,
      numRequests: 341994,
      gzipCompressedPercent: 63.7,
      brotliCompressedPercent: 13.4
    },
    'totalBytesBreakdown': {
      numUrls: 21630,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.18, 1.01, 2.61, 3.93, 5.13, 87.16]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 21630,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.98, 5.82, 10.86, 13.40, 12.94, 56.00]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 21630,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [33.80, 12.85, 7.88, 6.08, 5.05, 34.34]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 9817,
      data: [36, 26, 39],
    },
    'lcpCrux': {
      numOrigins: 9495,
      data: [27, 17, 56],
    },
    'fidCrux': {
      numOrigins: 8355,
      data: [84, 11, 5],
    },
    'clsCrux': {
      numOrigins: 9745,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 9789,
      data: [43, 28, 29],
    },
  }
}
