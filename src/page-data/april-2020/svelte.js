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
  'Svelte',
  'Sapper'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 387,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 327,
      numRequests: 11464,
      gzipCompressedPercent: 59.6,
      brotliCompressedPercent: 24.3
    },
    'totalBytesBreakdown': {
      numUrls: 387,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [4.13, 9.04, 6.98, 7.49, 3.88, 68.48]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 387,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [20.41, 21.96, 11.89, 16.80, 6.72, 22.22]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 387,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [32.56, 11.63, 5.43, 4.91, 3.62, 41.86]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 185,
      data: [40, 20, 39],
    },
    'lcpCrux': {
      numOrigins: 184,
      data: [46, 18, 36],
    },
    'fidCrux': {
      numOrigins: 151,
      data: [86, 10, 4],
    },
    'clsCrux': {
      numOrigins: 185,
      data: [74, 9, 17],
    },
    'ttfbCrux': {
      numOrigins: 185,
      data: [40, 32, 28]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 88,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 78,
      numRequests: 1385,
      gzipCompressedPercent: 69.0,
      brotliCompressedPercent: 22.3
    },
    'totalBytesBreakdown': {
      numUrls: 88,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [6.82, 4.55, 13.64, 7.95, 2.27, 64.77]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 88,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [40.91, 20.45, 10.23, 9.09, 6.82, 12.50]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 88,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [30.68, 7.95, 5.68, 4.55, 2.27, 48.86]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 38,
      data: [50, 20, 30],
    },
    'lcpCrux': {
      numOrigins: 37,
      data: [51, 20, 29],
    },
    'fidCrux': {
      numOrigins: 27,
      data: [90, 8, 2],
    },
    'clsCrux': {
      numOrigins: 38,
      data: [77, 8, 15],
    },
    'ttfbCrux': {
      numOrigins: 38,
      data: [45, 33, 22]
    },
  }
}
