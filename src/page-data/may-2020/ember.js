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
  'Ember'
];

export const data = {
  [category[0]]: {
    'sampleSize': {
      framework: 13051,
      all: 5349874
    },
    'compressedRequests': {
      numUrls: 10690,
      numRequests: 176119,
      gzipCompressedPercent: 39.1,
      brotliCompressedPercent: 40.6
    },
    'totalBytesBreakdown': {
      numUrls: 13051,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.04, 0.08, 0.27, 1.02, 10.18, 88.41]
        }]
      }
    },
    'jsBytesBreakdown': {
      numUrls: 13051,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [0.05, 0.59, 1.29, 14.31, 5.45, 78.31]
        }]
      },
    },
    'imgBytesBreakdown': {
      numUrls: 13051,
      data: {
        "labels": ["< 200 KB", "200 KB - 400 KB", "400 KB - 600 KB", "600 KB - 800 KB", "800 KB - 1MB", "> 1 MB"],
        "datasets": [{
          "backgroundColor": ["#34a853", "#93c47d", "#fbbc04", "#ff6d01", "#ea4335", "#980000"],
          "data": [37.73, 34.20, 14.55, 5.15, 1.98, 6.39]
        }]
      },
    },
    'fcpCrux': {
      numOrigins: 6346,
      data: [33, 20, 48],
    },
    'lcpCrux': {
      numOrigins: 5929,
      data: [30, 19, 51],
    },
    'fidCrux': {
      numOrigins: 4791,
      data: [81, 12, 7],
    },
    'clsCrux': {
      numOrigins: 6306,
      data: [58, 10, 32],
    },
    'ttfbCrux': {
      numOrigins: 6340,
      data: [37, 37, 26],
    },
  }
}
