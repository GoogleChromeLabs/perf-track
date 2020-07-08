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
      framework: 93601,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 55205,
      numRequests: 2326197,
      gzipCompressedPercent: 67.3,
      brotliCompressedPercent: 17.1
    },
    'totalBytesBreakdown': {
      numUrls: 93601,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.32, 1.51, 2.79, 3.77, 4.82, 86.80]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 93601,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.70, 17.45, 17.59, 15.36, 13.72, 30.18]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 93601,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [14.75, 10.32, 8.59, 7.16, 6.06, 53.11]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 41284,
      data: [35, 19, 46],
    },
    'lcpCrux': {
      numOrigins: 40096,
      data: [43, 18, 39],
    },
    'fidCrux': {
      numOrigins: 31495,
      data: [83, 12, 4],
    },
    'clsCrux': {
      numOrigins: 41070,
      data: [71, 9, 20],
    },
    'ttfbCrux': {
      numOrigins: 41229,
      data: [36, 31, 33]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 7649,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 4302,
      numRequests: 139505,
      gzipCompressedPercent: 68.5,
      brotliCompressedPercent: 18.4
    },
    'totalBytesBreakdown': {
      numUrls: 7649,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.97, 3.14, 4.29, 5.46, 7.62, 78.52]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 7649,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [6.17, 17.24, 19.39, 16.00, 12.81, 28.38]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 7649,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.67, 12.17, 7.80, 5.88, 5.46, 42.01]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 3491,
      data: [29, 21, 50],
    },
    'lcpCrux': {
      numOrigins: 3407,
      data: [36, 20, 44],
    },
    'fidCrux': {
      numOrigins: 2763,
      data: [83, 11, 6],
    },
    'clsCrux': {
      numOrigins: 3464,
      data: [71, 8, 21],
    },
    'ttfbCrux': {
      numOrigins: 3485,
      data: [30, 32, 38],
    },
  }
}
