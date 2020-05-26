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
  'Ember.js'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 13544,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 7504,
      numRequests: 121767,
      gzipCompressedPercent: 38.7,
      brotliCompressedPercent: 39.3
    },
    'totalBytesBreakdown': {
      numUrls: 13544,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.03, 0.09, 0.28, 5.21, 7.96, 86.43]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 13544,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.04, 0.61, 5.21, 12.20, 5.15, 76.80]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 13544,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [38.94, 33.00, 14.49, 5.28, 2.13, 6.17]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 6305,
      data: [45, 24, 31],
    },
    'lcpCrux': {
      numOrigins: 5973,
      data: [30, 19, 51],
    },
    'fidCrux': {
      numOrigins: 4752,
      data: [82, 11, 7],
    },
    'clsCrux': {
      numOrigins: 6269,
      data: [58, 10, 32],
    },
    'ttfbCrux': {
      numOrigins: 6296,
      data: [36, 37, 27],
    },
  }
}
