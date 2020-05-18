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
  'React',
  'Next.js',
  'Gatsby',
  'Create React App'
];

export const data = {
  [headerOptions[0]]: {
    'sampleSize': {
      framework: 305898,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 182974,
      numRequests: 10582295,
      gzipCompressedPercent: 74.2,
      brotliCompressedPercent: 14.2
    },
    'totalBytesBreakdown': {
      numUrls: 305898,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.51, 0.60, 2.45, 2.65, 3.31, 90.47]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 305898,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.54, 5.98, 10.40, 11.07, 11.75, 59.26]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 305898,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [21.47, 13.99, 10.48, 7.89, 6.21, 39.96]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 116835,
      data: [43, 28, 29],
    },
    'lcpCrux': {
      numOrigins: 113226,
      data: [39, 19, 42],
    },
    'fidCrux': {
      numOrigins: 88907,
      data: [82, 11, 7],
    },
    'clsCrux': {
      numOrigins: 116164,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 116705,
      data: [34, 33, 33],
    },
  },
  [headerOptions[1]]: {
    'sampleSize': {
      framework: 11056,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 4597,
      numRequests: 183968,
      gzipCompressedPercent: 60.1,
      brotliCompressedPercent: 22.5
    },
    'totalBytesBreakdown': {
      numUrls: 11056,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.35, 1.70, 3.61, 4.86, 6.67, 82.81]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 11056,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [3.63, 9.82, 18.21, 12.26, 28.36, 27.73]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 11056,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [28.73, 14.96, 10.49, 7.12, 4.45, 34.25]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 5077,
      data: [41, 28, 31],
    },
    'lcpCrux': {
      numOrigins: 4910,
      data: [35, 18, 47],
    },
    'fidCrux': {
      numOrigins: 4172,
      data: [84, 10, 6],
    },
    'clsCrux': {
      numOrigins: 5044,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 5075,
      data: [31, 28, 40],
    },
  },
  [headerOptions[2]]: {
    'sampleSize': {
      framework: 4787,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 68620,
      numRequests: 2872,
      gzipCompressedPercent: 66.3,
      brotliCompressedPercent: 17.5
    },
    'totalBytesBreakdown': {
      numUrls: 4787,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.04, 4.12, 6.02, 7.19, 7.71, 73.93]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 4787,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [8.84, 20.60, 18.30, 15.15, 10.82, 26.30]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 4787,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [27.83, 14.23, 9.92, 6.98, 5.79, 35.26]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 1877,
      data: [48, 27, 25],
    },
    'lcpCrux': {
      numOrigins: 1823,
      data: [45, 19, 35],
    },
    'fidCrux': {
      numOrigins: 1367,
      data: [85, 10, 5],
    },
    'clsCrux': {
      numOrigins: 1861,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 1874,
      data: [37, 32, 31],
    },
  },
  [headerOptions[3]]: {
    'sampleSize': {
      framework: 11152,
      all: 5775713
    },
    'compressedRequests': {
      numUrls: 156887,
      numRequests: 6871,
      gzipCompressedPercent: 57.9,
      brotliCompressedPercent: 19.4
    },
    'totalBytesBreakdown': {
      numUrls: 11152,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.93, 3.30, 4.33, 5.71, 7.03, 78.69]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 11152,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.51, 11.50, 14.62, 13.23, 10.98, 44.18]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 11152,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [33.85, 12.25, 7.71, 4.92, 4.08, 37.19]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 4832,
      data: [37, 26, 36],
    },
    'lcpCrux': {
      numOrigins: 4644,
      data: [30, 18, 52],
    },
    'fidCrux': {
      numOrigins: 4023,
      data: [85, 11, 5],
    },
    'clsCrux': {
      numOrigins: 4786,
      data: [100, 0, 0],
    },
    'ttfbCrux': {
      numOrigins: 4815,
      data: [44, 28, 28],
    },
  }
}
