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
  'Vue',
  'Nuxt.js'
];

export const data = {
  [headerOptions[0]]: {
    'sampleSize': {
      framework: 88177,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 51647,
      numRequests: 2145984,
      gzipCompressedPercent: 66.3,
      brotliCompressedPercent: 17.8
    },
    'totalBytesBreakdown': {
      numUrls: 88177,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.40, 1.53, 2.97, 3.80, 4.41, 86.89]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 88177,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [4.74, 14.35, 17.41, 14.96, 13.49, 35.05]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 88177,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [15.49, 10.79, 8.70, 7.29, 6.02, 51.71]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 40007,
      data: [48, 26, 27],
    },
    'lcpCrux': {
      numOrigins: 38987,
      data: [43, 19, 38],
    },
    'fidCrux': {
      numOrigins: 31433,
      data: [84, 12, 4],
    },
    'clsCrux': {
      numOrigins: 39829,
      data: [70, 9, 21],
    },
    'ttfbCrux': {
      numOrigins: 39960,
      data: [36, 33, 31],
    },
  },
  [headerOptions[1]]: {
    'sampleSize': {
      framework: 7418,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 4184,
      numRequests: 134833,
      gzipCompressedPercent: 68.3,
      brotliCompressedPercent: 18.4
    },
    'totalBytesBreakdown': {
      numUrls: 7418,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.44, 2.95, 4.21, 5.61, 7.75, 79.04]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 7418,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.23, 17.12, 19.72, 16.26, 13.08, 28.59]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 7418,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.26, 12.35, 7.90, 5.84, 5.49, 42.17]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 3392,
      data: [40, 29, 30],
    },
    'lcpCrux': {
      numOrigins: 3310,
      data: [36, 20, 44],
    },
    'fidCrux': {
      numOrigins: 2697,
      data: [83, 11, 6],
    },
    'clsCrux': {
      numOrigins: 3367,
      data: [71, 8, 21],
    },
    'ttfbCrux': {
      numOrigins: 3386,
      data: [30, 33, 37],
    },
  }
}
