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
  'React',
  'Next.js',
  'Gatsby',
  'Create React App'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 280287,
      all: 5336356
    },
    'compressedRequests': {
      numUrls: 244110,
      numRequests: 14308558,
      gzipCompressedPercent: 73.6,
      brotliCompressedPercent: 14.6
    },
    'totalBytesBreakdown': {
      numUrls: 280287,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.59, 0.61, 2.45, 2.86, 3.47, 90.02]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 280287,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.62, 5.90, 10.53, 10.97, 12.35, 58.63]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 280287,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [21.55, 13.68, 10.22, 7.79, 6.22, 40.53]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 127879,
      data: [33, 21, 47],
    },
    'lcpCrux': {
      numOrigins: 123472,
      data: [39, 19, 41],
    },
    'fidCrux': {
      numOrigins: 98059,
      data: [82, 11, 7],
    },
    'clsCrux': {
      numOrigins: 127341,
      data: [70, 9, 21],
    },
    'ttfbCrux': {
      numOrigins: 127786,
      data: [34, 33, 33],
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 12801,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 6885,
      numRequests: 287532,
      gzipCompressedPercent: 58.5,
      brotliCompressedPercent: 24.1
    },
    'totalBytesBreakdown': {
      numUrls: 12801,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.31, 1.46, 3.41, 4.09, 4.78, 85.95]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 12801,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [2.89, 8.45, 14.35, 12.94, 27.81, 33.56]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 12801,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [31.58, 14.83, 11.21, 8.00, 4.59, 29.79]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 6745,
      data: [31, 17, 52],
    },
    'lcpCrux': {
      numOrigins: 6482,
      data: [34, 17, 49],
    },
    'fidCrux': {
      numOrigins: 5585,
      data: [81, 11, 8],
    },
    'clsCrux': {
      numOrigins: 6715,
      data: [64, 18, 19],
    },
    'ttfbCrux': {
      numOrigins: 6741,
      data: [32, 24, 44],
    },
  },
  [category[2]]: {
    'sampleSize': {
      framework: 4788,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 4181,
      numRequests: 105906,
      gzipCompressedPercent: 57.7,
      brotliCompressedPercent: 24.1
    },
    'totalBytesBreakdown': {
      numUrls: 4788,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [1.07, 4.34, 6.06, 6.37, 8.27, 73.89]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 4788,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [9.09, 19.44, 18.48, 14.54, 11.47, 26.98]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 4788,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [27.57, 15.14, 9.84, 6.89, 6.41, 34.15]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 1877,
      data: [36, 21, 43],
    },
    'lcpCrux': {
      numOrigins: 1823,
      data: [45, 19, 36],
    },
    'fidCrux': {
      numOrigins: 1369,
      data: [85, 10, 5],
    },
    'clsCrux': {
      numOrigins: 1861,
      data: [79, 7, 14],
    },
    'ttfbCrux': {
      numOrigins: 1874,
      data: [37, 32, 31],
    },
  },
  [category[3]]: {
    'sampleSize': {
      framework: 11683,
      all: 5336356
    },
    'compressedRequests': {
      numUrls: 10485,
      numRequests: 250261,
      gzipCompressedPercent: 56.9,
      brotliCompressedPercent: 19.9
    },
    'totalBytesBreakdown': {
      numUrls: 11683,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.99, 3.30, 4.64, 5.87, 6.63, 78.58]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 11683,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.38, 10.84, 14.00, 13.41, 11.32, 45.04]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 11683,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [34.49, 11.48, 7.26, 5.44, 4.23, 37.11]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 5495,
      data: [29, 19, 53],
    },
    'lcpCrux': {
      numOrigins: 5283,
      data: [31, 19, 50],
    },
    'fidCrux': {
      numOrigins: 4575,
      data: [85, 11, 5],
    },
    'clsCrux': {
      numOrigins: 5459,
      data: [72, 7, 21],
    },
    'ttfbCrux': {
      numOrigins: 5480,
      data: [46, 28, 26],
    },
  }
}
