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
  'Angular'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 30077,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 25481,
      numRequests: 734158,
      gzipCompressedPercent: 57.6,
      brotliCompressedPercent: 16.8
    },
    'totalBytesBreakdown': {
      numUrls: 30077,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.11, 1.15, 2.39, 3.67, 4.33, 88.36]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 30077,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.98, 5.91, 11.10, 12.07, 11.80, 58.14]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 30077,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [32.18, 12.08, 8.61, 6.19, 4.61, 36.33]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 23565,
      data: [45, 23, 32],
    },
    'lcpCrux': {
      numOrigins: 23240,
      data: [38, 22, 40],
    },
    'fidCrux': {
      numOrigins: 21043,
      data: [87, 10, 4],
    },
    'clsCrux': {
      numOrigins: 23206,
      data: [62, 9, 29],
    },
    'ttfbCrux': {
      numOrigins: 23368,
      data: [59, 28, 13],
    },
  }
}
