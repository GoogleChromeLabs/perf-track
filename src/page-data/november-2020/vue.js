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
  'Vue',
  'Nuxt.js'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 147489,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 128190,
      numRequests: 5913721,
      gzipCompressedPercent: 61.4,
      brotliCompressedPercent: 19.8
    },
    'totalBytesBreakdown': {
      numUrls: 147489,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.32, 1.63, 3.08, 4.10, 5.00, 85.87]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 147489,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [6.72, 18.04, 17.69, 14.43, 13.24, 29.89]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 147489,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [16.04, 11.18, 8.86, 7.04, 5.88, 51.01]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 111812,
      data: [58, 21, 21],
    },
    'lcpCrux': {
      numOrigins: 110447,
      data: [58, 20, 22],
    },
    'fidCrux': {
      numOrigins: 92566,
      data: [87, 10, 3],
    },
    'clsCrux': {
      numOrigins: 109993,
      data: [68, 9, 23],
    },
    'ttfbCrux': {
      numOrigins: 111141,
      data: [50, 33, 18]
    },
  },
  [category[1]]: {
    'sampleSize': {
      framework: 12547,
      all: 6971970
    },
    'compressedRequests': {
      numUrls: 10325,
      numRequests: 348725,
      gzipCompressedPercent: 58.8,
      brotliCompressedPercent: 23.9
    },
    'totalBytesBreakdown': {
      numUrls: 12547,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.76, 2.10, 5.14, 5.32, 6.93, 79.76]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 12547,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [5.67, 17.08, 19.25, 17.86, 12.16, 27.97]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 12547,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [26.44, 11.67, 7.75, 6.23, 5.20, 42.70]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 9801,
      data: [54, 24, 22],
    },
    'lcpCrux': {
      numOrigins: 9691,
      data: [52, 23, 25],
    },
    'fidCrux': {
      numOrigins: 8375,
      data: [86, 9, 5],
    },
    'clsCrux': {
      numOrigins: 9617,
      data: [69, 8, 22],
    },
    'ttfbCrux': {
      numOrigins: 9734,
      data: [45, 37, 18],
    },
  }
}
