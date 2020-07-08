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
  'Polymer'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 765,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 663,
      numRequests: 29109,
      gzipCompressedPercent: 69.8,
      brotliCompressedPercent: 11.1
    },
    'totalBytesBreakdown': {
      numUrls: 765,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.52, 2.35, 9.15, 7.32, 6.80, 73.86]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 765,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [25.36, 19.61, 17.12, 13.46, 6.93, 17.52]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 765,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [29.28, 9.80, 6.14, 7.45, 3.66, 43.66]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 359,
      data: [25, 16, 59],
    },
    'lcpCrux': {
      numOrigins: 350,
      data: [31, 22, 47],
    },
    'fidCrux': {
      numOrigins: 257,
      data: [82, 13, 5],
    },
    'clsCrux': {
      numOrigins: 356,
      data: [59, 8, 33],
    },
    'ttfbCrux': {
      numOrigins: 359,
      data: [30, 29, 41],
    },
  }
}
