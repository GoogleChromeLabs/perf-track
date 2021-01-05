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
  'React',
  'Next.js',
  'Gatsby',
  'Create React App'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 322685,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 295141,
      numRequests: 16401485,
      gzipCompressedPercent: 75.3,
      brotliCompressedPercent: 11.9
    },
    'totalBytesBreakdown': {
      numUrls: 322685,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.27, 2.30, 5.49, 5.46, 5.68, 80.81]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 322685,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [6.21, 15.65, 14.03, 11.05, 8.87, 44.19]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 322685,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [29.33, 15.87, 9.98, 7.14, 5.35, 32.34]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 220889,
      data: [60, 23, 17],
    },
    'lcpCrux': {
      numOrigins: 217348,
      data: [60, 21, 19],
    },
    'fidCrux': {
      numOrigins: 155657,
      data: [85, 8, 6],
    },
    'clsCrux': {
      numOrigins: 213469,
      data: [72, 8, 20],
    },
    'ttfbCrux': {
      numOrigins: 210117,
      data: [47, 39, 14],
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 19884,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 11441,
      numRequests: 537841,
      gzipCompressedPercent: 56.0,
      brotliCompressedPercent: 24.5
    },
    'totalBytesBreakdown': {
      numUrls: 19884,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.53, 1.81, 12.51, 9.87, 9.34, 65.95]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 19884,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [3.52, 26.81, 19.72, 15.47, 8.72, 25.76]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 19884,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [34.39, 16.79, 10.05, 7.04, 4.23, 27.49]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 14517,
      data: [58, 24, 18],
    },
    'lcpCrux': {
      numOrigins: 14285,
      data: [56, 23, 22],
    },
    'fidCrux': {
      numOrigins: 12575,
      data: [84, 9, 7],
    },
    'clsCrux': {
      numOrigins: 14274,
      data: [73, 9, 19],
    },
    'ttfbCrux': {
      numOrigins: 14412,
      data: [45, 37, 17],
    },
  },
  [category[2]]: {
    'sampleSize': {
      framework: 7824,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 6809,
      numRequests: 200522,
      gzipCompressedPercent: 42.1,
      brotliCompressedPercent: 32.4
    },
    'totalBytesBreakdown': {
      numUrls: 7824,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.20, 4.49, 6.02, 6.95, 7.22, 74.12]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 7824,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [9.83, 20.54, 18.34, 13.22, 11.78, 26.29]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 7824,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [27.02, 16.00, 10.89, 7.11, 6.11, 32.87]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 6193,
      data: [67, 19, 14],
    },
    'lcpCrux': {
      numOrigins: 6150,
      data: [65, 19, 16],
    },
    'fidCrux': {
      numOrigins: 4930,
      data: [89, 8, 3],
    },
    'clsCrux': {
      numOrigins: 6123,
      data: [76, 7, 16],
    },
    'ttfbCrux': {
      numOrigins: 6169,
      data: [58, 32, 11],
    },
  },
  [category[3]]: {
    'sampleSize': {
      framework: 8590,
      all: 6903239
    },
    'compressedRequests': {
      numUrls: 7655,
      numRequests: 186993,
      gzipCompressedPercent: 47.2,
      brotliCompressedPercent: 25.5
    },
    'totalBytesBreakdown': {
      numUrls: 8590,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.23, 3.55, 5.97, 7.45, 8.10, 73.69]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 8590,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [7.65, 12.53, 16.66, 12.81, 11.32, 39.05]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 8590,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [36.87, 10.97, 7.64, 5.97, 5.36, 33.20]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 6319,
      data: [52, 23, 25],
    },
    'lcpCrux': {
      numOrigins: 6248,
      data: [47, 22, 30],
    },
    'fidCrux': {
      numOrigins: 5498,
      data: [88, 8, 4],
    },
    'clsCrux': {
      numOrigins: 6235,
      data: [67, 9, 25],
    },
    'ttfbCrux': {
      numOrigins: 6274,
      data: [63, 26, 11],
    },
  }
}
