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
      framework: 21627,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 18240,
      numRequests: 501380,
      gzipCompressedPercent: 62.0,
      brotliCompressedPercent: 14.6
    },
    'totalBytesBreakdown': {
      numUrls: 21627,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.11, 1.12, 2.52, 3.79, 4.83, 87.64]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 21627,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.94, 5.93, 10.02, 12.85, 12.88, 57.37]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 21627,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [33.91, 12.76, 8.08, 6.18, 5.20, 33.87]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 11051,
      data: [26, 18, 56],
    },
    'lcpCrux': {
      numOrigins: 10679,
      data: [27, 17, 56],
    },
    'fidCrux': {
      numOrigins: 9465,
      data: [84, 11, 5],
    },
    'clsCrux': {
      numOrigins: 10983,
      data: [66, 8, 26],
    },
    'ttfbCrux': {
      numOrigins: 11029,
      data: [44, 28, 28],
    },
  }
}
