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
  'AMP'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 9840,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 4539,
      numRequests: 75089,
      gzipCompressedPercent: 32.5,
      brotliCompressedPercent: 57.9
    },
    'totalBytesBreakdown': {
      numUrls: 9840,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [4.09, 16.29, 18.17, 17.02, 10.87, 33.56]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 9840,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [38.94, 41.21, 8.78, 4.72, 2.45, 3.90]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 9840,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [48.40, 18.73, 8.55, 5.29, 3.32, 15.70]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 5400,
      data: [44, 27, 29],
    },
    'lcpCrux': {
      numOrigins: 5288,
      data: [43, 18, 39],
    },
    'fidCrux': {
      numOrigins: 3646,
      data: [84, 13, 3],
    },
    'clsCrux': {
      numOrigins: 5345,
      data: [84, 5, 11],
    },
    'ttfbCrux': {
      numOrigins: 5395,
      data: [31, 31, 38]
    },
  }
}
