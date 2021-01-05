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
  'Svelte',
  'Sapper'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 1119,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 941,
      numRequests: 40386,
      gzipCompressedPercent: 57.4,
      brotliCompressedPercent: 22.9
    },
    'totalBytesBreakdown': {
      numUrls: 1119,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [3.40, 5.45, 5.45, 6.08, 6.61, 73.01]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 1119,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [16.35, 23.24, 15.01, 13.32, 8.49, 23.59]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 1119,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [22.97, 11.17, 9.12, 5.09, 4.11, 47.54]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 840,
      data: [55, 23, 22],
    },
    'lcpCrux': {
      numOrigins: 832,
      data: [54, 22, 24],
    },
    'fidCrux': {
      numOrigins: 724,
      data: [86, 10, 4],
    },
    'clsCrux': {
      numOrigins: 828,
      data: [73, 8, 20],
    },
    'ttfbCrux': {
      numOrigins: 834,
      data: [45, 35, 20]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 236,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 199,
      numRequests: 4043,
      gzipCompressedPercent: 55.4,
      brotliCompressedPercent: 26.3
    },
    'totalBytesBreakdown': {
      numUrls: 236,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [11.02, 9.75, 6.36, 8.05, 5.93, 58.90]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 236,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [38.14, 25.00, 13.98, 8.90, 4.24, 9.75]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 236,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [30.93, 9.32, 7.20, 3.39, 4.24, 44.92]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 177,
      data: [64, 20, 16],
    },
    'lcpCrux': {
      numOrigins: 176,
      data: [59, 21, 20],
    },
    'fidCrux': {
      numOrigins: 147,
      data: [91, 7, 2],
    },
    'clsCrux': {
      numOrigins: 174,
      data: [76, 5, 19],
    },
    'ttfbCrux': {
      numOrigins: 175,
      data: [50, 34, 16]
    },
  }
}
