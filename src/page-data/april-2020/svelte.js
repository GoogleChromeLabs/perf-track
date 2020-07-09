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
      framework: 377,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 226,
      numRequests: 9318,
      gzipCompressedPercent: 58.5,
      brotliCompressedPercent: 18.7
    },
    'totalBytesBreakdown': {
      numUrls: 377,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [2.12, 6.63, 6.37, 6.37, 5.57, 72.94]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 377,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [16.71, 23.34, 9.81, 15.38, 9.28, 25.46]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 377,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [27.32, 15.92, 4.24, 6.10, 3.98, 42.44]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 171,
      data: [38, 20, 42],
    },
    'lcpCrux': {
      numOrigins: 170,
      data: [43, 19, 39],
    },
    'fidCrux': {
      numOrigins: 146,
      data: [83, 12, 4],
    },
    'clsCrux': {
      numOrigins: 171,
      data: [71, 8, 21],
    },
    'ttfbCrux': {
      numOrigins: 171,
      data: [38, 32, 30]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 79,
      all: 5789440
    },
    'compressedRequests': {
      numUrls: 54,
      numRequests: 935,
      gzipCompressedPercent: 75.6,
      brotliCompressedPercent: 17.1
    },
    'totalBytesBreakdown': {
      numUrls: 79,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [3.80, 5.06, 11.39, 5.06, 6.33, 68.35]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 79,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [34.18, 25.32, 11.39, 13.92, 5.06, 10.13]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 79,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.58, 11.39, 3.80, 5.06, 2.53, 50.63]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 29,
      data: [49, 21, 31],
    },
    'lcpCrux': {
      numOrigins: 29,
      data: [50, 19, 30],
    },
    'fidCrux': {
      numOrigins: 24,
      data: [86, 12, 2],
    },
    'clsCrux': {
      numOrigins: 29,
      data: [76, 10, 14],
    },
    'ttfbCrux': {
      numOrigins: 29,
      data: [45, 32, 23]
    },
  }
}
