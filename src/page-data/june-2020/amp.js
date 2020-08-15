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
  'AMP'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 11044,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 7655,
      numRequests: 124920,
      gzipCompressedPercent: 30.3,
      brotliCompressedPercent: 58.8
    },
    'totalBytesBreakdown': {
      numUrls: 11044,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [3.57, 16.91, 17.39, 17.51, 10.96, 33.68]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 11044,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [37.15, 44.58, 7.89, 4.43, 2.07, 3.88]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 11044,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [46.56, 20.24, 8.55, 5.22, 3.35, 16.08]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 5656,
      data: [44, 28, 28],
    },
    'lcpCrux': {
      numOrigins: 5561,
      data: [46, 19, 35],
    },
    'fidCrux': {
      numOrigins: 3900,
      data: [85, 12, 3],
    },
    'clsCrux': {
      numOrigins: 5623,
      data: [84, 5, 11],
    },
    'ttfbCrux': {
      numOrigins: 5652,
      data: [30, 32, 38]
    },
  }
}
