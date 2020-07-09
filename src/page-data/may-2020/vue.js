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
  'Vue',
  'Nuxt.js'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 92110,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 79951,
      numRequests: 3455425,
      gzipCompressedPercent: 66.4,
      brotliCompressedPercent: 17.9
    },
    'totalBytesBreakdown': {
      numUrls: 92110,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.33, 1.38, 2.98, 3.69, 4.70, 86.92]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 92110,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.66, 17.02, 16.91, 14.66, 14.01, 31.74]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 92110,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [14.81, 10.49, 8.67, 7.51, 6.05, 52.48]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 46585,
      data: [36, 19, 44],
    },
    'lcpCrux': {
      numOrigins: 45081,
      data: [44, 18, 38],
    },
    'fidCrux': {
      numOrigins: 35727,
      data: [83, 12, 4],
    },
    'clsCrux': {
      numOrigins: 46376,
      data: [70, 9, 21],
    },
    'ttfbCrux': {
      numOrigins: 46535,
      data: [36, 32, 32]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 7637,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 6300,
      numRequests: 206124,
      gzipCompressedPercent: 65.9,
      brotliCompressedPercent: 20.4
    },
    'totalBytesBreakdown': {
      numUrls: 7637,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.85, 2.37, 5.15, 5.24, 6.51, 79.89]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 7637,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.81, 16.25, 17.73, 16.28, 13.88, 30.05]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 7637,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.02, 12.47, 7.83, 6.81, 6.21, 40.67]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 3960,
      data: [29, 22, 49],
    },
    'lcpCrux': {
      numOrigins: 3844,
      data: [36, 21, 43],
    },
    'fidCrux': {
      numOrigins: 3220,
      data: [83, 11, 6],
    },
    'clsCrux': {
      numOrigins: 3934,
      data: [70, 8, 21],
    },
    'ttfbCrux': {
      numOrigins: 3957,
      data: [31, 33, 36],
    },
  }
}
